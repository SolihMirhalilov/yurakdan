import facebook from "../assets/facebook (1) 2.png";
import tel from "../assets/telegram (1) 2.png";
import inst from "../assets/instagram (1) 2.png";
import logo from "../assets/logo (4).png";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#2D9DCC] mt-24">
        <div className="grid md:grid-cols-4 grid-cols-2 max-w-[1140px] m-auto w-full pt-16">
          <div className="">
            <img src={logo} className="w-36 h-14" alt="" />
          </div>
          <div>
            <ul>
              <li className=" cursor-pointer font-semibold text-xl pb-4 text-white">
                Sahifalar
              </li>
              <li className="py-0.5 text-white cursor-pointer">Bosh sahifa</li>
              <li className="py-0.5 text-white cursor-pointer">
                Biz haqimizda
              </li>
              <li className="py-0.5 text-white cursor-pointer">Loyhalar</li>
              <li className="py-0.5 text-white cursor-pointer">Yangiliklar</li>
              <li className="py-0.5 text-white cursor-pointer">Aloqa</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="  font-semibold text-xl pb-4 text-white">
                Contact
              </li>
              <li className="py-0.5 text-white">
            Toshkent shahri
              </li>
              <li className="py-0.5 text-white">
                Biz haqimizda
              </li>
              <li className="py-0.5 text-white ">
                +998 99 123 45 67{" "}
              </li>
              <li className="py-0.5 text-white ">
                info@yurakdan.uz
              </li>
              <li className="py-0.5 text-white ">
                Ish vaqti: Dushanba–Juma, 9:00–18:00
              </li>
                            <li className="py-0.5 text-white " onClick={null}>
                admin
              </li>
            </ul>
          </div>

          <div>
            <div>
              <p className="font-semibold text-xl pb-4 text-white">
                {" "}
                Ijtmoi tarmoqlat
              </p>
              <div className="flex">
                <a className="mx-2" href="">
                  <img src={facebook} alt="" />
                </a>
                <a className="mx-2" href="">
                  <img src={tel} alt="" />
                </a>
                <a className="mx-2" href="">
                  <img src={inst} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
}
