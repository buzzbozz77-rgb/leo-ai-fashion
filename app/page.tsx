export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <h1 className="text-5xl font-extrabold tracking-wide mb-4">
          LEO
        </h1>

        <p className="text-lg text-white/70 mb-10">
          Intelligence meets style.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="/stylist"
            className="py-4 rounded-xl bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition"
          >
            LEO AI Stylist
          </a>

          <a
            href="/try-on"
            className="py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition"
          >
            Virtual Try-On
          </a>
        </div>

      </div>
    </div>
  );
}