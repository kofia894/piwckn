import Image from "next/image";
import PE from "../../assets/AboutUs/PE_Kwaku.jpg";
import Ex1 from "../../assets/AboutUs/EldYirebi.jpg";
import Ex2 from "../../assets/AboutUs/EldMantey.jpg";
import Ex3 from "../../assets/AboutUs/EldAmfo.jpg";
import Ex4 from "../../assets/AboutUs/eldnoble.jpg";
import Ex5 from "../../assets/AboutUs/MrsAsare.jpg";

const data = [
  {
    id: 1,
    name: "Eld Kweku Asare",
    role: "Presiding Elder",
    img: PE,
  },
  {
    id: 2,
    name: "Eld Daniel Mantey",
    role: "Secetary",
    img: Ex2,
  },
  {
    id: 3,
    name: "Dcns Evelyn Asare",
    role: "Women's Ministry Leader",
    img: Ex5,
  },
  {
    id: 4,
    name: "Dcns Janet Sambi",
    role: "Women's Ministry ",
    img: Ex5,
  },
  {
    id: 5,
    name: "Eld Joseph Yirebi",
    role: "Exeutive Member",
    img: Ex1,
  },
  
  {
    id: 6,
    name: "Eld Paul Amfo",
    role: "Executive Member",
    img: Ex3,
  },
  {
    id: 7,
    name: "Eld Noble Aduamah",
    role: "Executive Member",
    img: Ex4,
  },
  
];

export default function Executives() {
  return (
    <>
      <div className="py-40 w-screen min-h-screen bg-slate-900 rounded-t-[30px] md:rounded-t-[85px] lg:rounded-[85px] flex flex-col items-center justify-center mt-20">
        <h1 className=" font-Barlow text-white font-bold lg:text-8xl text-6xl  mb-20">
          Executives
        </h1>
        <div className=" slide grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 lg:gap-5 gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="rounded-[40px] group lg:w-72 lg:h-96 w-60 h-72 relative flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="  ">
                <Image
                  src={item.img}
                  alt="Logo of Youth Ministry"
                  layout="fill"
                  objectFit="cover"
                  className="object-fill  absolute w-full h-full  transform bg-center bg-cover group-hover:brightness-50 group-hover:blur-[1px]  transition delay-100 duration-300 ease-in-out "
                />
              </div>
              <div className="absolute text-transparent grid content-center text-center space-y-4 group-hover:text-white ">
                <h1 className="font-Barlow transition delay-150 duration-300 ease-in-out font-extrabold">
                  {item.role}
                </h1>
                <h1 className="font-Barlow transition delay-150 duration-300 ease-in-out">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
