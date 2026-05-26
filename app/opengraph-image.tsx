import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Panele dekoracyjne z nadrukiem — szybka metamorfoza wnętrza w całej Polsce";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F3F7F4",
          padding: "72px 88px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Georgia, serif",
          color: "#111827",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 60% at 12% 8%, rgba(63,125,90,0.16), transparent 60%), radial-gradient(50% 50% at 90% 92%, rgba(31,92,139,0.14), transparent 65%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#3F7D5A",
            }}
          />
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 32,
              letterSpacing: "-0.02em",
            }}
          >
            Panelio
          </div>
          <div
            style={{
              marginLeft: 24,
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(17,24,39,0.55)",
            }}
          >
            Panele dekoracyjne · Polska
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              fontFamily: "Georgia, serif",
            }}
          >
            Panele dekoracyjne, które odmienią wnętrze nawet w kilka godzin
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "rgba(17,24,39,0.7)",
              maxWidth: 820,
            }}
          >
            Dekoracyjne panele z różnymi wzorami do mieszkań, domów, biur i lokali
            usługowych. Obsługa całej Polski.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(17,24,39,0.55)",
          }}
        >
          <div>panele-dekoracyjne.pl</div>
          <div style={{ color: "#3F7D5A" }}>01 — Realizacja</div>
        </div>
      </div>
    ),
    size,
  );
}
