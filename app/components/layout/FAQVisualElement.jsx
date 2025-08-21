// components/shared/FAQVisualElement.jsx
export default function FAQVisualElement({
  title = "پرسش‌های متداول شما",
  subtitle =
    "اینجا مکانی برای یافتن پاسخ‌های دقیق به سوالات رایج شماست. همواره در کنار شما هستیم.",
  stats = [
    { label: "پشتیبانی آنلاین", value: "۲۴/۷" },
    { label: "سوالات پاسخ داده شده", value: "+۵۰۰" },
    { label: "نرخ رضایت", value: "۹۰٪" },
  ],
  ctaHref = "#contact",
  ctaText = "سوال خود را بپرسید",
}) {
  return (
    <div className="lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0">
      <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
        <div className="absolute bg-gradient-to-r from-blue-600 to-blue-900 inset-0 flex items-center justify-center p-8">
          <div className="text-center text-white">
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

            <h3 className="text-lg md:text-2xl font-bold mb-4">{title}</h3>

            <p className="text-sm md:text-lg opacity-90 mb-6">{subtitle}</p>

            <div className="flex justify-center gap-4 mt-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white bg-opacity-20 p-2 md:p-4 rounded-lg text-center flex flex-col justify-center min-w-[88px]"
                >
                  <span className="block text-sm md:text-2xl font-bold">
                    {s.value}
                  </span>
                  <span className="text-sm">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 md:mt-8">
              <a
                href={ctaHref}
                className="inline-block bg-white text-indigo-700 font-medium text-sm md:text-base py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-200"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
