export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 px-6">
      {" "}
      {/* Tambah padding samping agar tidak mepet layar hp */}
      <div className="flex flex-col items-center md:grid md:grid-cols-2 md:items-center gap-10">
        {/* IMAGE — DI ATAS PADA MOBILE, DI KANAN PADA DESKTOP */}
        <div className="flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-indigo-600 blur-xl opacity-30 rounded-full"></div>
            <img
              src="/assets/Myface.jpeg"
              alt="profile"
              className="relative w-48 h-48 md:w-80 md:h-80 rounded-full object-cover border border-gray-700"
            />
          </div>
        </div>

        {/* TEXT — DI BAWAH PADA MOBILE, DI KIRI PADA DESKTOP */}
        <div className="text-center md:text-left md:order-1">
          <p className="text-indigo-400 uppercase text-sm font-semibold tracking-widest">
            Frontend Developer
          </p>

          <h1 className="text-3xl md:text-6xl font-extrabold mt-3 leading-tight text-white">
            Hello Everyone, I'm <span className="text-indigo-400">Gya</span>
          </h1>

          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Perkenalkan, saya{" "}
            <span className="text-white font-medium">
              Gyandra Naufal Pratama
            </span>
            , mahasiswa semester 1 yang tertarik pada pengembangan web modern,
            khususnya Frontend Developer dengan React JS dan UI modern.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-full font-medium text-white">
              View Projects
            </button>
            <button className="px-8 py-3 border border-gray-700 hover:bg-gray-800 transition-colors rounded-full font-medium text-white">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
