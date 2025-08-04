import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ins from "../assets/instagram (1) 3.png";
import tel from "../assets/telegram (1) 2 (1).png";
import fac from "../assets/facebook (1) 2 (1).png";
import rus from "../assets/russia 1.png";
import uk from "../assets/united-kingdom 2.png";
import uzbek from "../assets/uzbekistan (1) 1.png";


const MiniNavbar = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("uz");

  const languages = [
    { code: "uz", name: "O‘zbek", flag: uzbek },
    { code: "cyrl", name: "Ўзбек", flag: uzbek },
    { code: "ru", name: "Русский", flag: rus }  ,
    { code: "en", name: "English", flag: uk },
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "uz";
    i18n.changeLanguage(savedLang);
    setSelectedLang(savedLang);
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setSelectedLang(lang);
    setOpen(false);
  };

  return (
    <nav className="md:flex items-center justify-between max-w-[1140px] w-full m-auto md:my-5 my-2 hidden">
      
      <div className="flex items-center ">
        <img src={ins} className="w-8 mx-2" alt="Instagram" />
        <img src={tel} className="w-8 mx-2" alt="Telegram" />
        <img src={fac} className="w-8 mx-2" alt="Facebook" />
        <p className="ml-4">yurakdanyurakkacham@gmail.com</p>
      </div> 

      <div className="flex  items-center space-x-6">
        <p>+998-96-124-69-74</p>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 border px-3 py-1 rounded hover:bg-gray-100"
          >
            <img
              src={
                languages.find((lang) => lang.code === selectedLang)?.flag
              }
              className="w-5 h-5"
              alt="Flag"
            />
            <span>
              {languages.find((lang) => lang.code === selectedLang)?.name}
            </span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="w-full flex items-center px-3 py-2 hover:bg-gray-100"
                >
                  <img src={lang.flag} className="w-5 h-5 mr-2" alt={lang.name} />
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

    </nav>
  );
};

export default MiniNavbar;
