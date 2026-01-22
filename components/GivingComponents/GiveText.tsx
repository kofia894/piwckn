"use client"
import { motion } from "motion/react";

export default function GiveText() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36">
      <div className="section px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-3 h-3 bg-secondary rotate-45" />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Thank you for investing into the{" "}
              <span className="italic font-light">Kingdom of God</span>
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic">
              "Faithfulness in giving offerings and paying tithes to enhance the ministry of the Church is emphasised. The Church and members depend solely on God as the source of financial supply."
            </p>
          </motion.blockquote>

          {/* Scripture reference */}
          <motion.div
            className="mt-8 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
              2 Corinthians 9:7
            </span>
            <span className="text-sm px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
              Malachi 3:10
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
