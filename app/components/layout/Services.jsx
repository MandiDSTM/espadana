import FAQ from "./FAQ";
import ServiceCard from "./ServiceCard";
import data from "./data"

export default function Services() {

  return (
    <section className="pb-16 pt-44 bg-gradient-to-b " id="services">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">خدمات ما</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ارائه خدمات جامع و تخصصی در سه حوزه اصلی برای موفقیت پروژه‌های شما
          </p>
        </div>

        <div className="pb-32 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {data.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
      <FAQ />
    </section>
  );
}
