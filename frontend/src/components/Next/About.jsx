import { useTranslation } from "react-i18next";
export default function About() {
  const {t} = useTranslation()
  return (
    <>
      <section className="mt-[700px]">
        <div className="max-w-[1140px] w-full mx-auto">
          <div className="flex items-center">
            {/* Левая линия */}
            <div className="h-[4px] bg-blue-400 w-[8%]"></div>

            {/* Заголовок */}
            <p className="mx-4 text-lg font-semibold text-blue-700 whitespace-nowrap">
              Biz haqimizda
            </p>

            {/* Правая линия */}
            <div className="h-[4px] bg-blue-400 w-full"></div>
          </div>

          <div>
            <p className="text-center mx-[5%] mt-12 font-medium md:text-xl text-sm">
                {t("aboutus")}<span className="bg-blue-400 text-sm text-white">{t("aboutspan")}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
