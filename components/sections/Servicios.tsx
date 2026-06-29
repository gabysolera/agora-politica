const SERVICIOS = [
  {
    icono: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="2"/>
        <circle cx="14" cy="14" r="5"/>
        <line x1="18" y1="18" x2="23" y2="23"/>
      </svg>
    ),
    titulo: "Diagnóstico territorial",
    desc: "Investigación de campo combinada con fuentes oficiales (INEC, ENAHO, ICN, MTSS) para construir un retrato preciso de la problemática en su dimensión provincial, cantonal y comunitaria.",
  },
  {
    icono: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="18" height="24" rx="2"/>
        <line x1="9" y1="9" x2="19" y2="9"/>
        <line x1="9" y1="14" x2="19" y2="14"/>
        <line x1="9" y1="19" x2="14" y2="19"/>
      </svg>
    ),
    titulo: "Formulación legislativa",
    desc: "Redacción de proyectos de ley con sustento constitucional, análisis de marco normativo existente, identificación de leyes que deben modificarse y estructura de financiamiento viable.",
  },
  {
    icono: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="8" cy="20" r="2.5"/>
        <circle cx="14" cy="12" r="2.5"/>
        <circle cx="20" cy="16" r="2.5"/>
        <circle cx="24" cy="6" r="2.5"/>
        <line x1="10" y1="18" x2="12" y2="14"/>
        <line x1="16" y1="14" x2="18" y2="16"/>
        <line x1="22" y1="14" x2="22.5" y2="8.5"/>
      </svg>
    ),
    titulo: "Análisis de viabilidad política",
    desc: "Mapeo del escenario legislativo, conteo de votos, identificación de alianzas potenciales y diseño de estrategia de negociación adaptada al contexto de la Asamblea.",
  },
  {
    icono: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="22" height="18" rx="2"/>
        <line x1="3" y1="11" x2="25" y2="11"/>
        <line x1="8" y1="16" x2="20" y2="16"/>
        <line x1="8" y1="19" x2="16" y2="19"/>
      </svg>
    ),
    titulo: "Comunicación política",
    desc: "Producción de materiales de divulgación: revistas digitales, documentales, infografías y reportes ejecutivos para que la propuesta llegue con claridad a todos los públicos.",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        padding: "64px 24px 64px",
        maxWidth: 640,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>
        Lo que hacemos
      </p>
      <h2
        className="font-display"
        style={{ fontSize: "clamp(28px, 8vw, 40px)", fontWeight: 300, color: "var(--text-hi)", marginBottom: 48, lineHeight: 1.15 }}
      >
        Servicios
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 48 }}>
        {SERVICIOS.map((s) => (
          <div
            key={s.titulo}
            style={{
              backgroundColor: "var(--dark2)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span style={{ color: "var(--accent)" }}>{s.icono}</span>
            <p style={{ fontSize: 14, fontWeight: 500, color: "var(--text-hi)", lineHeight: 1.3 }}>{s.titulo}</p>
            <p style={{ fontSize: 12, color: "var(--text-lo)", lineHeight: 1.65 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <p
        className="font-display"
        style={{
          fontSize: "clamp(18px, 5vw, 24px)",
          fontWeight: 300,
          color: "var(--text-mid)",
          lineHeight: 1.5,
          textAlign: "center",
          padding: "32px 0",
          borderTop: "1px solid var(--border)",
        }}
      >
        Legislar bien requiere conocer el territorio. Conocer el territorio requiere{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>escuchar a su gente.</em>
      </p>
    </section>
  );
}
