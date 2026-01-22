"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import Beliefs from './Beleifs'

interface BeliefItem {
  id: number;
  title: string;
  content: string;
  points?: string[];
  emphasis?: string[];
  aspects?: string[];
  values?: string[];
  practices?: string[];
  references?: string[];
}

export default function AccordionsBeliefs() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
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
            How We Live
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Our Core Values
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            The values and practices that shape our community and guide our walk with Christ.
          </p>
        </motion.div>

        {/* Accordion - 2 columns using CSS columns */}
        <div className="md:columns-2 gap-4 md:gap-6">
          {(Beliefs as BeliefItem[]).map((belief, index) => (
            <motion.div
              key={belief.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className={`bg-white rounded-xl border border-gray-100 overflow-hidden mb-4 md:mb-6 break-inside-avoid ${
                openId === belief.id ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
              } transition-shadow duration-300`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(belief.id)}
                className="w-full p-5 md:p-6 flex items-start justify-between gap-4 text-left group"
              >
                <div className="flex items-start gap-3">
                  <span className={`text-2xl font-bold transition-colors duration-300 ${
                    openId === belief.id ? 'text-secondary' : 'text-gray-200'
                  }`}>
                    {String(belief.id).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors pt-1">
                    {belief.title}
                  </h3>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openId === belief.id
                    ? 'bg-primary text-white rotate-0'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}>
                  {openId === belief.id ? (
                    <HiMinus className="w-4 h-4" />
                  ) : (
                    <HiPlus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openId === belief.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-6 pt-0">
                      {/* Divider */}
                      <div className="h-px bg-gray-100 mb-5" />

                      {/* Main Content */}
                      <p className="text-gray-700 leading-relaxed">
                        {belief.content}
                      </p>

                      {/* Emphasis Points (for Discipleship) */}
                      {belief.emphasis && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-900 mb-2">We emphasise:</p>
                          <div className="flex flex-wrap gap-2">
                            {belief.emphasis.map((item, i) => (
                              <span
                                key={i}
                                className="text-sm px-3 py-1 bg-primary/5 text-primary rounded-full"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Values (for Church Culture) */}
                      {belief.values && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-900 mb-2">Our Values:</p>
                          <ul className="grid grid-cols-1 gap-1.5">
                            {belief.values.map((value, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                                {value}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Practices (for Church Culture) */}
                      {belief.practices && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-900 mb-2">Our Practices:</p>
                          <ul className="grid grid-cols-1 gap-1.5">
                            {belief.practices.map((practice, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Aspects (for Holy Spirit) */}
                      {belief.aspects && (
                        <div className="mt-4">
                          <ul className="space-y-1.5">
                            {belief.aspects.map((aspect, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                                {aspect}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* General Points */}
                      {belief.points && (
                        <div className="mt-4">
                          <ul className="space-y-1.5">
                            {belief.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Scripture References */}
                      {belief.references && belief.references.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-gray-100">
                          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
                            Scripture References
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {belief.references.map((ref, i) => (
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
