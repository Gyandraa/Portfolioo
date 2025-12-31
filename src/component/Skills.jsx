export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"];
  return (
    <section id="skills" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <div
              key={i}
              className="bg-gray-900/40 backdrop-blur-sm border border-white/5
                         rounded-xl p-4 md:p-6 text-center text-sm md:text-base font-medium
                         hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
