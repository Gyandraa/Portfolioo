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

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-14">
        Selected Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group bg-gradient-to-b from-gray-800/80 to-gray-900
                       rounded-2xl overflow-hidden border border-gray-800
                       hover:border-indigo-500/50 transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover
                           group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-black/40 opacity-0
                           group-hover:opacity-100 transition"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-400">
                {p.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm">{p.desc}</p>

              <span
                className="inline-block mt-6 text-sm text-indigo-400
                               group-hover:underline"
              >
                View Project →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
