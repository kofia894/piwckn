"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Logo from '../assets/logoFolder/COPlogotrans.png'
import Logo2 from '../assets/logoFolder/RectangleLogo.png'
import { BsFacebook, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiFillInstagram, AiFillMail, AiOutlineTwitter } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaTiktok} from "react-icons/fa";
import { RxHamburgerMenu} from "react-icons/rx";
import { RxCross1} from "react-icons/rx";



export default function Navbar({navbarcheck}: {navbarcheck: any}){
    const [navisOpen, setnavOpen] = useState(false);

    const handleClick = () => {
        setnavOpen(current => !current);
    };

    useEffect(()=>{
        navbarcheck(navisOpen);
    },[navisOpen])
    
    return (
        <>
        <nav>
            {navisOpen && <div className="z-30 md:pt-10 pl-24 pr-10 flex flex-row justify-between w-full lg:top-0 lg:w-screen bg-primary" >
                <div className="logo p-3 ">
                    <Link href="/">
                        <Image
                            src={Logo2}
                            alt="Logo of COP global"
                            width={150}
                            height={100}
                        />
                    </Link>
                </div>
                <div>
                    {!navisOpen &&<button className="p-3" onClick={handleClick}>
                        <RxHamburgerMenu  size={30}/>
                    </button>}
                    {navisOpen &&<button className="p-3 text-white flex items-center space-x-3" onClick={handleClick}>
                        <p className="">CLOSE</p><RxCross1  size={30}/>
                    </button>}
                </div>
            </div>}
            {navisOpen && <div className="z-30  md:pl-24 lg:pr-10 h-screen w-screen flex md:flex-row md:justify-between justify-center md:pt-16 md:items-start bg-primary">
                <ul className="w-full md:w-[60%] flex flex-col space-y-16 md:space-y-20 font-Barlow text-white md:text-6xl text-4xl text-center md:text-left md:rounded md:border-r-4 md:pr-10 lg:pr-0 pt-16 md:pt-0 pl-32 md:pl-0">
                    <li onClick={handleClick}><Link href="/"><p className="hover:text-secondary">Home</p></Link> </li>
                    <li onClick={handleClick}><Link href="/aboutUs"><p className="hover:text-secondary">About Us</p></Link> </li>
                    <li onClick={handleClick}><Link href="/beleifs"><p className="hover:text-secondary">Our Beliefs</p></Link> </li>
                    <li onClick={handleClick}><Link href="/giving"><p className="hover:text-secondary">Giving</p></Link> </li>
                </ul>
                <ul className="flex flex-col space-y-5 w-full justify-start px-10 font-Barlow text-white md:text-6xl text-left hover:text-secondary">
                
                <div className="hidden md:flex w-full flex-col lg:flex-row gap-6 mb-8">
                    <div className="flex gap-4 items-center text-white">
                        <BsFillTelephoneOutboundFill size={20} />
                        <span className="lg:text-lg text-xl text-white">+233 24 348 3905</span>
                        </div>
                        <div className="flex gap-4 items-center text-white">
                        <AiFillMail size={20} />
                        <span className="lg:text-lg text-xl text-white">piwckaneshiemedia@gmail.com</span>
                        </div>
                        <div className="flex gap-4 items-center text-white">
                        <ImLocation2 size={20} />
                        <span className="lg:text-lg text-xl text-white">PIWC Kaneshie Sakatsuru St, Accra</span>
                        </div>
                    </div>

                    <div className="hidden md:flex w-full items-center top-10 ">
                        <div className="h-[200px] md:h-[200px] w-[700px]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.96329875982!2d-0.2506739!3d5.5724447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99c52c30a95f%3A0x51887407cf9577db!2sPIWC%20Kaneshie!5e0!3m2!1sen!2sgh!4v1671199268296!5m2!1sen!2sgh" 
                            loading="lazy" className="h-[200px] md:h-[200px] lg:w-[700px]  "></iframe>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-10 mt-2 text-white">
                        <a href="https://www.instagram.com/piwckaneshie/" className="flex items-center space-x-3"><AiFillInstagram size={30} /> <p className="text-4xl">Instagram</p></a>
                        <a href="https://www.tiktok.com/@piwckn?_t=8b02DzuKGog&_r=1" className="flex items-center space-x-3"><FaTiktok size={30} /><p className="text-4xl">TikTok</p></a>
                        <a className="flex items-center space-x-3" href="https://web.facebook.com/PIWCKaneshie">
                        <BsFacebook size={30} /><p className="text-4xl">Facebook</p>
                        </a>
                </div>
                </ul>
                
            </div>}
            <div className="w-full z-30 text-white text-sm font-medium fixed pt-10">
                
                <div  className="hidden  lg:flex  flex-row w-full justify-center lg:justify-between space-x-10 pl-24 pr-10">
                    <div className="logo pt-4 cursor-pointer">
                        <Link href="/">
                            <Image
                                src={Logo2}
                                alt="Logo of COP global"
                                width={150}
                                height={100}
                                className="object-cover"
                                
                            />
                        </Link>
                    </div>
                    <div onClick={handleClick} className=" bg-white w-40 h-16 rounded-full mt-3 shadow-lg">
                        <div className=" text-black h-full w-full flex items-center justify-center space-x-3">
                            <h1>MENU</h1>
                            <RxHamburgerMenu  size={30}/>
                        </div>
                    </div>
                </div>
                <div className="z-30 flex flex-col w-full  ">
                    {!navisOpen &&<div className=" visible lg:hidden flex flex-row justify-between w-full" >
                        <div className="logo p-3 ">
                            <Link href="/">
                                <Image
                                    src={Logo2}
                                    alt="Logo of COP global"
                                    width={150}
                                    height={100}
                                />
                            </Link>
                        </div>
                        <div className='transition delay-100 duration-300 ease-in-out'>
                            {!navisOpen &&<button className="p-3 transition delay-100 duration-300 ease-in-out" onClick={handleClick}>
                                <RxHamburgerMenu  size={30}/>
                            </button>}
                            {navisOpen &&<button className="p-3 transition delay-100 duration-300 ease-in-out" onClick={handleClick}>
                                < RxCross1  size={30}/>
                            </button>}
                           

                        </div>
                    </div>}
                   
                </div>
            </div>
        </nav>
        </>
    )
}
