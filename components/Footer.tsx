"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { BsFacebook, BsArrowUpRight } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

import Logo from "../assets/logoFolder/RectangleLogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Our Beliefs", href: "/beleifs" },
    { name: "Give", href: "/giving" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/piwckaneshie/", icon: AiFillInstagram },
    { name: "Facebook", href: "https://web.facebook.com/PIWCKaneshie", icon: BsFacebook },
    { name: "TikTok", href: "https://www.tiktok.com/@piwckn", icon: FaTiktok },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="section">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={Logo}
                  alt="PIWC Kaneshie"
                  width={140}
                  height={50}
                  className="mb-6"
                />
                <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
                  PIWC Kaneshie is a vibrant ministry of the Church of Pentecost,
                  committed to spreading the gospel and transforming lives through
                  faith, worship, and community.
                </p>

                {/* Service Times */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wider text-white/40 font-medium">Service Times</p>
                  <p className="text-white/80 text-sm">Marathon Prayer: 7:30 AM</p>
                  <p className="text-white/80 text-sm">Sunday Service: 8:00 AM</p>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xs uppercase tracking-wider text-white/40 font-medium mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      <BsArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xs uppercase tracking-wider text-white/40 font-medium mb-6">
                Connect
              </h4>

              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-secondary hover:border-secondary hover:text-primary transition-all"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-white/40 font-medium">Location</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Kaneshie, Accra<br />
                  Ghana
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-white/40 text-xs">
            &copy; {currentYear} PIWC Kaneshie. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            A ministry of The Church of Pentecost
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
