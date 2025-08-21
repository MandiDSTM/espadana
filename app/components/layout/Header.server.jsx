// components/layout/Header.server.jsx
import React from "react";
import Image from "next/image";
import ClientHeaderBehavior from "./ClientHaderBehavior.client";



export default function HeaderServer() {

  const typingItems = {
    subtitle: ["راه‌حل‌های بهینه انرژی پاک", 1000],
    description: ["ساخت آینده انرژی با تکنولوژی خورشیدی", 1000],
  };
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/services/frame-1.png"
            alt="نیروگاه خورشیدی - تصویر اصلی"
            fill
            className="object-cover brightness-90 contrast-110"
            priority
          />
        </div>

        <div className="absolute inset-0 w-full h-full z-10 bg-[rgba(23,23,23,0.7)]" />
        <div className="relative flex items-center w-full h-full z-30 pt-16 md:pt-20 lg:pt-24 xl:pt-20 2xl:pt-16 ">
          <div className="w-full px-4 md:px-8 lg:px-16  mx-auto grid grid-cols-1 ">
            <div
              className={`relative z-20 bg-gray-900/65  rounded-xl p-5 md:p-8 md:py-10  
              mx-auto lg:mr-0 lg:ml-auto mt-0 shadow-xl shadow-slate-900/20 border 
              border-slate-700/30 transition-all duration-1000 transform 
              opacity-100 translate-y-0` }
            >
              <div className="text-white flex flex-col gap-4 md:gap-7">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-1.5 border-2  backdrop-blur-sm rounded-full 
                  text-[10px] md:text-sm font-medium max-w-max transition-all duration-700 delay-300 
                   opacity-100 translate-y-0 `}
                >
                  <span className="inline-block w-2 h-2 bg-blue-300 rounded-full animate-pulse" />

                  راه‌حل‌های بهینه انرژی پاک
                </div>
                <h1
                  className={`text-[18px] md:text-3xl lg:text-3xl  font-bold tracking-tight transition-all 
                    duration-700 
                  delay-500 opacity-100 translate-y-0` }
                >
                  طراحی بهینه، اجرای دقیق، بازدهی حداکثری
                  <span className="block text-[17px] md:text-3xl font-bold mt-3 bg-clip-text text-transparent 
                bg-gradient-to-r 
                from-blue-300 to-cyan-300 py-1">
                    خدمات EPC با بازده مطلوب
                  </span>
                </h1>
                <div
                  className={`text-[13px] md:text-lg text-gray-100 leading-7 md:leading-8 transition-all 
                  duration-700 delay-700 opacity-100 translate-y-0`}
                >
                  <div className="h-10 ">
                    <div id="animated-text">
                      <span id="animated-placeholder">
                        ساخت آینده انرژی با تکنولوژی خورشیدی
                      </span>
                    </div>
                  </div>

                </div>
                <div
                  className={`flex  md:gap-4 justify-between md:justify-start transition-all duration-700 delay-900 
                  opacity-100 translate-y-0 `}
                >
                  <a href="/#contact">
                    <button className=" bg-blue-700 hover:bg-blue-800 
                   text-white px-2 md:px-8 py-3 md:py-3.5 rounded-lg transition-all duration-300 
                   transform shadow-lg  flex items-center justify-between gap-1 md:gap-2 ">
                      <span className="text-[12px] md:text-base ">مشاوره رایگان</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 transition-transform
                     duration-300 
                    group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </a>
                  <button className="border md:border-2 border-white/50 hover:border-white text-white px-2 
                md:px-8  py-3  md:py-3.5 rounded-lg font-medium transition-all duration-300 transform 
                hover:bg-white/10 flex items-center gap-1 md:gap-3 group">
                    <span className="text-[12px] md:text-base">ماشین حساب پنل خورشیدی</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h4 w-4  md:h-5 md:w-5 transition-transform
                   duration-300 
                  roup-hover:translate-y-[-2px]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 
                    2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 
                    2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 
                    100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 
                    9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                        clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div
                  className={`grid grid-cols-3 gap-4 mt-4 md:mt-8 border-t border-white/15 pt-6 transition-all 
                  duration-700 delay-1100  opacity-100 translate-y-0`}
                >
                  <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
                    <div className="text-lg md:text-4xl font-bold text-blue-300 group-hover:text-blue-200 
                  transition-colors duration-300">+۳۵٪</div>
                    <div className="text-[10px] md:text-base text-gray-300 mt-3">بازدهی سالانه</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform duration-400 group">
                    <div className="text-lg md:text-4xl font-bold text-blue-300 group-hover:text-blue-200 
                  transition-colors duration-300">
                      ۲۴/۷
                    </div>
                    <div className="text-[10px] md:text-base text-gray-300 mt-3">پشتیبانی</div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
                    <div className="text-lg md:text-4xl font-bold text-blue-300 group-hover:text-blue-200 
                  transition-colors duration-300">
                      +30<span className="text-lg">MW</span>
                    </div>
                    <div className="text-[10px] md:text-base text-gray-300 mt-3">پروژه‌های در حال اجرا</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ClientHeaderBehavior />
      </div>
    </>
  );
}
