import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6 rtl">
      {/* بخش اصلی فوتر */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ستون اول - درباره ما */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-5 text-blue-400">پیشرو فناوران اسپادانا</h3>
            <div className="mb-4">
              <img src="/logo-light.png" alt="لوگو شرکت" className="h-12 mb-3" />
            </div>
            <p className="text-gray-300 mb-6 text-justify">
              شرکت ما با بیش از ۱۰ سال تجربه در زمینه ارائه خدمات مشاوره و تأمین انرژی‌های تجدیدپذیر، همواره در تلاش است تا بهترین راهکارها را برای مشتریان خود فراهم آورد.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <FaTwitter size={18} />
              </Link>
              <Link href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <FaLinkedinIn size={18} />
              </Link>
              <Link href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <FaTelegramPlane size={18} />
              </Link>
            </div>
          </div>
          
          {/* ستون دوم - لینک‌های سریع */}
          <div className="flex flex-col md:pr-20">
            <h3 className="text-xl font-bold mb-5 text-blue-400">دسترسی سریع</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> خدمات ما
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> پروژه‌های موفق
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> وبلاگ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          
          {/* ستون سوم - خدمات */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-5 text-blue-400">خدمات ما</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/solar" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> نیروگاه خورشیدی
                </Link>
              </li>
              <li>
                <Link href="/services/industry" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> پوشش ماده ۱۶ (عدم خاموشی)
                </Link>
              </li>
              <li>
                <Link href="/services/investment" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> سرمایه‌گذاری در انرژی‌های تجدیدپذیر
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="ml-2">›</span> مشاوره بهینه‌سازی مصرف انرژی
                </Link>
              </li>
            </ul>
          </div>
          
          {/* ستون چهارم - اطلاعات تماس */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-5 text-blue-400">اطلاعات تماس</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="ml-3 mt-1 bg-blue-600 p-2 rounded-full">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-gray-300">سمنان، بلوار قائم بلوار دانشجو مرکز رشد فناوری دانشگاه سمنان کارخانه نوآوری</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="ml-3 mt-1 bg-blue-600 p-2 rounded-full">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-gray-300">تهران، امانیه، خیابان ولیعصر، خیابان شهید قریشی (تورج)، پلاک ۱۶، طبقه اول، واحد ۶ّ</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="ml-3 bg-blue-600 p-2 rounded-full">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="text-gray-300 mb-1">023-33330790</p>
                  <p className="text-gray-300">0935-231-8315</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="ml-3 bg-blue-600 p-2 rounded-full">
                  <FiMail size={18} />
                </div>
                <div>
                  <a href="mailto:info@yourcompany.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    info@yourcompany.com
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* خط جداکننده */}
      <div className="container mx-auto px-6 mt-12">
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} تمامی حقوق این وب‌سایت محفوظ است.
            </p>
            <div className="flex space-x-4 space-x-reverse text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                قوانین و مقررات
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                سوالات متداول
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
