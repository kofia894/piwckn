"use client"
import { motion } from "motion/react";
import { BsBank2 } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";
import { useState } from "react";

const paymentMethods = [
  {
    id: 1,
    title: "Bank Transfer",
    icon: BsBank2,
    provider: "UMB Bank",
    details: [
      { label: "Account Name", value: "PIWC Kaneshie" },
      { label: "Account Number", value: "0021012694013", copiable: true },
      { label: "Branch", value: "Accra Main Branch" },
    ],
  },
  {
    id: 2,
    title: "Mobile Money",
    icon: FaMobileAlt,
    provider: "MTN Mobile Money",
    details: [
      { label: "Account Name", value: "PIWC Kaneshie" },
      { label: "Account Number", value: "0593748212", copiable: true },
      { label: "Reference", value: "Tithes / Offering" },
    ],
  },
];

export default function Giveinfo() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="bg-gray-50 py-20 md:py-28 lg:py-36">
      <div className="section px-4 md:px-10">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3 block">
            Ways to Give
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            How to Give
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Choose your preferred method to support the ministry of PIWC Kaneshie.
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                  <p className="text-sm text-gray-500">{method.provider}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                {method.details.map((detail, i) => {
                  const copyId = `${method.id}-${i}`;
                  const isCopied = copiedId === copyId;

                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-1">
                          {detail.label}
                        </p>
                        <p className="text-gray-900 font-medium">{detail.value}</p>
                      </div>
                      {detail.copiable && (
                        <button
                          onClick={() => copyToClipboard(detail.value, copyId)}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            isCopied
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                          }`}
                          title={isCopied ? "Copied!" : "Copy to clipboard"}
                        >
                          {isCopied ? (
                            <HiCheck className="w-5 h-5" />
                          ) : (
                            <HiOutlineClipboardCopy className="w-5 h-5" />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 md:mt-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
            <h4 className="text-lg font-semibold text-primary mb-3">
              Important Note
            </h4>
            <p className="text-gray-600 leading-relaxed">
              When making a transfer, please include your name and the purpose of your giving
              (e.g., Tithes, Offering, Welfare, Building Fund) in the reference or description field.
              This helps us properly allocate your generous contribution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
