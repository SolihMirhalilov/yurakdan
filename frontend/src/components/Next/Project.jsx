import { useState } from "react";
import don from "../assets/donate.jpg";
import { useTranslation } from "react-i18next";

export default function Project() {
  const {t} = useTranslation()
  const slider = [
    {
      id: 1,
      name: "Kristina Kasparova   16 yosh",
      description: "Ehtiyoji:  Dori darmonlar",
      img: don,
    },
    {
      id: 2,
      name: "Aliyev Muhammad   10 yosh",
      description: "Ehtiyoji:  Operatsiya uchun mablag‘",
      img: don,
    },
    {
      id: 3,
      name: "Nodira Karimova   21 yosh",
      description: "Ehtiyoji:  Reabilitatsiya vositalari",
      img: don,
    },
  ];

  const [current, setcurrent] = useState(0);
  const length = slider.length;

  const prev = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <section className="mt-16">

        
        <div className="max-w-[1140px] m-auto w-full">
          {/* Liniya */}
          <div className="flex items-center">
            <div className="w-[90%] bg-blue-400 h-1" ></div>
            <p className="px-4 text-blue-600 font-semibold text-xl">Loyhalar</p>
            <div className="w-[10%] bg-blue-400 h-1"></div>
          </div>

          {/* Slider&Loyha */}
          <div>
            <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-4 h-96 relative overflow-hidden mt-16">
              {/* Chap taraf */}
              <div className="relative h-96 w-full">
                <img
                  src={slider[current].img}
                  className="object-cover rounded-xl w-full h-full"
                  alt="don"
                />

                {/* Tugmalar */}
                <div
                  className="absolute top-1/2 left-4 text-white text-3xl cursor-pointer z-20"
                  onClick={prev}
                >
                  {"<"}
                </div>
                <div
                  className="absolute top-1/2 right-4 text-white text-3xl cursor-pointer z-20"
                  onClick={next}
                >
                  {">"}
                </div>

                {/* Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-36 rounded-xl bg-gradient-to-t from-black to-transparent z-10" />

                {/* Matn */}
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <p className="text-xl font-semibold">{slider[current].name}</p>
                  <p>{slider[current].description}</p>
                </div>
              </div>

              {/* Statistika */}
              <div className="h-96 w-full flex flex-col justify-center space-y-4 z-50">
                <div className="bg-[#2D9DCC] text-center text-white font-bold py-[46px] rounded-xl shadow">
                {t("helped")}
                </div>
                <div className="bg-[#2D9DCC] text-center text-white font-bold py-[46px] rounded-xl shadow">
                {t("collected")}
                </div>
                <div className="bg-[#2D9DCC] text-center text-white font-bold py-[46px] rounded-xl shadow">
                 {t("sponsors" )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
