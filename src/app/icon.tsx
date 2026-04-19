import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 60%, #EC4899 100%)",
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 900,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -1,
          borderRadius: 7,
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
