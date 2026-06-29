"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SECTIONS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          borderBottom: "1px solid var(--border)",
          backgroundColor: "rgba(20,20,20,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 20px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              className="font-display"
              style={{ color: "var(--text-hi)", fontSize: 18, fontWeight: 400, letterSpacing: "0.02em", cursor: "pointer" }}
            >
              Ágora
            </span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "var(--text-hi)" }}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="4" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="4" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="4" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 40,
            backgroundColor: "var(--dark1)", paddingTop: 56,
            display: "flex", flexDirection: "column",
          }}
        >
          <nav style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 4 }}>
            {SECTIONS.map((s) => {
              const active = isActive(s.href);
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  style={{
                    textDecoration: "none",
                    borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
                    padding: "14px 20px",
                    fontSize: 22,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    color: active ? "var(--accent)" : "var(--text-hi)",
                    display: "block",
                    transition: "color 0.15s",
                  }}
                >
                  {s.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
