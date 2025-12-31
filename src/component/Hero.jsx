export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="grid gap-14 md:grid-cols-2 items-center w-full">
        {/* IMAGE — MOBILE FIRST */}
        <div className="flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-indigo-600 blur-xl opacity-30 rounded-full"></div>
            <img
              src="/assets/Myface.jpeg"
              alt="profile"
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64
                         rounded-full object-cover border border-gray-700"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left md:order-1">
          <p className="text-indigo-400 uppercase text-xs tracking-widest">
            Frontend Developer
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Hello Everyone,
            <br />
            I'm <span className="text-indigo-400">Gya</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            Perkenalkan, saya Gyandra Naufal Pratama, mahasiswa semester 1 yang
            memiliki ketertarikan dalam dunia pengembangan web, khususnya
            sebagai Frontend Developer dengan fokus pada React JS dan UI modern.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30">
              View Projects
            </button>
            <button className="w-full sm:w-auto px-6 py-3 border border-gray-700 rounded-xl hover:border-indigo-500 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
