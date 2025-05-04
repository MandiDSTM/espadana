import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col min-h-screen">
      {/* هدر با ناوبار */}
      <header>
        <Navbar />
      </header>

      <div className="w-full h-10 bg-blue-800"></div>

      {/* بخش تصویر هدر */}
      <div className="relative w-full h-32 md:h-48 lg:h-[300px] bg-blue-800">
        <Image
          src="/images/final-header.svg"
          alt="About Header"
          fill
          className="object-cover"
        />
      </div>

      {/* محتوای اصلی */}
      <main className="flex-1 p-6 md:p-12 bg-gray-50">
        <div className="container mx-auto">
          {/* بخش عنوان */}
          <div className="p-10 mb-24 rounded">
            <h1 className="mb-4 text-3xl font-bold text-center">
              ساخت آینده با انرژی پاک
            </h1>
            <p className="text-center mt-7">
              با راه‌حل‌های نوآورانه انرژی‌های تجدیدپذیر، هر روز قدمی کوچک برای
              زمینی پاک‌تر برمی‌داریم.
            </p>
          </div>

          {/* بخش محتوا و تصاویر */}
          <div className="flex flex-col md:flex-row md:gap-10 mb-7">
            {/* بخش تصاویر */}
            <div className="relative hidden md:w-1/2 md:h-[750px] md:flex md:items-center">
              <div className="relative w-full md:h-[650px] mx-auto md:flex justify-center items-center top-0 ">
                <div className="absolute none z-20 -top-12 left-5 rounded-xl shadow-xl">
                  <Image
                    src="/images/about-inner-5.jpg"
                    width={370}
                    height={200}
                    className="rounded-2xl shadow-lg"
                    alt="اسپادانا"
                  />
                </div>
                <div className="absolute z-0 -bottom-12 right-12 rounded-xl shadow-4xl">
                  <Image
                    src="/images/about-inner-4.jpg"
                    width={350}
                    height={200}
                    className="rounded-2xl shadow-lg"
                    alt="اسپادانا"
                  />
                </div>
                <div className="absolute z-20 mx-auto top-0  rounded-xl shadow-xl">
                  <Image
                    src="/images/about-inner-pic.jpg"
                    alt="espadana"
                    width={370}
                    height={100}
                    className="rounded-xl mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* بخش متن */}
            <div className="w-full md:w-1/2   text-gray-700 leading-relaxed flex items-center ">
              <div className="md:h-[450px] rounded-2xl shadow-xl p-5 px-12">
                <h4 className="font-bold text-3xl text-center mb-8 mt-6">
                  ما کی هستیم و چه می کنیم
                </h4>
                <p>
                  پیشرو فناوران اسپادانا، شرکتی پیشگام در صنعت انرژی‌های
                  تجدیدپذیر، با تمرکز بر طراحی، مهندسی و اجرای نیروگاه‌های
                  خورشیدی در استان سمنان فعالیت می‌کند. با بهره‌گیری از دانش فنی
                  روز و تجربه تیم متخصص، راهکارهای جامعی برای سرمایه‌گذاران
                  سراسر کشور ارائه می‌دهیم.
                </p>

                <p>
                  <b>زنجیره تبادل هوشمند روشان:</b> فعال در حوزه رمزارزها با دو
                  صرافی معتبر بیت‌سو بیت و وب‌ارز۲۴، ارائه‌دهنده خدمات VIP،
                  ربات‌های معاملاتی و مشاوره حرفه‌ای در بازار ارزهای دیجیتال.
                </p>

                <p>
                  <b>آجر پایه:</b> پیشرو در خدمات استخراج رمزارزها با سابقه ساخت
                  اولین فارم استخراج خورشیدی جهان، ارائه‌دهنده کامل‌ترین خدمات
                  از خرید ماینر تا هتلینگ و تعمیرات تخصصی.
                </p>

                <p>
                  <b>زنجیره بلوک انرژی:</b> نوآور در توکن‌سازی دارایی‌های واقعی
                  مانند نیروگاه‌ها، در حال توسعه زیرساخت‌های قانونی و اجرای
                  پروژه‌های پایلوت برای مشارکت عمومی در مالکیت انرژی پاک.
                </p>

                <p>
                  این مجموعه با ترکیب تخصص‌های منحصر به فرد، راهکارهای نوآورانه
                  در حوزه انرژی و فناوری ارائه می‌دهد. برای شروع همکاری و
                  اطلاعات بیشتر با ما تماس بگیرید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* فوتر */}
      <footer className="bg-gray-800 text-gray-200">
        <Footer />
      </footer>
    </section>
  );
}
