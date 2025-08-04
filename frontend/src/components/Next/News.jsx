
export default function News() {
  const news = [
    {
      id: 1,
      name: "8 yoshli Muhammadrazo kerakli mablag‘ni 2 kunda oldi",
      description:
        "Yurakdan Yurakkacha loyihasi orqali yurak operatsiyasi uchun kerak bo‘lgan 12 million so‘m atigi 48 soat ichida yig‘ildi.",
      img: "https://via.placeholder.com/400x250?text=Muhammadrazo",
    },
    {
      id: 2,
      name: "8 yoshli Muhammadrazo kerakli mablag‘ni 2 kunda oldi",
      description:
        "Yurakdan Yurakkacha loyihasi orqali yurak operatsiyasi uchun kerak bo‘lgan 12 million so‘m atigi 48 soat ichida yig‘ildi.",
      img: "https://via.placeholder.com/400x250?text=Muhammadrazo",
    },
    {
      id: 3,
      name: "8 yoshli Muhammadrazo kerakli mablag‘ni 2 kunda oldi",
      description:
        "Yurakdan Yurakkacha loyihasi orqali yurak operatsiyasi uchun kerak bo‘lgan 12 million so‘m atigi 48 soat ichida yig‘ildi.",
      img: "https://via.placeholder.com/400x250?text=Muhammadrazo",
    },
    {
      id: 3,
      name: "8 yoshli Muhammadrazo kerakli mablag‘ni 2 kunda oldi",
      description:
        "Yurakdan Yurakkacha loyihasi orqali yurak operatsiyasi uchun kerak bo‘lgan 12 million so‘m atigi 48 soat ichida yig‘ildi.",
      img: "https://via.placeholder.com/400x250?text=Muhammadrazo",
    },
  ];
  return (
    <>
      <section className="w-full max-w-[1140px] m-auto">
        <div>
          {/* Line */}
          <div className="flex items-center mt-5">
            <div className="w-[8%] h-1 bg-blue-400"></div>
            <p className="px-4 font-semibold text-xl text-blue-600">
              Yangiliklar
            </p>
            <div className="w-[96%] h-1 bg-blue-400"></div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 m-auto gap-x-36 gap-y-16 mt-16">
            {news.map((item) => (
              <div key={item.id}>
                <div>
                  <img className="bg-gray-400 w-[70%] h-48" src={null} alt="" />
                  <div className="flex mt-3">
                    <div className="w-1.5 h-24  bg-blue-500"></div>
                    <div className="w-[68%] ml-4"><h3 className=" line-clamp-2 font-bold">{item.name}</h3><p className=" line-clamp-2">{item.description}</p></div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
