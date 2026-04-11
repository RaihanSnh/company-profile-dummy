"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <html lang="id">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "24px",
          fontFamily: '"Segoe UI", sans-serif',
          color: "#233631",
          background:
            "radial-gradient(circle at top, rgba(121, 210, 140, 0.22), transparent 24rem), linear-gradient(180deg, #fbfffc 0%, #edf6f2 100%)",
        }}
      >
        <main
          style={{
            width: "min(520px, 100%)",
            padding: "32px",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(96,138,123,0.16)",
            boxShadow: "0 24px 64px rgba(85,127,112,0.14)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 6vw, 3rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            Terjadi kendala saat memuat halaman
          </h1>
          <p style={{ margin: "16px 0 0", lineHeight: 1.7, color: "#61726d" }}>
            Sistem sedang mencoba memulihkan tampilan. Silakan muat ulang halaman
            atau tekan tombol di bawah untuk mencoba kembali.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "24px",
              minHeight: "48px",
              padding: "12px 18px",
              border: 0,
              borderRadius: "999px",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#173126",
              background: "linear-gradient(135deg, #9de5a8, #c6f2cf)",
              cursor: "pointer",
            }}
          >
            Coba lagi
          </button>
        </main>
      </body>
    </html>
  );
}
