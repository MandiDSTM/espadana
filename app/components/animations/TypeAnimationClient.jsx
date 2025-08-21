// app/components/animations/AnimatedText.client.jsx
"use client";

import { TypeAnimation } from "react-type-animation";

export default function AnimatedText({ sequence }) {
  return (
    <TypeAnimation
      sequence={sequence}
      speed={50}
      wrapper="span"
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
