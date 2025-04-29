"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requestTypes: [],
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ... existing code ...
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          requestTypes: [...prev.requestTypes, value],
        };
      } else {
        return {
          ...prev,
          requestTypes: prev.requestTypes.filter((type) => type !== value),
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // اینجا کد ارسال فرم به API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      setSubmitStatus({ type: 'success', message: 'پیام شما با موفقیت ارسال شد!' });
      setFormData({ name: "", phone: "", requestTypes: [] });
    } catch (error) {
      console.error("خطا در ارسال فرم:", error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'خطا در ارسال فرم. لطفا دوباره تلاش کنید.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" py-16 px-4 md:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}

        
        {/* Contact Container */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Image / Illustration Section */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
              {/* اینجا می‌توانید تصویر مرتبط با کسب و کار یا خدمات خود را قرار دهید */}
              <img 
                src="/images/solar-energy.jpg" 
                alt="نیروگاه خورشیدی" 
                className="w-full h-full object-cover"
                // اگر تصویر ندارید، می‌توانید از این استایل استفاده کنید
                style={{ display: 'none' }}
              />
              
              {/* تصویر موقت / نمونه - در صورت نداشتن تصویر */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-950 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 mx-auto opacity-80">
                      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">انرژی پاک برای آینده‌ای روشن</h3>
                  <p className="text-lg opacity-90 mb-6">
                    با استفاده از انرژی خورشیدی، علاوه بر کاهش هزینه‌ها، به حفظ محیط زیست نیز کمک کنید.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold">+۱۰۰۰</span>
                      <span className="text-sm">مشتری راضی</span>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold">۹۸٪</span>
                      <span className="text-sm">رضایت مشتری</span>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold">۲۴/۷</span>
                      <span className="text-sm">پشتیبانی</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">فرم درخواست مشاوره</h3>
            
            <p className="text-gray-600 mb-6">
              فرم زیر را پر کنید تا کارشناسان ما در کمترین زمان بهترین پیشنهاد را به شما ارائه دهند
            </p>
            
            {submitStatus && (
              <div className={`p-4 mb-6 rounded-md text-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    نام <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="نام و نام خانوادگی"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    شماره تماس <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۷"
                    pattern="[0-9()#&+*-=.]+"
                    title="فقط شماره ها و کاراکترهای تلفن (#, -, *, etc) پذیرفته می شوند."
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  نوع درخواست
                </label>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="industry"
                        name="requestTypes"
                        value="برای صنایع (پوشش ماده 16 - عدم خاموشی)"
                        checked={formData.requestTypes.includes("برای صنایع (پوشش ماده 16 - عدم خاموشی)")}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="industry" className="mr-3 block text-gray-700 text-xs">
                        برای صنایع (پوشش ماده 16 - عدم خاموشی)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="investment"
                        name="requestTypes"
                        value="سرمایه گذاری با احداث نیروگاه خورشیدی"
                        checked={formData.requestTypes.includes("سرمایه گذاری با احداث نیروگاه خورشیدی")}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="investment" className="mr-3 block text-gray-700 text text-xs">
                        سرمایه گذاری با احداث نیروگاه خورشیدی
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full mt-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-50 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <FaPaperPlane className="ml-2" />
                  )}
                  <span>{isSubmitting ? 'در حال ارسال...' : 'ارسال درخواست'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}