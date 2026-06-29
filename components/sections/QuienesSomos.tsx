"use client";
import Image from "next/image";

const TEAM = [
  {
    nombre: "Gabriela Solera",
    iniciales: "GS",
    rol: "Directora de Proyecto",
    bio: "Politóloga y Administradora de Empresas UNED. Especialista en comunicación política y gestión de proyectos de consultoría.",
    foto: "/team/gabriela.png",
    linkedin: "https://www.linkedin.com/in/gabysolera/",
  },
  {
    nombre: "Yahir Zúñiga",
    iniciales: "YZ",
    rol: "Investigador Territorial",
    bio: "Politólogo UCR. Bachillerato en Idiomas énfasis inglés, UNA. Especialista en diagnóstico regional y producción audiovisual.",
    foto: "/team/Yahir.jpg",
    linkedin: null,
  },
  {
    nombre: "Catalina Corrales",
    iniciales: "CC",
    rol: "Asesora Político-Legal",
    bio: "Politóloga y Abogada UCR. Especialista en Derecho y Gestión Municipal. Experta en formulación legislativa y asesoría político-jurídica.",
    foto: "/team/Catalina.jpg",
    linkedin: null,
  },
  {
    nombre: "Bryan Leitón",
    iniciales: "BL",
    rol: "Investigador de Datos",
    bio: "Politólogo UCR. Especialista en consultoría estratégica, gestión de datos y desarrollo organizacional.",
    foto: "/team/Byan.jpg",
    linkedin: null,
  },
  {
    nombre: "Adriana Céspedes",
    iniciales: "AC",
    rol: "Investigadora de Contexto",
    bio: "Politóloga y docente UCR. Especialista en idiomas. Experta en relaciones humanas y análisis en comportamiento humano.",
    foto: "/team/adriana.jpg",
    linkedin: null,
  },
];

function Avatar({ iniciales, foto, nombre }: { iniciales: string; foto: string; nombre: string }) {
  return (
    <div
      style={{
        width: 72, height: 72, minWidth: 72,
        borderRadius: 4, overflow: "hidden",
        border: "1px solid var(--border)",
        backgroundColor: "var(--dark3)",
        position: "relative",
      }}
    >
      <Image
        src={foto}
        alt={nombre}
        fill
        style={{ objectFit: "cover" }}
        sizes="72px"
      />
    </div>
  );
}

export default function QuienesSomos() {
  return (
    <section
      style={{ padding: "64px 24px", maxWidth: 640, margin: "0 auto", width: "100%" }}
    >
      <p style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>
        Equipo
      </p>
      <h2
        className="font-display"
        style={{ fontSize: "clamp(28px, 8vw, 40px)", fontWeight: 300, color: "var(--text-hi)", marginBottom: 16, lineHeight: 1.15 }}
      >
        Quiénes somos
      </h2>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-lo)", marginBottom: 8 }}>
        Cinco politólogos* con miradas complementarias: investigación territorial, análisis legislativo, datos y comunicación política.
      </p>
      <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 48 }}>
        * En formación — estudiantes de la Escuela de Ciencias Políticas, UCR.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {TEAM.map((m, i) => (
          <div
            key={m.nombre}
            style={{
              display: "flex", gap: 20, alignItems: "flex-start",
              backgroundColor: "var(--dark2)", padding: "20px 18px",
              borderRadius: i === 0 ? "8px 8px 0 0" : i === TEAM.length - 1 ? "0 0 8px 8px" : 0,
              border: "1px solid var(--border)",
            }}
          >
            <Avatar iniciales={m.iniciales} foto={m.foto} nombre={m.nombre} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 15, fontWeight: 500, color: "var(--text-hi)", marginBottom: 2 }}>{m.nombre}</p>
              <p style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.04em", marginBottom: 8 }}>{m.rol}</p>
              <p style={{ fontSize: 13, color: "var(--text-lo)", lineHeight: 1.6 }}>{m.bio}</p>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${m.nombre}`}
                  style={{ display: "inline-flex", alignItems: "center", marginTop: 10, color: "var(--text-muted)", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
