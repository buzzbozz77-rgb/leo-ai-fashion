import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B0F] text-white">

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-extrabold tracking-wide text-lg">
              LEO
            </a>

            <div className="flex gap-6 text-sm text-white/80">
              <a href="/stylist" className="hover:text-yellow-400 transition">
                Stylist
              </a>
              <a href="/try-on" className="hover:text-yellow-400 transition">
                Try-On
              </a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="pt-20">
          {children}
        </main>

      </body>
    </html>
  );
}