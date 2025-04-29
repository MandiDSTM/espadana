"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const loadingTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // اگر ویدیو قبلاً کش شده باشد، این رویداد هرگز فراخوانی نمی‌شود
    // پس برای اطمینان بیشتر چک می‌کنیم
    loadingTimeoutRef.current = setTimeout(() => {
      if (!videoLoaded) {
        console.log("Loading timeout reached, showing content anyway");
        setVideoLoaded(true);

        // بعد از بارگذاری ویدیو، محتوا را با تاخیر نمایش می‌دهیم
        setTimeout(() => {
          setIsVisible(true);
        }, 300);
      }
    }, 1000);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoCanPlay = () => {
    // ویدیو آماده پخش است
    setVideoLoaded(true);
    // بعد از بارگذاری ویدیو، محتوا را با تاخیر نمایش می‌دهیم
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };

  const typingItems = {
    title: ["آینده ای سبز با اسپادانا", 1000],
    subtitle: ["راهکارهای نوین انرژی‌های سبز", 1000],
    description: ["ترسیم هوشمندانه از آینده انرژی خورشیدی", 1000],
  };

  if (!videoLoaded) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900 z-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-blue-300 text-lg font-medium">در حال بارگذاری...</p>
        <p className="text-gray-400 text-sm mt-2">لطفاً شکیبا باشید</p>
      </div>
    );
  }

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* تصویر پس‌زمینه */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/poster-image.jpg" // تصویر پیش‌نمایش قبل از بارگذاری ویدیو
          onCanPlay={handleVideoCanPlay}
        >
          <source src="/videos/spadana.mp4" type="video/mp4" />
          <source src="/videos/header-background.webm" type="video/webm" />
          {/* پیام خطا اگر مرورگر از ویدیو پشتیبانی نکند */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* لایه اورلی آبی با شفافیت کمتر برای کنتراست بیشتر */}
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(23, 64, 139, 0.85) 0%, rgba(41, 84, 166, 0.83) 40%, rgba(56, 97, 178, 0.82) 50%, rgba(41, 84, 166, 0.81) 60%, rgba(30, 70, 150, 0.8) 100%)",
        }}
      ></div>

      {/* محتوای هدر - تغییر در پدینگ و فاصله‌گذاری */}
      <div className="relative flex items-center w-full h-full z-30 pt-16 md:pt-20 lg:pt-24 xl:pt-20 2xl:pt-16">
        {/* استفاده از grid برای لی‌آوت بهتر و کنترل محل قرارگیری محتوا */}
        <div className="w-full px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* کارت محتوا با موقعیت بهینه‌شده - سمت راست در RTL */}
          <div
            className={`bg-slate-900/50 backdrop-blur-md rounded-xl p-8 md:p-10 max-w-2xl mx-auto lg:mr-0 lg:ml-auto mt-0 
          shadow-xl shadow-slate-900/20 border border-slate-700/30
          transition-all duration-1000 transform 
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          >
            {/* محتوای اصلی هدر با فاصله‌گذاری بهتر */}
            <div className="text-white flex flex-col gap-7">
              {/* بج هدر با طراحی جذاب‌تر و افکت تایپ */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/70 backdrop-blur-sm rounded-full text-sm font-medium max-w-max
              transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              >
                <span className="inline-block w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
                {isVisible && (
                  <TypeAnimation
                    sequence={typingItems.subtitle}
                    wrapper="span"
                    speed={100}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </div>

              {/* عنوان اصلی با تایپوگرافی بهتر و افکت تایپ */}
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight transition-all duration-700 delay-500
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              >
                راهکارهای نسل جدید برای
                <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 py-1">
                  {isVisible && (
                    <TypeAnimation
                      sequence={typingItems.title}
                      wrapper="span"
                      speed={200}
                      repeat={0}
                    />
                  )}
                </span>
              </h1>

              {/* توضیحات با خوانایی بهتر و افکت تایپ */}
              <div
                className={`text-base md:text-lg text-gray-100 leading-7 md:leading-8 transition-all duration-700 delay-700
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              >
                {isVisible && (
                  <TypeAnimation
                    sequence={typingItems.description}
                    wrapper="p"
                    speed={40}
                    repeat={0}
                    cursor={true}
                    cursorBlinking={false}
                  />
                )}
              </div>

              {/* دکمه‌های عملیات با افکت‌های بهتر */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-900
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              >
                <a href="/#contact">
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
                text-white px-6 md:px-8 py-3.5 rounded-lg font-medium 
                transition-all duration-300 transform hover:scale-105
                shadow-lg hover:shadow-blue-500/40 
                flex items-center gap-3 group"
                
                >
                  <span>مشاوره رایگان</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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

                <button
                  className="border-2 border-white/50 hover:border-white text-white 
                px-6 md:px-8 py-3 rounded-lg font-medium 
                transition-all duration-300 transform hover:scale-105 hover:bg-white/10 
                flex items-center gap-3 group"
                >
                  <span>ماشین حساب پنل خورشیدی</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-[-2px]"
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

              {/* آمارهای کلیدی با طراحی بهتر */}
              <div
                className={`grid grid-cols-3 gap-4 mt-8 border-t border-white/15 pt-6 transition-all duration-700 delay-1100
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              >
                <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                    +۳۵٪
                  </div>
                  <div className="text-sm md:text-base text-gray-300 mt-2">
                    بازدهی سالانه
                  </div>
                </div>

                <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                    ۲۴/۷
                  </div>
                  <div className="text-sm md:text-base text-gray-300 mt-2">
                    پشتیبانی
                  </div>
                </div>

                {/* نمایش آمار سوم در تمام سایزها با توجه به اهمیت تعداد کاربران */}
                <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                    +30
                    <span >MW</span>
                  </div>
                  <div className="text-sm md:text-base text-gray-300 mt-2">
                   پروژه های در حال اجرا 
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* اضافه کردن یک المان بصری در سمت چپ در سایزهای بزرگ */}
          <div className="hidden lg:flex justify-center items-center">
            {/* این بخش می‌تواند خالی بماند یا یک تصویر/آیکون/المان تعاملی اضافه شود */}
          </div>
        </div>
      </div>
    </header>
  );
}
