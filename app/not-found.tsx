export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9fafb",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#dc2626", // red
          marginBottom: "1rem",
        }}
      >
        ⚠️ 404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#374151", textAlign: "center" }}>
        Oops! The page you’re looking for doesn’t exist.  
      </p>
      <a
        href="/"
        style={{
          marginTop: "2rem",
          backgroundColor: "#2563eb",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        🔙 Back to Home
      </a>
    </main>
  );
}