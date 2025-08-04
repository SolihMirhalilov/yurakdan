import photo from "../assets/volunter.png";
export default function Aloqa() {
  return (
    <>
      <section className="w-full m-auto max-w-[1140px] pt-24">
        <div className="flex items-center">
          {/* Левая линия */}
          <div className="h-[4px] bg-blue-400 w-[8%]"></div>

          {/* Заголовок */}
          <p className="mx-4 text-lg font-semibold text-blue-700 whitespace-nowrap">
            Aloqa
          </p>

          {/* Правая линия */}
          <div className="h-[4px] bg-blue-400 w-full"></div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-5">
          <div>
            <img className="w-full h-[600px] object-cover" src={photo} alt="" />
          </div>

          <div className="w-full px-2 py-3 mt-2 rounded-3xl border-[1px] border-black">
            <div className="p-16">
              <p>Ismingiz</p>
              <input className="w-full px-2 py-2.5 mt-2 rounded-xl border-[1px]  border-black " type="text" name="" id="" />
  
                          <p className="mt-4">Telefon raqamingiz</p>
                           <input className="w-full px-2 py-2.5 mt-2 rounded-xl border-[1px]  border-black " type="text" name="" id="" />
                                 <p className="mt-4">Sovolingizni qoldiring</p>
<textarea
  placeholder="Xabar kiriting..."
  className="w-full h-32 text-base px-4 py-3 border border-black rounded-xl resize-none"
/>


        <button className="bg-[#82C0DA] w-full   py-3.5 rounded-xl mt-3 text-white" >Aloqaga chiqish</button>

  
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
