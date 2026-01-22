"use client"
import { motion } from "motion/react";
import { BsBank2 } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";
import givingImage from "../../assets/giving/Giving.webp";

const paymentMethods = [
  {
    id: 1,
    title: "Bank Transfer",
    icon: BsBank2,
    provider: "UMB Bank",
    accountName: "PIWC Kaneshie",
    accountNumber: "0021012694013",
    extra: "Accra Main Branch",
  },
  {
    id: 2,
    title: "Mobile Money",
    icon: FaMobileAlt,
    provider: "MTN MoMo",
    accountName: "PIWC Kaneshie",
    accountNumber: "0593748212",
    extra: "Ref: Tithes/Offering",
  },
];

export default function GivingPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeMethod, setActiveMethod] = useState<number>(1);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const selectedMethod = paymentMethods.find(m => m.id === activeMethod) || paymentMethods[0];
  const isCopied = copiedId === selectedMethod.id;

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src={givingImage}
          alt="Giving"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 md:from-black/60 md:via-black/30 md:to-black/10" />
      </div>

      {/* Content Layer */}
      <div className="relative min-h-screen w-full flex flex-col lg:flex-row items-center lg:justify-between px-6 md:px-12 lg:px-16 xl:px-24 pt-28 md:pt-32 lg:pt-16 pb-12 lg:py-16 gap-8 lg:gap-12">

        {/* Left Side - Hero Text */}
        <motion.div
          className="lg:w-1/2 text-white text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 md:mb-6">
            Support the<br />
            <span className="italic font-light">Kingdom</span>
          </h1>

          <p className="hidden md:block text-white/70 text-sm md:text-base max-w-md leading-relaxed mb-8 mx-auto lg:mx-0">
            "Faithfulness in giving offerings and paying tithes enhances the ministry.
            The Church depends solely on God as the source of financial supply."
          </p>

          {/* Scripture Tags */}
          <div className="flex gap-3 justify-center lg:justify-start">
            <span className="text-xs px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full border border-white/20">
              2 Corinthians 9:7
            </span>
            <span className="text-xs px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full border border-white/20">
              Malachi 3:10
            </span>
          </div>
        </motion.div>

        {/* Right Side - Floating Card */}
        <motion.div
          className="w-full max-w-md lg:max-w-none lg:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-8 w-full lg:w-[380px] xl:w-[420px]">
            {/* Card Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold mb-2 block">
                Ways to Give
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                How to Give
              </h2>
            </div>

            {/* Method Tabs */}
            <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-xl">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setActiveMethod(method.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeMethod === method.id
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <method.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{method.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Method Details */}
            <div className="space-y-4">
              {/* Provider */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <selectedMethod.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{selectedMethod.title}</p>
                  <p className="text-sm text-gray-500">{selectedMethod.provider}</p>
                </div>
              </div>

              {/* Account Name */}
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-500">Account Name</span>
                <span className="font-medium text-gray-900">{selectedMethod.accountName}</span>
              </div>

              {/* Account Number with Copy */}
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-500">Account Number</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-gray-900">{selectedMethod.accountNumber}</span>
                  <button
                    onClick={() => copyToClipboard(selectedMethod.accountNumber, selectedMethod.id)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      isCopied
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    title={isCopied ? "Copied!" : "Copy"}
                  >
                    {isCopied ? (
                      <HiCheck className="w-4 h-4" />
                    ) : (
                      <HiOutlineClipboardCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Extra Info */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-500">Note</span>
                <span className="text-sm text-gray-600">{selectedMethod.extra}</span>
              </div>

              {/* Tip Box */}
              <div className="bg-primary/5 rounded-xl p-4 mt-4">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <span className="font-semibold text-primary">Tip:</span> Include your name and purpose
                  (Tithes, Offering, Welfare) in the reference field.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative gradient - hidden on mobile */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
}
