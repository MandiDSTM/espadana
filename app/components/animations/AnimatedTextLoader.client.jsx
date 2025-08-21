// app/components/animations/AnimatedTextLoader.client.jsx
"use client";

import dynamic from "next/dynamic";

const DynamicAnimatedText = dynamic(
  () => import("./TypeAnimationClient"),
  { ssr: false, loading: () => <span></span> }
);

export default DynamicAnimatedText;
