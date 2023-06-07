import Link from "next/link";
// import Image from 'next/legacy/Image'
import styles from "../styles/Home.module.css";
import Logo from "../assets/logoFolder/COPlogotrans.png";
import Logo2 from "../assets/logoFolder/RectangleLogo.png";
import { BsFacebook, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiFillInstagram, AiFillMail, AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import  Image  from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="-mb-10 px-10  items-center justify-center bg-gray-900 ">
        <div className="flex justify-between items-center w-full border-b-[1px] py-2 border-white">
          <div className="cop "><Image src={Logo} alt="Logo of COP global" width={70} height={70} /></div>
          <div className="piwc pt-5">
            <Image
            src={Logo2}
            alt="Logo of COP global"
            width={150}
            height={40}
          /></div>
        </div>
        <div className=" text-white flex flex-col justify-between border-b-[1px]  border-white">
          <div className="w-full flex items-center justify-center">
            <div className="h-[500px] md:h-[400px] w-screen">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.96329875982!2d-0.2506739!3d5.5724447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99c52c30a95f%3A0x51887407cf9577db!2sPIWC%20Kaneshie!5e0!3m2!1sen!2sgh!4v1671199268296!5m2!1sen!2sgh" 
                loading="lazy" className="h-[500px] md:h-[400px] w-screen p-10 "></iframe>
            </div>
          </div>

          <div className="flex justify-center w-full flex-col md:flex-row gap-6 mb-8">
            <div className="flex gap-4 items-center text-white">
              <BsFillTelephoneOutboundFill size={20} />
              <span className="lg:text-lg text-white">+233 24 348 3905</span>
            </div>
            <div className="flex gap-4 items-center text-white">
              <AiFillMail size={20} />
              <span className="lg:text-lg text-white">piwckaneshiemedia@gmail.com</span>
            </div>
            <div className="flex gap-4 items-center text-white">
              <ImLocation2 size={20} />
              <span className="lg:text-lg text-white">PIWC Kaneshie Sakatsuru St, Accra</span>
            </div>
          </div>
        </div>
        <div className="text-primary flex flex-col items-center justify-between mt-8 mb-4 pb-10">
          <h1 className="font-medium text-white">PIWC KANESHIE ALL RIGHTS RESERVED</h1>
          <div className="flex gap-10 mt-2 text-white">
            <a href="https://www.instagram.com/p/CqQE7Nujm8I/?igshid=YmMyMTA2M2Y=" className="hover:scale-125 duration-300 transition ease-in-out delay-150"><AiFillInstagram size={30} /></a>
            <a href="https://www.tiktok.com/@piwckn?_t=8b02DzuKGog&_r=1" className="transition ease-in-out delay-150 hover:scale-125 duration-300"><FaTiktok size={30} /></a>
            <a className="transition ease-in-out delay-150 hover:scale-125 duration-300" href="https://www.facebook.com/100064863157577/posts/pfbid0tLxPoPTFrqJDs5gZQNNysZUUwZrrMgHQPGNXTQ3YktoXmp6CdEjNmiAei9JXwZWvl/?mibextid=cr9u03">
              <BsFacebook size={30} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
