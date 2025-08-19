"use client";

import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function ClientHeaderBehavior({ typingItems = { subtitle: ["راه‌حل‌های بهینه انرژی پاک", 1000], description: ["ساخت آینده انرژی با تکنولوژی خورشیدی", 1000] } }) {
  const [isVisible, setIsVisible] = useState(false);
  const [useFallbackImage, setUseFallbackImage] = useState(false);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);
  const retryCountRef = useRef(0);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), 220);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (!videoRef.current || useFallbackImage) return;
    
    const videoEl = videoRef.current;
    let loadTimeout;

    const handleLoaded = () => {
      console.log('ویدیو با موفقیت بارگیری شد');
      videoEl.play().catch(handleError);
    };

    const handlePlaying = () => {
      console.log('ویدیو در حال پخش است');
      clearTimeout(loadTimeout);
    };

    const handleError = (error) => {
      console.error('خطا در پخش ویدیو:', error);
      clearTimeout(loadTimeout);
      
      if (retryCountRef.current < 2) {
        retryCountRef.current += 1;
        // تلاش مجدد پس از تاخیر
        setTimeout(() => {
          videoEl.load();
          videoEl.play().catch(handleError);
        }, 1000);
      } else {
        setUseFallbackImage(true);
      }
    };

    const handleEnded = () => {
      console.log('پایان ویدیو - شروع مجدد');
      videoEl.currentTime = 0;
      videoEl.play().catch(handleError);
    };

    // تنظیم رویدادها
    videoEl.addEventListener('loadeddata', handleLoaded);
    videoEl.addEventListener('playing', handlePlaying);
    videoEl.addEventListener('error', handleError);
    videoEl.addEventListener('ended', handleEnded);

    // تایم‌اوت برای بارگیری طولانی
    loadTimeout = setTimeout(() => {
      if (videoEl.readyState < 3) {
        handleError(new Error('زمان بارگیری ویدیو به پایان رسید'));
      }
    }, 5000);

    // تلاش اولیه برای پخش
    videoEl.play().catch(handleError);

    // تمیز کردن
    return () => {
      clearTimeout(loadTimeout);
      videoEl.removeEventListener('loadeddata', handleLoaded);
      videoEl.removeEventListener('playing', handlePlaying);
      videoEl.removeEventListener('error', handleError);
      videoEl.removeEventListener('ended', handleEnded);
    };
  }, [useFallbackImage]);

  return (
    <>
      {!useFallbackImage && (
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-110"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            key="header-video"
          >
            <source src="/videos/spadana.mp4" type="video/mp4" />
            <source src="/videos/spadana.webm" type="video/webm" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>
      )}

      {/* بقیه کد بدون تغییر */}
      <div className={`relative z-30 flex items-center w-full h-full pt-12 md:pt-20 
        transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* محتوای شما */}
      </div>
    </>
  );
}