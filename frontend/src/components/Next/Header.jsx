import header from "../assets/header.png"
import { useTranslation } from "react-i18next"

export default function Header(){
    const {t} = useTranslation();
    return(
        <>
            <header>

                <div>
                     <img src={header} className="w-full h-[640px] object-cover absolute" alt="" />
                     <div className="max-w-[1140px] m-auto w-full">
                    <div  className="md:w-[45%]  sm:w-[70%] mt-32 h-96 absolute ">
                        <h1 className="text-white md:text-5xl text-3xl  font-bold ">{t("headline")}</h1>
                        <p className="text-white md:text-2xl text-xl mt-12">{t("description")}</p>

                        <button className="border-none float-end mt-5 md:px-5 md:py-3 px-2 py-1.5 md:text-lg    bg-[#2D9DCC] text-white rounded-full ">Yordam berish</button>
                    </div>
                    </div>
                </div>

            </header>
        </>
    )
}