import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#141414",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: 22,
            fontWeight: 300,
            color: "#c9b896",
            lineHeight: 1,
          }}
        >
          Á
        </span>
      </div>
    ),
    { ...size }
  );
}
