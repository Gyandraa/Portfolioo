export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-gray-400 mt-3">
            Tertarik bekerja sama atau sekadar ngobrol? Silakan hubungi saya.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* INFO */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Let’s Talk 👋</h3>
            <p className="text-gray-400 mb-6">
              Saya terbuka untuk diskusi, freelance, maupun peluang kerja.
              Jangan ragu untuk menghubungi saya melalui form atau media sosial.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>📧 Email: gyandra.naufal.com</li>

              <li>🌍 Location: Bandung, Indonesia.</li>
            </ul>
          </div>

          {/* FORM */}
          <form className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
