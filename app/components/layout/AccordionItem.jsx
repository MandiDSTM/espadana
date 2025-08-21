"use client";
import { useEffect, useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";


export default function AccordionItem({ title, content, isOpen, toggleAccordion, index }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className={`w-full text-right py-5 px-6 flex justify-between 
          items-center transition-all duration-300 group hover:bg-gray-50
        ${isOpen ? "text-blue-600 md:text-2xl" : "text-gray-600"} 
        rounded-xl m-1`}
        onClick={() => toggleAccordion(index)}
      >
        <span className="text-sm md:text-lg font-medium 
        group-hover:text-blue-500 transition-colors duration-300 max-w-[90%]">
          {title}
        </span>
        <span
          className={`flex items-center justify-center h-6 w-6 md:w-8 md:h-8 
            rounded-full transition-all duration-300
          ${isOpen ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 group-hover:bg-blue-100"}`}
        >
          <FaAngleDown className={`${isOpen ? "rotate-180" : ""} 
          transition-transform duration-300`} />
        </span>
      </button>
      <div
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
        className={`transition-all duration-500 ease-in-out 
          overflow-hidden mb-1 ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        <div ref={contentRef} className="p-2 md:p-8 text-gray-600 
        bg-gray-50 rounded-lg mx-4 text-sm md:text-base">
          {content}
        </div>
      </div>
    </div>
  );
}
