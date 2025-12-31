const skills = ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-14">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-2xl p-6 text-center
                       hover:border-indigo-500/50 hover:scale-105 transition"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
