"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Logo2 from '../assets/logoFolder/RectangleLogo.png'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ navbarcheck }: { navbarcheck: any }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/aboutUs', label: 'About Us' },
        { href: '/beleifs', label: 'Our Beliefs' },
        { href: '/giving', label: 'Giving' },
    ];

    const socialLinks = [
        { href: 'https://www.instagram.com/piwckaneshie/', icon: AiFillInstagram, label: 'Instagram' },
        { href: 'https://www.tiktok.com/@piwckn', icon: FaTiktok, label: 'TikTok' },
        { href: 'https://web.facebook.com/PIWCKaneshie', icon: BsFacebook, label: 'Facebook' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
            }}
        >
            <div className="section">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Left */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    >
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src={Logo2}
                                alt="PIWC Kaneshie Logo"
                                width={120}
                                height={80}
                                className="object-contain"
                            />
                        </Link>
                    </motion.div>

                    {/* Navigation Links - Center (Desktop) */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 + index * 0.1,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }}
                            >
                                <Link
                                    href={link.href}
                                    className={`font-Inter text-sm font-medium transition-colors hover:text-secondary ${
                                        pathname === link.href ? 'text-secondary' : 'text-white'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Social Icons - Right (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-secondary transition-colors"
                                aria-label={social.label}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6 + index * 0.1,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    >
                        {mobileMenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    >
                        <div className="section py-4">
                            <ul className="space-y-4">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: [0.43, 0.13, 0.23, 0.96]
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block font-Inter text-base font-medium py-2 transition-colors hover:text-secondary ${
                                                pathname === link.href ? 'text-secondary' : 'text-white'
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.div
                                className="flex items-center space-x-6 pt-4 mt-4 border-t border-white/10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.4,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }}
                            >
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-secondary transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
