const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Tailwind CSS",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10
                       rounded-xl py-4 text-center
                       hover:border-indigo-500/50 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
