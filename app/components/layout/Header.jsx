"use client"

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import dynamic from "next/dynamic";

const AnimatedText = dynamic(() => import("../animations/AnimatedTextLoader.client"), { ssr: false });

export default function HeaderClient() {
  useEffect(() => {
    const mountPoint = document.getElementById("animated-text");
    if (mountPoint) {
      // اگر ریشه قبلا ساخته شده، از همون استفاده کن
      let root;
      if (mountPoint._reactRoot) {
        root = mountPoint._reactRoot;
      } else {
        root = createRoot(mountPoint);
        mountPoint._reactRoot = root; // ذخیره برای دفعات بعد
      }

      root.render(
        <AnimatedText
          sequence={[
            "انرژی پایدار، آینده ای روشن",
            1000,
            "ساخت آینده  با انرژی خورشیدی",
            1000,
          ]}
        />
      );
    }
  }, []);

  return <div id="animated-text" />;
}
