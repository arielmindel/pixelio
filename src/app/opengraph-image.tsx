import { ImageResponse } from "next/og";

export const alt = "Pixelio — בוטי וואטסאפ AI לעסקים";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0A0E1A 0%, #1E3A8A 40%, #4C1D95 70%, #0A0E1A 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: -4,
            background:
              "linear-gradient(135deg, #ffffff 0%, #60A5FA 50%, #A78BFA 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Pixelio
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 52,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          בוט וואטסאפ שעונה ללקוחות 24/7
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
          }}
        >
          בוטי AI לעסקים בישראל • הקמה תוך 7 ימים
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            display: "flex",
            gap: 32,
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
          }}
        >
          <div>בעברית טבעית</div>
          <div>ללא התחייבות</div>
          <div>הקמה תוך 7 ימים</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
