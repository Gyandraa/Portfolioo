export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-indigo-400 uppercase text-sm tracking-wide">
            Frontend Developer
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Hello Everyone, I'm <span className="text-indigo-400">Gya</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Perkenalkan, saya Gyandra Naufal Pratama, mahasiswa semester 1 yang
            memiliki ketertarikan dalam dunia pengembangan web, khususnya
            sebagai Frontend Developer dengan fokus pada React JS dan UI modern.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30">
              View Projects
            </button>
            <button className="px-6 py-3 border border-gray-700 rounded-xl hover:border-indigo-500 transition">
              Contact
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-indigo-600 blur-xl opacity-30 rounded-full"></div>
            <img
              src="/assets/Myface.jpeg"
              alt="profile"
              className="relative w-64 h-64 rounded-full object-cover border border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
