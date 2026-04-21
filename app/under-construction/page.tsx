export default function UnderConstruction() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f6f0",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "Georgia, serif",
      }}
    >
      <img
        src="/legacy-images/logo.png"
        alt="Harmony Health"
        style={{ width: "200px", marginBottom: "2.5rem" }}
      />
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#2d4a3e",
          marginBottom: "1rem",
        }}
      >
        We&rsquo;re Updating Our Website
      </h1>
      <p
        style={{
          fontSize: "1.15rem",
          color: "#555",
          maxWidth: "480px",
          lineHeight: "1.7",
          marginBottom: "2rem",
        }}
      >
        Our new site is coming soon. Thank you for your patience!
      </p>
      <p
        style={{
          fontSize: "1.05rem",
          color: "#2d4a3e",
          fontWeight: "bold",
        }}
      >
        Call our office with any questions:&nbsp;
        <a
          href="tel:+17066146818"
          style={{ color: "#2d4a3e", textDecoration: "underline" }}
        >
          (706) 614-6818
        </a>
      </p>
    </main>
  );
}
