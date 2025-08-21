// components/ServiceCard.jsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ service, index, activeTab, changeTab }) => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false, mirror: true });
    }, []);
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={service.delay}
            className="h-96 group relative"
        >
            <div
                id="services"
                className={`h-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 
                hover:shadow-2xl relative bg-cover bg-center
                ${activeTab === index
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10">
                </div>

                {/* محتوای اصلی (عنوان) */}
                <div className="relative z-10 p-8 flex flex-col items-center justify-end h-full">
                    <div
                        className={`transform transition-transform 
                            duration-500 ${activeTab === index ? "scale-110" : "group-hover:scale-110"
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
                <div className="absolute inset-0 bg-gradient-to-b
                 from-blue-900/95 to-black/60 opacity-0 
                group-hover:opacity-100 transition-all duration-500 flex
                 flex-col justify-center p-8 z-20 
                backdrop-blur-sm">
                    <div className="flex items-center justify-center w-16 h-16 
                    rounded-full bg-white/10 
                    mb-4 mx-auto transform translate-y-4 group-hover:translate-y-0 
                    transition-transform duration-500">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white text-center
                     transform translate-y-4 
                    group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {service.title}
                    </h3>
                    <p className="text-gray-300 text-center transform translate-y-4 group-hover:translate-y-0 
                    transition-transform duration-500 delay-150">
                        {service.description}
                    </p>
                    <div className="mt-6 text-center transform translate-y-4 opacity-0 
                    group-hover:translate-y-0 
                    group-hover:opacity-100 transition-all duration-500 delay-200">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                changeTab(index);
                            }}
                            className="px-6 py-2 rounded bg-blue-600
                             hover:bg-blue-700 transition-colors 
                            duration-300 text-white font-medium shadow-lg
                             hover:shadow-blue-500/50"
                        >
                            اطلاعات بیشتر
                        </button>
                    </div>
                </div>

                {/* نشانگر انتخاب شده */}
                {activeTab === index && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 
                    rotate-45 z-10"></div>
                )}
            </div>
        </div>
    )
};


export default ServiceCard