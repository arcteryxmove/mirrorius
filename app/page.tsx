export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: 40, margin: 0 }}>Цифровое зеркало</h1>
        <p style={{ fontSize: 18, opacity: 0.8, marginTop: 12 }}>
          Скоро здесь будет опыт самораспознавания.
        </p>
        <button
          style={{
            marginTop: 20,
            padding: "12px 18px",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.15)",
            cursor: "pointer"
          }}
        >
          Начать
        </button>
      </div>
    </main>
  );
}
