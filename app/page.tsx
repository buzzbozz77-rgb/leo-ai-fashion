export default function Home() {
  return (
    <main style={styles.main}>
      
      {/* NAVBAR */}
      <header style={styles.header}>
        <div style={styles.logo}>LEO</div>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="/">Home</a>
          <a style={styles.navLink} href="/stylist">Stylist</a>
          <a style={styles.navLink} href="/try-on">Try-On</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          AI Fashion <span style={styles.glow}>Intelligence</span>
        </h1>

        <p style={styles.subtitle}>
          Old Money Aesthetics meets Artificial Intelligence.
        </p>

        <div style={styles.buttons}>
          <a href="/stylist" style={styles.primaryBtn}>AI Stylist</a>
          <a href="/try-on" style={styles.secondaryBtn}>Virtual Try-On</a>
        </div>

        {/* SOCIALS */}
        <div style={styles.socials}>
          <a
            href="https://www.instagram.com/leo.ai.fashion?igsh=OGZzbTNrZnEwNW14&utm_source=qr"
            target="_blank"
            style={styles.social}
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/share/1GEnWnyYam/?mibextid=wwXIfr"
            target="_blank"
            style={styles.social}
          >
            Facebook
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 LEO AI Fashion. Crafted with precision.
      </footer>

    </main>
  );
}

const styles: any = {
  main: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #1c1c1c, #0b0b0b 70%)",
    color: "#f5f5f5",
    fontFamily: "Helvetica Neue, Arial, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "24px 48px",
    backdropFilter: "blur(12px)",
  },

  logo: {
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: "2px",
  },

  nav: {
    display: "flex",
    gap: "24px",
  },

  navLink: {
    color: "#bfae70",
    textDecoration: "none",
    fontSize: "14px",
    letterSpacing: "1px",
  },

  hero: {
    textAlign: "center",
    marginTop: "140px",
  },

  title: {
    fontSize: "56px",
    fontWeight: 800,
    letterSpacing: "1px",
  },

  glow: {
    color: "#e6d38c",
    textShadow:
      "0 0 20px rgba(230,211,140,0.6), 0 0 40px rgba(230,211,140,0.3)",
  },

  subtitle: {
    marginTop: "16px",
    color: "#aaa",
    fontSize: "16px",
  },

  buttons: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },

  primaryBtn: {
    background:
      "linear-gradient(135deg, #e6d38c, #bfae70)",
    color: "#000",
    padding: "14px 28px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: 700,
    boxShadow:
      "0 0 25px rgba(230,211,140,0.5)",
  },

  secondaryBtn: {
    border: "1px solid #e6d38c",
    color: "#e6d38c",
    padding: "14px 28px",
    borderRadius: "14px",
    textDecoration: "none",
  },

  socials: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },

  social: {
    color: "#bfae70",
    textDecoration: "none",
    fontWeight: 600,
    letterSpacing: "1px",
  },

  footer: {
    marginTop: "140px",
    padding: "24px",
    textAlign: "center",
    fontSize: "12px",
    opacity: 0.5,
  },
};