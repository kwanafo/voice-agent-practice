 export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb", // light gray background
      }}
    >
      <h1
        style={{
          fontSize: "3rem",      // large text
          fontWeight: "bold",    // bold
          color: "#2563eb",      // blue
          marginBottom: "1rem",  // spacing below
        }}
      >
        🚀 Voice Agent Practice
      </h1>

      <p
        style={{
          fontSize: "1.25rem", // 20px
          color: "#374151",    // dark gray
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        Welcome! This is your first Next.js + Vercel project, deployed live.
      </p>
    </main>
  );
}