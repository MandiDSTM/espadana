// components/Header.js
import dynamic from "next/dynamic";
import Image from "next/image";

// کامپوننت کلاینت به‌صورت دینامیک لود می‌شود
const ClientSideHeader = dynamic(() => import("./ClientSideHeader"), {
  ssr: false, // غیرفعال کردن SSR برای این بخش
});

export default function Header({ initialData }) {
  const typingItems = {
    subtitle: ["راه‌حل‌های بهینه انرژی پاک", 1000],
    description: ["ساخت آینده انرژی با تکنولوژی خورشیدی", 1000],
  };

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* لایه پس‌زمینه (همیشه در سرور رندر می‌شود) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/poster-image.jpg"
          alt="تصویر پس‌زمینه هدر"
          fill
          className="object-cover brightness-90 contrast-110"
          priority
        />
      </div>
      <div
        className="absolute inset-0 w-full h-full z-10 transition-opacity duration-700"
        style={{ backgroundColor: "rgba(23, 23, 23, 0.7)" }}
      />
      {/* محتوای اصلی که در کلاینت انیمیشن‌ها را اضافه می‌کند */}
      <ClientSideHeader typingItems={typingItems} />
      {/* اطلاعات دیباگ (فقط در توسعه) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-lg z-50 text-sm shadow-lg">
          <span className="font-semibold">وضعیت:</span> SSR
        </div>
      )}
    </header>
  );
}

// برای دریافت داده‌های اولیه (در صورت نیاز)
export async function getServerSideProps() {
  return {
    props: {
      initialData: {
        // داده‌های اولیه برای سرور (مثل متادیتای ویدیو یا تنظیمات)
      },
    },
  };
}


// -------------------------------------------------

// components/ClientSideHeader.js
"use client";

import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

export default function ClientSideHeader({ typingItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoStatus, setVideoStatus] = useState("loading");
  const [videoSource, setVideoSource] = useState("/videos/spadana.mp4");
  const [useFallbackImage, setUseFallbackImage] = useState(false);

  const videoRef = useRef(null);
  const loadingTimeoutRef = useRef(null);
  const errorTimeoutRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl && videoEl.readyState >= 3) {
      handleVideoReady();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    loadingTimeoutRef.current = setTimeout(() => {
      if (!videoLoaded) {
        console.log("Loading timeout reached, showing content anyway");
        handleVideoReady();
      }
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(loadingTimeoutRef.current);
      clearTimeout(errorTimeoutRef.current);
    };
  }, [videoLoaded]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const onLoadedData = () => {
      console.log("Video loaded successfully from source:", videoSource);
      handleVideoReady();
    };

    const onError = (e) => {
      console.error("Video error:", e);
      setVideoStatus("error");
      if (videoSource.endsWith(".mp4") && !useFallbackImage) {
        console.log("Trying WebM format...");
        setVideoSource("/videos/spadana.webm");
      } else if (!useFallbackImage) {
        console.log("Video loading failed. Using fallback image.");
        setUseFallbackImage(true);
        handleVideoReady();
      }
    };

    errorTimeoutRef.current = setTimeout(() => {
      if (videoStatus === "loading" && !videoLoaded) {
        onError(new Error("Loading timeout"));
      }
    }, 1500);

    videoEl.addEventListener("loadeddata", onLoadedData);
    videoEl.addEventListener("error", onError);

    return () => {
      videoEl.removeEventListener("loadeddata", onLoadedData);
      videoEl.removeEventListener("error", onError);
      clearTimeout(errorTimeoutRef.current);
    };
  }, [videoSource, videoStatus, useFallbackImage]);

  const handleVideoReady = () => {
    if (!videoLoaded) {
      setVideoStatus("playing");
      setVideoLoaded(true);
      setTimeout(() => setIsVisible(true), 200);
    }
  };

  if (!videoLoaded) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900/95 z-50 transition-opacity duration-500">
        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6 ease-in-out"></div>
        <p className="text-blue-300 text-xl font-semibold animate-pulse">در حال بارگذاری...</p>
        <p className="text-gray-400 text-sm mt-3 opacity-80">لطفاً شکیبا باشید</p>
      </div>
    );
  }

  return (
    <>
      {!useFallbackImage && (
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-110"
            autoPlay
            muted
            loop
            playsInline
            poster="/poster-image.jpg"
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src={videoSource} type={videoSource.endsWith(".webm") ? "video/webm" : "video/mp4"} />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>
      )}
      <div className="relative flex items-center w-full h-full z-30 pt-12 sm:pt-16 md:pt-20 lg:pt-20 xl:pt-16 2xl:pt-12">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className={`bg-gray-900/70 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl mx-auto lg:mr-0 lg:ml-auto mt-0 shadow-2xl shadow-slate-900/25 border border-slate-700/20 transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-white flex flex-col gap-8">
              {/* بخش برچسب کوچک */}
              <div
                className={`inline-flex items-center gap-3 px-5 py-2.5 border-2 border-white/20 backdrop-blur-md rounded-full text-sm font-semibold max-w-max transition-all duration-500 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                }`}
              >
                <span className="inline-block w-3 h-3 bg-blue-300 rounded-full animate-pulse" />
                {isVisible && (
                  <TypeAnimation sequence={typingItems.subtitle} wrapper="span" speed={100} repeat={0} cursor={false} />
                )}
              </div>

              {/* تیتر اصلی */}
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-500 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                طراحی بهینه، اجرای دقیق، بازدهی حداکثری
                <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 py-1.5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  خدمات EPC با بازده مطلوب
                </span>
              </h1>

              {/* توضیحات */}
              <div
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-8 md:leading-9 lg:leading-10 transition-all duration-500 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {isVisible && (
                  <TypeAnimation
                    sequence={typingItems.description}
                    wrapper="p"
                    speed={40}
                    repeat={0}
                    cursor
                    cursorBlinking={false}
                  />
                )}
              </div>

              {/* دکمه‌ها */}
              <div
                className={`flex flex-wrap gap-5 transition-all duration-500 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <a href="/#contact">
                  <button className="bg-blue-800 hover:bg-blue-900 text-white px-7 sm:px-8 md:px-9 py-3.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/30 flex items-center gap-3 group">
                    <span>مشاوره رایگان</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
                <button className="border-2 border-white/40 hover:border-white/80 text-white px-7 sm:px-8 md:px-9 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:bg-white/15 shadow-lg shadow-slate-900/20 flex items-center gap-3 group">
                  <span>ماشین حساب پنل خورشیدی</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-[-3px]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* گرید آمار */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 border-t border-white/10 pt-8 transition-all duration-500 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center transform hover:scale-110 transition-transform duration-400 group">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                    +۳۵٪
                  </div>
                  <div className="text-sm md:text-base text-gray-300 mt-3">بازدهی سالانه</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-400 group">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                    ۲۴/۷
                  </div>
                  <div className="text-sm md:text-base text-gray-300 mt-3">پشتیبانی</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-400 group">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                    +30<span className="text-lg">MW</span>
                  </div>
                  <div className="text-sm md:text-base text-gray-300 mt-3">پروژه‌های در حال اجرا</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center" />
        </div>
      </div>
    </>
  );
}