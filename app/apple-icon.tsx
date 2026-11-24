import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "linear-gradient(135deg, #b0413e 0%, #9f1239 100%)",
        }}
      >
        <div style={{ color: "#ffffff", fontSize: 78, fontWeight: 900, lineHeight: 1 }}>Aa</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 12,
            padding: "3px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#b0413e",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 1.2,
          }}
        >
          Y9 ENG
        </div>
      </div>
    ),
    { ...size },
  );
}
