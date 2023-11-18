
import { BsFillCameraVideoFill } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 z-40 flex w-screen h-[7vh]  items-center justify-center  ">
        <div className="bg-slate-900 h-[7vh] w-[98vw] lg:w-[90vw] rounded-lg flex justify-between px-10">
          <div className=" flex items-center h-full text-white space-x-3">
            <p className="border-r-2 lg:w-26 pr-4 text-sm lg:text-base">SUNDAY SERVICE</p>
            <p className="md:border-r-2 lg:w-26 pr-4 text-xs md:text-base">7:30 - 10:30 AM</p>
          </div>
          <div className="hidden marquee w-60 relative md:flex text-white items-center overflow-x-hidden overflow-y-clip bg-slate-900">
            <div className=" animate-marquee whitespace-nowrap p-0">
                <span className="mx-4"> Marathon Prayer Start at 7:30AM </span>
                <span className="mx-4 text-xl">-</span>
                <span className="mx-4">Church Service Starts at 8:00 AM</span>
            </div>
            <div className="absolute p-0 animate-marquee2 whitespace-nowrap ">
                <span className="mx-4">Marathon Prayer Start at 7:30AM </span>
                <span className="mx-4 text-xl">-</span>
                <span className="mx-4">Church Service Starts at 8:00 AM</span>
            </div>
          </div>
          <a href="https://web.facebook.com/PIWCKaneshie" className="pointer flex text-white items-center h-full space-x-3 text-xs md:text-base">
            <p className="">JOIN US LIVE</p>
            <BsFillCameraVideoFill size={20} />
          </a>
        </div>
      </footer>
    </>
  );
}
