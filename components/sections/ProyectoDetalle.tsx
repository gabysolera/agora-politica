import Link from "next/link";
import Image from "next/image";

const STATS = [
  { num: "470.383", label: "Habitantes en la provincia" },
  { num: "24,9%", label: "Hogares en pobreza" },
  { num: "93,1", label: "Homicidios por 100.000 hab." },
  { num: "4", label: "Ejes del proyecto de ley" },
];

const INSTITUCIONES = ["MSP", "MOPT", "PROCOMER", "CINDE", "JAPDEVA", "Municipalidad de Limón"];

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

function MaterialButton({
  label, icon, href, target, download, disabled, hint,
}: {
  label: string; icon: string; href: string | null;
  target?: string; download?: boolean; disabled?: boolean; hint?: string;
}) {
  const style: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 12,
    padding: "14px 16px", borderRadius: 8,
    border: "1px solid var(--border)",
    backgroundColor: disabled ? "var(--dark1)" : "var(--dark2)",
    color: disabled ? "var(--text-muted)" : "var(--text-hi)",
    fontSize: 14, cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1, textDecoration: "none",
    width: "100%", textAlign: "left",
  };

  const inner = (
    <>
      <span style={{ fontSize: 16 }}>{icon}</span>
      <span style={{ flex: 1 }}>{label}</span>
      {hint && <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{hint}</span>}
      {!disabled && href && <span style={{ fontSize: 12, color: "var(--accent)" }}>→</span>}
      {!disabled && !href && <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Pendiente</span>}
    </>
  );

  if (href && !disabled) {
    return <a href={href} target={target} download={download} style={style}>{inner}</a>;
  }
  return <div style={style}>{inner}</div>;
}

export default function ProyectoDetalle() {
  return (
    <section
      style={{ padding: "64px 24px", maxWidth: 640, margin: "0 auto", width: "100%" }}
    >
      {/* Breadcrumb */}
      <Link
        href="/proyectos"
        style={{
          color: "var(--text-muted)", fontSize: 13, textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32,
        }}
      >
        ← Proyectos / <span style={{ color: "var(--text-lo)" }}>Limón 2026</span>
      </Link>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        <Tag accent>Activo · 2026</Tag>
        <Tag>Seguridad pública</Tag>
        <Tag>Limón</Tag>
      </div>

      <h2
        className="font-display"
        style={{ fontSize: "clamp(26px, 7vw, 38px)", fontWeight: 300, color: "var(--text-hi)", marginBottom: 40, lineHeight: 1.18 }}
      >
        Seguridad territorial para el desarrollo económico de la Región Caribe
      </h2>

      {/* Stats grid */}
      <div
        style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1,
          backgroundColor: "var(--border)", border: "1px solid var(--border)",
          borderRadius: 8, overflow: "hidden", marginBottom: 48,
        }}
      >
        {STATS.map((s) => (
          <div key={s.num} style={{ backgroundColor: "var(--dark2)", padding: "20px 18px" }}>
            <p className="font-display" style={{ fontSize: 26, fontWeight: 300, color: "var(--accent)", marginBottom: 4 }}>{s.num}</p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.4 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Foto con el diputado */}
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
          Reunión con el despacho
        </p>
        <div
          style={{
            width: "100%", aspectRatio: "4/3", position: "relative",
            border: "1px solid var(--border)", borderRadius: 8,
            overflow: "hidden", marginBottom: 12,
          }}
        >
          <Image
            src="/team/diputado.jpg"
            alt="Equipo Ágora con el Diputado Mangell Mc Lean Villalobos"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
          Equipo Ágora junto al Diputado Mangell Mc Lean Villalobos (PLN) durante la presentación de la propuesta. Asamblea Legislativa, 2026.
        </p>
      </div>

      {/* Materiales */}
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
          Materiales del proyecto
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <MaterialButton label="Revista Ágora — Edición Limón 2026 (descargar PDF)" icon="⬇" href="https://drive.google.com/uc?export=download&id=1zDVIsw_sPzWpvp631pzFN-959ylwjfMq" download />
          <MaterialButton label="Mini documental" icon="▶" href={null} disabled hint="Próximamente" />
        </div>
      </div>

      {/* Ejes */}
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
          Ejes del proyecto de ley
        </p>
        <p style={{ fontSize: 14, color: "var(--text-lo)", lineHeight: 1.75 }}>
          La ley se estructura en cuatro ejes: fortalecimiento sostenido de la presencia policial con patrullaje preventivo y metas medibles; beneficios fiscales condicionados para empresas en sectores estratégicos; obligación del MOPT de garantizar la continuidad vial de la Ruta 32; y una mesa permanente MSP-MOPT-PROCOMER-JAPDEVA-Municipalidad con seguimiento semestral.
        </p>
      </div>

      {/* Instituciones */}
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
          Instituciones involucradas
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {INSTITUCIONES.map((inst) => (
            <span key={inst} style={{ fontSize: 12, padding: "6px 12px", borderRadius: 4, backgroundColor: "var(--dark3)", border: "1px solid var(--border)", color: "var(--text-lo)", letterSpacing: "0.04em" }}>
              {inst}
            </span>
          ))}
        </div>
      </div>

      {/* Viabilidad */}
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
          Viabilidad legislativa
        </p>
        <div style={{ backgroundColor: "var(--dark2)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 18px" }}>
          <p style={{ fontSize: 14, color: "var(--text-lo)", lineHeight: 1.75 }}>
            El bloque opositor suma 26 votos. Se requieren 29. La estrategia pasa por identificar tres o cuatro diputados del oficialismo con mayor afinidad hacia temas de desarrollo social, donde el consenso transversal facilita la negociación.
          </p>
        </div>
      </div>
    </section>
  );
}
