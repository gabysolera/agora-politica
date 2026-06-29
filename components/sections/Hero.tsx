import Link from "next/link";

const STATS = [
  { num: "01", label: "Proyecto activo" },
  { num: "04", label: "Entrevistas de campo" },
  { num: "UCR", label: "Respaldo académico" },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 24px 64px",
        maxWidth: 640,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 32 }}>
        Consultoría política · Costa Rica · 2026
      </p>

      <h1
        className="font-display"
        style={{
          fontSize: "clamp(40px, 12vw, 56px)",
          fontWeight: 300,
          lineHeight: 1.08,
          color: "var(--text-hi)",
          marginBottom: 28,
        }}
      >
        Política pública<br />
        desde{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>adentro</em>
        <br />
        del territorio.
      </h1>

      <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-lo)", marginBottom: 48, maxWidth: 480 }}>
        Ágora traduce la realidad de las comunidades en propuestas concretas de política pública. Diagnóstico territorial, análisis legislativo y asesoría estratégica para quienes toman decisiones.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          backgroundColor: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          overflow: "hidden",
          marginBottom: 40,
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.num}
            style={{ backgroundColor: "var(--dark2)", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 4 }}
          >
            <span className="font-display" style={{ fontSize: 24, fontWeight: 300, color: "var(--accent)", letterSpacing: "0.02em" }}>
              {s.num}
            </span>
            <span style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.06em" }}>{s.label}</span>
          </div>
        ))}
      </div>

      <Link
        href="/proyectos"
        style={{
          alignSelf: "flex-start",
          border: "1px solid var(--border-hi)",
          borderRadius: 6,
          padding: "12px 24px",
          fontSize: 14,
          color: "var(--text-hi)",
          textDecoration: "none",
          letterSpacing: "0.04em",
        }}
      >
        Ver proyectos →
      </Link>
    </section>
  );
}
