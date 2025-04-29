"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ title, content, isOpen, onClick, index }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <h6
        id={`accordion-header-${index}`}
        className={`py-4 px-5 flex justify-between items-center cursor-pointer transition-colors duration-300 ${
          isOpen ? "text-indigo-600" : "hover:text-indigo-500"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        <span className="font-semibold text-base">{title}</span>
        <span className="text-sm ml-2">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </h6>
      <div
        id={`accordion-content-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-labelledby={`accordion-header-${index}`}
      >
        <div className="p-5 pt-0 text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default function Accordion({ items, allowMultiple = false, title = "سوالات متداول", description }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) => {
      const newOpenItems = new Set(prevOpenItems);
      
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
      
      return newOpenItems;
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          {description && <p className="text-gray-600 max-w-2xl">{description}</p>}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Image / Illustration Section */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
              {/* اینجا می‌توانید تصویر مرتبط با کسب و کار یا خدمات خود را قرار دهید */}
              <img 
                src="/images/customer-support.jpg" 
                alt="پشتیبانی مشتریان" 
                className="w-full h-full object-cover"
                // اگر تصویر ندارید، می‌توانید از این استایل استفاده کنید
                style={{ display: 'none' }}
              />
              
              {/* تصویر موقت / نمونه - در صورت نداشتن تصویر */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 mx-auto opacity-80">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">پرسش‌های متداول شما</h3>
                  <p className="text-lg opacity-90 mb-6">
                    اینجا مکانی برای یافتن پاسخ‌های دقیق به سوالات رایج شماست. همواره در کنار شما هستیم.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold">۲۴/۷</span>
                      <span className="text-sm">پشتیبانی آنلاین</span>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold">+۵۰۰</span>
                      <span className="text-sm">سوالات پاسخ داده شده</span>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold">۹۰٪</span>
                      <span className="text-sm">نرخ رضایت</span>
                    </div>
                  </div>
                  
                  {/* بخش اضافه شده - دکمه تماس */}
                  <div className="mt-8">
                    <a href="#contact" className="inline-block bg-white text-indigo-700 font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-200">
                      سوال خود را بپرسید
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Accordion Section */}
          <div className="lg:w-1/2">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openItems.has(index)}
                  onClick={() => toggleItem(index)}
                />
              ))}
            </div>
            
            {/* Additional Note */}
            <div className="mt-6 text-sm text-gray-500 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <p>
                هنوز پاسخ سوال خود را پیدا نکرده‌اید؟ از طریق فرم تماس با ما، سوال خود را مطرح کنید. کارشناسان ما در اسرع وقت پاسخگوی شما خواهند بود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}