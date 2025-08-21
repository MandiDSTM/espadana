"use client";

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 bg-white ">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">تماس با ما</h2>
        <p className="text-lg text-gray-600 mb-8">برای مشاوره یا دریافت اطلاعات بیشتر با ما در ارتباط باشید.</p>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="نام" className="border p-3 rounded-lg" />
          <input type="email" placeholder="ایمیل" className="border p-3 rounded-lg" />
          <textarea placeholder="پیام شما" className="border p-3 rounded-lg h-32" />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">ارسال پیام</button>
        </form>
      </div>
    </section>
  );
}
