export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--black)",
        padding: "48px 24px 40px",
        maxWidth: 640,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Contacto */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }}>
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>
            WhatsApp
          </p>
          <a
            href="https://wa.me/50688880000"
            style={{ fontSize: 14, color: "var(--text-hi)", textDecoration: "none" }}
          >
            +506 8888-0000
          </a>
        </div>
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>
            Correo
          </p>
          <a
            href="mailto:contacto@agorapolitica.cr"
            style={{ fontSize: 14, color: "var(--text-hi)", textDecoration: "none" }}
          >
            contacto@agorapolitica.cr
          </a>
        </div>
      </div>

      {/* Disclaimer académico */}
      <div
        style={{
          backgroundColor: "var(--dark2)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: "16px 18px",
          marginBottom: 32,
        }}
      >
        <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.7 }}>
          <strong style={{ color: "var(--text-lo)", fontWeight: 500 }}>Aviso:</strong> Sitio elaborado exclusivamente como producto de evaluación del curso{" "}
          <strong style={{ color: "var(--text-lo)", fontWeight: 500 }}>CP-1504 El Poder desde la Ciencia Política</strong>, Escuela de Ciencias Políticas, Universidad de Costa Rica. La firma consultora Ágora, sus proyectos, servicios y datos de contacto son{" "}
          <strong style={{ color: "var(--text-lo)", fontWeight: 500 }}>ficticios</strong> y forman parte de una simulación académica.
        </p>
      </div>

      <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center" }}>
        © 2026 Ágora Política Ciudadana · Simulación académica UCR
      </p>
    </footer>
  );
}
