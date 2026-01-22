"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import Tenets from './Tenets'

interface TenetItem {
  id: number;
  title: string;
  content: string;
  references?: string[];
  attributes?: { name: string; refs: string[] }[];
  aspects?: { name: string; refs: string[] }[];
}

export default function AccordionsTenets() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="section px-4 md:px-10">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3 block">
            What We Believe
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Our 11 Tenets
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            The foundational beliefs that guide our faith and practice as a church.
          </p>
        </motion.div>

        {/* Accordion - 2 columns using CSS columns */}
        <div className="md:columns-2 gap-x-8 md:gap-x-12 lg:gap-x-16">
          {(Tenets as TenetItem[]).map((tenet, index) => (
            <motion.div
              key={tenet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="border-b border-gray-200 break-inside-avoid"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(tenet.id)}
                className="w-full py-5 md:py-6 flex items-center justify-between gap-4 text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 font-medium w-8">
                    {String(tenet.id).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {tenet.title}
                  </h3>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openId === tenet.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}>
                  {openId === tenet.id ? (
                    <HiMinus className="w-4 h-4" />
                  ) : (
                    <HiPlus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openId === tenet.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-12 pr-4 md:pr-12">
                      {/* Main Content */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {tenet.content}
                      </p>

                      {/* Attributes (for God's attributes) */}
                      {tenet.attributes && (
                        <div className="mt-4 space-y-2">
                          <p className="text-sm font-medium text-gray-900 mb-2">Divine Attributes:</p>
                          <div className="flex flex-wrap gap-2">
                            {tenet.attributes.map((attr, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-3 py-1.5 bg-primary/5 rounded-full text-sm"
                              >
                                <span className="font-medium text-primary">{attr.name}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Aspects (for Christ) */}
                      {tenet.aspects && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-900 mb-3">Through:</p>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {tenet.aspects.map((aspect, i) => (
                              <div
                                key={i}
                                className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-100"
                              >
                                <span className="text-sm text-gray-700">{aspect.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Scripture References */}
                      {tenet.references && tenet.references.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-gray-100">
                          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
                            Scripture References
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {tenet.references.map((ref, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-medium"
                              >
                                {ref}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
