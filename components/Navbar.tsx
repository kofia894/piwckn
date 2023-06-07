"use client"
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Logo from '../assets/logoFolder/COPlogotrans.png'
import Logo2 from '../assets/logoFolder/RectangleLogo.png'
import { AiFillCaretDown} from "react-icons/ai";
import { RxHamburgerMenu} from "react-icons/rx";
import { RxCross1} from "react-icons/rx";



export default function Navbar(){
    const [navisOpen, setnavOpen] = useState(false);

    const handleClick = () => {
        setnavOpen(current => !current);
      };
    return (
        <>
        <nav>
            <div className="absolute w-full z-40 text-white text-sm font-medium">
                <div className="hidden lg:flex  flex-row w-full justify-center lg:justify-between space-x-10 pl-24 pr-10">
                    <div className="logo pt-4">
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
                    <ul className="flex flex-row space-x-12 pt-6">
                        <li><Link href="/">Home</Link> </li>
                        <li><Link href="/aboutUs">About Us</Link> </li>
                        <li><Link href="/beleifs">Our Beliefs</Link> </li>
                        <li><Link href="/giving">Giving</Link> </li>
                    </ul>
                </div>
                <div className="visible lg:hidden flex flex-col w-full  ">
                    {!navisOpen &&<div className="flex flex-row justify-between w-full" >
                        <div className="logo p-3">
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
                    {navisOpen && <div className="flex flex-row justify-between w-full bg-primary" >
                        <div className="logo p-3">
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
                            {navisOpen &&<button className="p-3" onClick={handleClick}>
                                < RxCross1  size={30}/>
                            </button>}
                           

                        </div>
                    </div>}
                    {navisOpen && <div className=" h-screen w-screen flex flex-col justify-center items-center bg-primary">
                        <ul className="flex flex-col space-y-20 text-center hover:text-sceondary">
                            <li onClick={handleClick}><Link href="/">Home</Link> </li>
                            <li onClick={handleClick}><Link href="/aboutUs">About Us</Link> </li>
                            <li onClick={handleClick}><Link href="/beleifs">Our beliefs</Link> </li>
                            <li onClick={handleClick}><Link href="/giving">Giving</Link> </li>
                        </ul>
                        
                    </div>}
                </div>
            </div>
        </nav>
        </>
    )
}
