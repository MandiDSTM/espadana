"use client";
import { useEffect, useState, useRef } from "react";
import {
  FaDraftingCompass,
  FaTruckLoading,
  FaHardHat,
  FaAngleDown,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// آکوردئون آیتم کامپوننت - بهبود یافته
const AccordionItem = ({ title, content, isOpen, toggleAccordion, index }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className={`w-full text-right py-5 px-6 flex justify-between items-center transition-all duration-300 group hover:bg-gray-50
                  ${isOpen ? "text-blue-600 md:text-2xl " : "text-gray-600-400 "} rounded-xl m-1`}
        onClick={() => toggleAccordion(index)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        <span className="text-sm md:text-lg font-medium group-hover:text-blue-500 transition-colors duration-300 max-w-[90%]">
          {title}
        </span>
        <span
          className={`flex items-center justify-center h-6 w-6 md:w-8 md:h-8  rounded-full transition-all duration-300
                    ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 group-hover:bg-blue-100"
                    }`}
        >
          <FaAngleDown
            className={`transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </span>
      </button>
      <div
        id={`accordion-content-${index}`}
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
        className={`transition-all duration-500 ease-in-out overflow-hidden mb-1 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={contentRef}
          className="p-2 md:p-8  text-gray-600 bg-gray-50 rounded-lg  mx-4 text-sm md:text-base"
        >
          {content}
        </div>
      </div>
    </div>
  );
};

// FAQ Visual Component
const FAQVisualElement = () => (
  <div className="lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0">
    <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
      {/* تصویر بخش سوالات متداول */}
      <img
        src="/images/customer-support.jpg"
        alt="پشتیبانی مشتریان"
        className="w-full h-full object-cover"
        style={{ display: "none" }}
      />

      {/* المان بصری سوالات متداول */}
      <div className="absolute bg-gradient-to-r from-blue-600 to-blue-900 inset-0 flex items-center justify-center p-8">
        <div className="text-center text-white ">
          <div className="mb-3 md:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-20 h-20 mx-auto opacity-80"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg md:text-2xl font-bold mb-4">پرسش‌های متداول شما</h3>
          <p className="text-sm md:text-lg opacity-90 mb-6">
            اینجا مکانی برای یافتن پاسخ‌های دقیق به سوالات رایج شماست. همواره در
            کنار شما هستیم.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <div className="bg-white  bg-opacity-20 p-2 md:p-4 rounded-lg text-center  flex flex-col justify-center">
              <span className="block text-sm md:text-2xl font-bold">۲۴/۷</span>
              <span className="text-sm">پشتیبانی آنلاین</span>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
              <span className="block text-sm md:text-2xl font-bold">+۵۰۰</span>
              <span className="text-sm">سوالات پاسخ داده شده</span>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
              <span className="block text-sm md:text-2xl font-bold">۹۰٪</span>
              <span className="text-sm">نرخ رضایت</span>
            </div>
          </div>

          <div className="mt-4 md:mt-8">
            <a
              href="#contact"
              className="inline-block bg-white text-indigo-700 font-medium text-sm md:text-base py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-200"
            >
              سوال خود را بپرسید
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Service Card Component
const ServiceCard = ({ service, index, activeTab, changeTab }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={service.delay}
    className="h-96 group relative"
  >
    <div
      id="services"
      className={`h-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 
                hover:shadow-2xl relative bg-cover bg-center
                ${
                  activeTab === index
                    ? "ring-4 ring-blue-500 transform scale-[1.02]"
                    : "hover:transform hover:scale-[1.02]"
                }`}
      style={{ backgroundImage: `url(${service.image})` }}
      onClick={() => changeTab(index)}
      role="button"
      aria-label={`انتخاب بخش ${service.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          changeTab(index);
        }
      }}
    >
      {/* گرادیان پس‌زمینه */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>

      {/* محتوای اصلی (عنوان) */}
      <div className="relative z-10 p-8 flex flex-col items-center justify-end h-full">
        <div
          className={`transform transition-transform duration-500 ${
            activeTab === index ? "scale-110" : "group-hover:scale-110"
          }`}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-2">
            {service.title}
          </h3>
          {activeTab === index && (
            <p className="text-sm text-white/90 text-center">(در حال مشاهده)</p>
          )}
        </div>
      </div>

      {/* لایه توضیحات در حالت hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8 z-20 backdrop-blur-sm">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 mx-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {service.title}
        </h3>
        <p className="text-gray-300 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
          {service.description}
        </p>
        <div className="mt-6 text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeTab(index);
            }}
            className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-medium shadow-lg hover:shadow-blue-500/50"
          >
            اطلاعات بیشتر
          </button>
        </div>
      </div>

      {/* نشانگر انتخاب شده */}
      {activeTab === index && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rotate-45 z-10"></div>
      )}
    </div>
  </div>
);

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const accordionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  // آرایه خدمات با تصاویر
  const services = [
    {
      icon: <FaDraftingCompass className="text-4xl text-blue-600" />,
      title: "طراحی و مهندسی",
      description:
        "تیم متخصص ما با تکیه بر دانش فنی و تجربه، خدمات جامع طراحی مهندسی ارائه می‌دهد. از مشاوره اولیه تا تهیه نقشه‌های دقیق و محاسبات فنی، ما راه‌حل‌هایی سفارشی متناسب با نیازهای پروژه شما ارائه می‌کنیم.",
      delay: 100,
      image: "/images/services/mohandesi.jpg",
      faqs: [
        {
          question: "چه خدمات مهندسی ارائه می‌دهید؟",
          answer:
            "ما طراحی تفصیلی سیستم‌های فتوولتائیک، مطالعات امکان‌سنجی، شبیه‌سازی عملکرد، طراحی سازه‌های نگهدارنده، نقشه‌های الکتریکی و مکانیکی را ارائه می‌دهیم.",
        },
        {
          question: "فرآیند طراحی چقدر زمان می‌برد؟",
          answer:
            "بسته به پیچیدگی و مقیاس پروژه، فرآیند طراحی معمولاً بین 2 تا 6 هفته زمان می‌برد. برای پروژه‌های بزرگ‌تر، مرحله طراحی می‌تواند به چند فاز تقسیم شود.",
        },
        {
          question: "آیا طراحی‌های شما با استانداردهای بین‌المللی مطابقت دارد؟",
          answer:
            "بله، تمام طراحی‌های ما مطابق با استانداردهای IEC، IEEE و مقررات ملی ساختمان ایران انجام می‌شود تا اطمینان حاصل شود که سیستم‌ها از نظر ایمنی و کارایی در بالاترین سطح هستند.",
        },
      ],
    },
    {
      icon: <FaTruckLoading className="text-4xl text-blue-600" />,
      title: "تامین تجهیزات",
      description:
        "با شبکه گسترده تامین‌کنندگان معتبر، ما بهترین تجهیزات و مصالح را با کیفیت بالا و قیمت مناسب برای پروژه‌های شما فراهم می‌کنیم. سیستم لجستیک پیشرفته ما، تحویل به موقع و مدیریت موجودی کارآمد را تضمین می‌کند.",
      delay: 200,
      image: "/images/services/tamin.jpg",
      faqs: [
        {
          question: "چه نوع تجهیزات خورشیدی ارائه می‌کنید؟",
          answer:
            "ما انواع پنل‌های خورشیدی، اینورترها، سیستم‌های نگهدارنده، سیستم‌های کنترل و مانیتورینگ، سیستم‌های ذخیره‌سازی انرژی و سایر تجهیزات الکتریکی مورد نیاز برای نیروگاه‌های خورشیدی را تأمین می‌کنیم.",
        },
        {
          question: "آیا تجهیزات شما گارانتی دارند؟",
          answer:
            "بله، تمام تجهیزات ما دارای گارانتی کارخانه‌ای هستند. پنل‌های خورشیدی معمولاً دارای 25 سال گارانتی تولید و 10 سال گارانتی محصول، و اینورترها 5 تا 10 سال گارانتی دارند.",
        },
        {
          question: "آیا برای پروژه‌های کوچک هم تجهیزات تأمین می‌کنید؟",
          answer:
            "بله، ما برای پروژه‌های در تمام مقیاس‌ها از سیستم‌های خانگی کوچک تا نیروگاه‌های مگاواتی، تجهیزات تأمین می‌کنیم.",
        },
      ],
    },
    {
      icon: <FaHardHat className="text-4xl text-blue-600" />,
      title: "اجرا",
      description:
        "تیم اجرایی ما متشکل از متخصصان باتجربه، پروژه‌های شما را با دقت بالا، مطابق استانداردهای صنعتی و در چارچوب زمانی و بودجه توافق شده به اتمام می‌رساند. نظارت مستمر و گزارش‌دهی منظم، شفافیت کامل در تمام مراحل اجرا را تضمین می‌کند.",
      delay: 300,
      image: "/images/services/ejra.jpg",
      faqs: [
        {
          question: "مراحل اجرای یک پروژه نیروگاه خورشیدی چیست؟",
          answer:
            "مراحل اجرا شامل: آماده‌سازی سایت، نصب سازه‌های نگهدارنده، نصب پنل‌های خورشیدی، نصب تجهیزات الکتریکی، کابل‌کشی، نصب سیستم مانیتورینگ، تست و راه‌اندازی، و در نهایت تحویل پروژه می‌باشد.",
        },
        {
          question: "مدت زمان اجرای پروژه چقدر است؟",
          answer:
            "زمان اجرا بسته به اندازه پروژه متفاوت است. یک سیستم خانگی معمولاً 1 تا 3 روز، سیستم‌های تجاری متوسط 1 تا 4 هفته و نیروگاه‌های بزرگ چند ماه زمان نیاز دارند.",
        },
        {
          question: "آیا پس از نصب خدمات پشتیبانی ارائه می‌دهید؟",
          answer:
            "بله، ما خدمات نگهداری و تعمیرات دوره‌ای، پایش عملکرد سیستم، شستشوی پنل‌ها، و رفع عیب سریع را برای اطمینان از عملکرد بهینه سیستم شما ارائه می‌دهیم.",
        },
      ],
    },
  ];

  // تغییر تب فعال با اسکرول خودکار به بخش آکوردئون
  const changeTab = (index) => {
    setActiveTab(index);
    setOpenAccordion(0); // اولین آکوردئون در تب جدید باز شود

    // اسکرول به بخش آکوردئون با انیمیشن
    if (accordionRef.current) {
      setTimeout(() => {
        accordionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  // باز/بسته کردن آکوردئون
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <section
      className="pb-16 pt-44  bg-gradient-to-b from-slate-50 to-slate-100 "
      id="services"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        {/* بخش هدر */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            خدمات ما
            <span className="block h-1 w-24 bg-blue-600 mx-auto mt-4"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ارائه خدمات جامع و تخصصی در سه حوزه اصلی برای اطمینان از موفقیت
            پروژه‌های شما
          </p>
        </div>

        {/* بخش کارت‌های خدمات */}
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              activeTab={activeTab}
              changeTab={changeTab}
            />
          ))}
        </div>

        {/* بخش سوالات متداول */}
        <div className="max-w-7xl mx-auto  pt-24">
          <h3 className="text-center text-2xl md:text-4xl font-bold mb-12">
            سوالات متداول
            <span className="block w-24 h-1 bg-blue-600 mx-auto mb-6 rounded mt-6"></span>
          </h3>

          {/* بخش دو ستونه - المان بصری و آکوردئون */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* المان بصری */}
            <FAQVisualElement />

            {/* آکوردئون سوالات */}
            <div className="lg:w-1/2" ref={accordionRef}>
              {/* تب‌های آکوردئون */}
              <div className="flex flex-wrap md:flex-nowrap border-b border-gray-200 bg-white rounded-t-xl shadow-xl overflow-hidden">
                {services.map((service, index) => (
                  <button
                    key={index}
                    className={`flex-1 py-4 px-3 md:px-5 font-medium text-center transition-all duration-300 relative
                         ${
                           activeTab === index
                             ? "bg-blue-600 text-white shadow-lg hover:bg-blue-800"
                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                         }`}
                    onClick={() => changeTab(index)}
                    aria-selected={activeTab === index}
                    role="tab"
                  >
                    <span>{service.title}</span>
                    {activeTab === index && (
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-300"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* محتوای آکوردئون */}
              <div className="p-6 md:p-8 bg-white rounded-b-xl shadow-xl">
                <div className="flex items-center pb-4 mb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800">
                    {services[activeTab].title} - سوالات متداول
                  </h3>
                </div>

                <div className="divide-y divide-gray-200">
                  {services[activeTab].faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      title={faq.question}
                      content={faq.answer}
                      isOpen={openAccordion === index}
                      toggleAccordion={toggleAccordion}
                      index={index}
                    />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="px-8 py-3 rounded-lg  bg-blue-600  hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-blue-500/30 transform hover:scale-105">
                    دریافت مشاوره رایگان
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
