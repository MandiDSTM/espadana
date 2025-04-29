"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تغییر استایل navbar هنگام اسکرول
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "خانه", href: "/" },
    { name: "خدمات", href: "/#services" },
    { name: "درباره ما", href: "/#about" },
    { name: "تماس با ما", href: "/#contact" },
  ];

  return (
    <nav
      className={` fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/50 backdrop-blur-md" : " mx-auto"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className=" flex items-center gap-3">
            {!scrolled ? (
              <Image
                src="/images/Silicon-logo-white.svg"
                width={50}
                height={50}
                alt="silicon-energy"
                className="cursor-pointer"
              />
            ) : (
              <Image
                src="/images/Silicon-logo.svg"
                width={50}
                height={50}
                alt="silicon-energy"
                className="cursor-pointer"
              />
            )}
            <Link
              href="/"
              className={`text-xl font-bold  ${
                !scrolled ? "text-gray-200" : "text-gray-700 font-semibold"
              } hover:text-white`}
            >
              اسپادانا
            </Link>
          </div>

          {/* دکمه همبرگر برای موبایل */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-reverse space-x-8">
              {menuItems.map((item) => (
                <li key={item.name} className="gradient-hover-item relative">
                  <a
                    href={item.href}
                    className={`${
                      !scrolled
                        ? "text-gray-200"
                        : "text-gray-700 font-semibold hover:text-gray-900 hover:font-bold"
                    } hover:text-white`}
                    scroll={false} // مهم: این اسکرول خودکار next.js را غیرفعال می‌کند
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* دکمه Start Mining */}
          </div>
        </div>
      </div>

      {/* منوی موبایل */}
      <div
        className={`lg:hidden fixed w-full transition-all transform duration-300 ease-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
        } bg-gray-900/95 backdrop-blur-sm`}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-2 py-2">
            <li>
              <a
                href="#home"
                className="block py-2 text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                خانه
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block py-2 text-gray-200 hover:text-white hover:w-full hover:bg-gray-400 hover:pr-4 rounded-lg transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                خدمات ما
              </a>
            </li>

            <li>
              <Link
                href="#calculator"
                className="block py-2 text-gray-200 hover:text-white hover:w-full hover:bg-gray-400 hover:pr-4 rounded-lg transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                ماشین حساب{" "}
              </Link>
            </li>

            <li>
              <a
                href="#contact"
                className="block py-2 text-gray-200 hover:text-white hover:w-full hover:bg-gray-400 hover:pr-4 rounded-lg transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                تماس با ما
              </a>
            </li>
          </ul>

          {/* دکمه Start Mining در منوی موبایل */}
          {/* <div className="mt-4 pb-3">
            <Link
              href="#packages"
              className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              onClick={() => setIsOpen(false)}
            >
              شروع استخراج
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
