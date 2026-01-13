export default function TryOnPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur">

        <h1 className="text-4xl font-extrabold mb-4">
          Virtual Try-On
        </h1>

        <p className="text-white/70 text-lg mb-8">
          Experience your outfit before wearing it.
        </p>

        <div className="border border-dashed border-white/20 rounded-xl p-8 mb-8">
          <p className="text-sm text-white/60">
            Camera-based fitting powered by LEO AI
          </p>
          <p className="mt-2 text-xs text-white/40">
            Coming soon
          </p>
        </div>

        <a
          href="/stylist"
          className="inline-block px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          Back to LEO Stylist
        </a>

      </div>
    </div>
  );
}