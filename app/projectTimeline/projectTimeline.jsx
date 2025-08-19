import Image from "next/image";

// شبیه‌سازی دریافت داده‌ها (سمت سرور)
async function getTimelineData() {
  return [
    {
      id: 1,
      title: "شروع پروژه",
      date: "1404/05/01",
      description: "ایده‌پردازی و طراحی اولیه پروژه آغاز شد.",
      image: "/images/start.jpg",
    },
    {
      id: 2,
      title: "توسعه بخش اصلی",
      date: "1404/05/10",
      description: "کدنویسی بخش‌های اصلی پروژه انجام شد.",
      image: "/images/development.jpg",
    },
    {
      id: 3,
      title: "تست و دیباگ",
      date: "1404/05/15",
      description: "تست‌های مختلف انجام و باگ‌ها رفع شدند.",
      image: "/images/testing.jpg",
    },
    {
      id: 4,
      title: "انتشار نسخه اول",
      date: "1404/05/20",
      description: "نسخه اولیه پروژه برای استفاده آماده شد.",
      image: "/images/release.jpg",
    },
  ];
}

export default async function TimelinePage() {
  const timelineData = await getTimelineData();
  const startDate = timelineData[0]?.date;
  const endDate = timelineData[timelineData.length - 1]?.date;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-600">
        تایم‌لاین پیشرفت پروژه
      </h1>

      <div className="relative max-w-5xl mx-auto">
        {/* خط تایم‌لاین وسط */}
        <div className="absolute left-1/2 top-0 h-full border-l-4 border-blue-500 -translate-x-1/2"></div>

        {/* تاریخ شروع */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-600">
          {startDate}
        </div>

        {/* تاریخ پایان */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-600">
          {endDate}
        </div>

        <div className="space-y-16 relative">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0; // زوج سمت چپ، فرد سمت راست

            return (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* دایره روی خط + تاریخ رویداد */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <span className="w-6 h-6 bg-blue-500 rounded-full ring-8 ring-gray-50"></span>
                  <span className="mt-2 text-xs font-medium text-gray-600">
                    {item.date}
                  </span>
                </div>

                {/* باکس محتوا */}
                <div
                  className={`relative w-full md:w-5/12 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}