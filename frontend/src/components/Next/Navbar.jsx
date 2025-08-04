import logo from "../assets/logo (4).png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Navbar() {
  const { t } = useTranslation();
  const [Click , setClick] = useState("")

  function HandleClick(){
    setClick(!Click)
    console.log(!Click ? "click" : "Click11")
  }

  return (
    <>
      <nav className="bg-[#2D9DCC] ">
        <div className="w-full max-w-[1140px] m-auto">
          <div className="flex items-center justify-between">
            <div className="my-2">
              <img src={logo} alt="" className="w-40 h-14" />
            </div>

            <div className="flex">
              <ul className={`md:flex hidden`}>
                <li className="px-3 text-white font-medium">{t("home")}</li>
                <li className="px-3 text-white font-medium">{t("about")} </li>
                <li className="px-3 text-white font-medium">
                  {t("projects")}{" "}
                </li>
                <li className="px-3 text-white font-medium">{t("news")} </li>
                <li className="px-3 text-white font-medium">{t("contact")} </li>
              </ul>

            </div>
            

            <div className="flex items-center justify-center">
              <p className="rounded-full bg-white text-[#2D9DCC] py-2 px-4">
                {t("donate")}
              </p>
              <button className={`bg-gray-950 p-2 md:hidden flex` }
              onClick={HandleClick}
              ></button>{" "}
            </div>
          </div>
        </div>
        
        
      </nav>
                    <div className="">
                 <ul className={`${!Click ? "hidden" : "flex"}  w-full  absolute z-10 justify-between items-center `}>
                <li className="px-1.5 text-sm text-white font-medium">{t("home")}</li>
                <li className="px-1.5 text-sm text-white font-medium">{t("about")} </li>
                <li className="px-1.5 text-sm text-white font-medium">
                  {t("projects")}{" "}
                </li>
                <li className="px-1.5 text-sm text-white font-medium">{t("news")} </li>
                <li className="px-1.5 text-sm text-white font-medium">{t("contact")} </li>
              </ul>
              </div>
    </>
  );
}
