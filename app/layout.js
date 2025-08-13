import localFont from "next/font/local";
import "./globals.css";
import ProgressBar from "./components/progressBar/ProgressBar";
import AnalyticsTracker from "./components/analytics/AnaliticsTracker";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from 'react';

const vazirmatn = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-SemiBold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
});

export const metadata = {
  title: "پیشرو فناوران اسپادانا | ساخت نیروگاه خورشیدی و فروش تجهیزات انرژی خورشیدی",
  description:
    "پیشرو فناوران اسپادانا، ارائه‌دهنده خدمات طراحی و ساخت نیروگاه‌های خورشیدی صنعتی و خانگی، فروش تجهیزات سولار، پنل خورشیدی، اینورتر و سیستم‌های ذخیره‌سازی انرژی.",
  keywords: [
    "نیروگاه خورشیدی",
    "تجهیزات انرژی خورشیدی",
    "پنل خورشیدی",
    "سیستم خورشیدی خانگی",
    "اینورتر خورشیدی",
    "باتری خورشیدی",
    "ساخت نیروگاه خورشیدی",
    "انرژی تجدیدپذیر"
  ],
  authors: [{ name: "پیشرو فناوران اسپادانا" }],
  creator: "پیشرو فناوران اسپادانا",
  publisher: "پیشرو فناوران اسپادانا",
  metadataBase: new URL("https://spadanasolar.ir"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "پیشرو فناوران اسپادانا | ساخت نیروگاه خورشیدی و فروش تجهیزات سولار",
    description:
      "طراحی، اجرا و فروش تجهیزات نیروگاه خورشیدی صنعتی و خانگی. تامین پنل خورشیدی، اینورتر، باتری و سیستم‌های ذخیره‌سازی انرژی.",
    url: "https://spadanasolar.ir",
    siteName: "پیشرو فناوران اسپادانا",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://spadanasolar.ir/images/spadana-color.svg",
        width: 1200,
        height: 630,
        alt: "نیروگاه خورشیدی و تجهیزات انرژی خورشیدی - پیشرو فناوران اسپادانا",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <Suspense fallback={null}>
        <AnalyticsTracker />
        </Suspense>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
