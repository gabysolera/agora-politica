"use client";
import Link from "next/link";

function Tag({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      style={{
        fontSize: 11, letterSpacing: "0.06em", padding: "4px 10px", borderRadius: 4,
        backgroundColor: accent ? "var(--accent-dim)" : "var(--dark3)",
        color: accent ? "var(--accent)" : "var(--text-muted)",
        border: "1px solid " + (accent ? "rgba(201,184,150,0.25)" : "var(--border)"),
      }}
    >
      {children}
    </span>
  );
}

export default function Proyectos() {
  return (
    <section
      style={{
        padding: "64px 24px",
        maxWidth: 640,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>
        Portafolio
      </p>
      <h2
        className="font-display"
        style={{ fontSize: "clamp(28px, 8vw, 40px)", fontWeight: 300, color: "var(--text-hi)", marginBottom: 48, lineHeight: 1.15 }}
      >
        Proyectos
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Proyecto activo */}
        <Link href="/proyectos/limon-2026" style={{ textDecoration: "none" }}>
          <div
            style={{
              backgroundColor: "var(--dark2)",
              border: "1px solid var(--border-hi)",
              borderRadius: 8,
              padding: "24px 20px",
              cursor: "pointer",
              transition: "border-color 0.15s, background 0.15s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--dark3)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--dark2)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hi)";
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
              <Tag accent>Activo · 2026</Tag>
              <Tag>Seguridad pública</Tag>
              <Tag>Limón</Tag>
            </div>
            <h3
              className="font-display"
              style={{ fontSize: 22, fontWeight: 400, color: "var(--text-hi)", marginBottom: 10, lineHeight: 1.25 }}
            >
              Seguridad territorial para el desarrollo económico de la Región Caribe
            </h3>
            <p style={{ fontSize: 13, color: "var(--text-lo)", lineHeight: 1.65 }}>
              Diagnóstico integral de la inseguridad en la provincia de Limón y propuesta de proyecto de ley para el despacho del Diputado Mangell Mc Lean Villalobos, PLN, Asamblea Legislativa 2026–2030.
            </p>
            <p style={{ fontSize: 12, color: "var(--accent)", marginTop: 14 }}>Ver detalle →</p>
          </div>
        </Link>

        {/* Próximamente */}
        <div
          style={{
            backgroundColor: "var(--dark2)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "24px 20px",
            opacity: 0.45,
            pointerEvents: "none",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <Tag>Próximamente</Tag>
          </div>
          <h3
            className="font-display"
            style={{ fontSize: 22, fontWeight: 400, color: "var(--text-hi)", marginBottom: 10, lineHeight: 1.25 }}
          >
            Proyecto en desarrollo
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-lo)", lineHeight: 1.65 }}>
            Ágora continúa expandiendo su portafolio de consultoría territorial.
          </p>
        </div>
      </div>
    </section>
  );
}
