export default function Projects() {
  const projects = [
    {
      image: "/assets/Photo-Studio.png",
      title: "Photo Studio Website",
      desc: "Website Photo-Studio",
    },
    {
      image: "/assets/landing-pages.png",
      title: "Landing Pages",
      desc: "Website Landing-Pages",
    },
    {
      image: "/assets/Ecommerce.png",
      title: "Ecommerce Website",
      desc: "Membuat tampilan Ecommerce menggunakn React JS",
    },
  ];
  return (
    <section id="projects" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14">
          Projects
        </h2>

        {/* Grid: 1 kolom di HP, 3 di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800
                         hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="relative h-48 md:h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-indigo-400">
                  {p.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  {p.desc}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-indigo-400 group-hover:translate-x-1 transition-transform">
                  View Project →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
