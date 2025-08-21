"use client";
import { useState, useRef } from "react";
import AccordionItem from "./AccordionItem";
import FAQVisualElement from "./FAQVisualElement";

export default function FAQClient({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const accordionRef = useRef(null);

  const changeTab = (index) => {
    setActiveTab(index);
    setOpenAccordion(0);
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <FAQVisualElement />
      <div className="lg:w-1/2" ref={accordionRef}>
        <div className="flex border-b border-gray-200 bg-white 
        rounded-t-xl shadow">
          {data.map((service, index) => (
            <button
              key={index}
              className={`flex-1 py-4 font-medium ${
                activeTab === index
                  ? "bg-blue-600 text-white rounded-t"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => changeTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>
        <div className="p-6 bg-white rounded-b-xl shadow">
          {data[activeTab].faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.question}
              content={faq.answer}
              isOpen={openAccordion === index}
              toggleAccordion={setOpenAccordion}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
