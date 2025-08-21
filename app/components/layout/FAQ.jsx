import FAQClient from "./Accordion.client";
import data from "./FAQData";

export default function FAQ() {
  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-2xl md:text-4xl font-bold mb-20">
          سوالات متداول
        </h3>
        <FAQClient data={data} />
      </div>
    </section>
  );
}
