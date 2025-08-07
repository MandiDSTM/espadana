"use client"
import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import axios from 'axios';

// Categories Component
const CategoryDropdown = ({ title, categories, selectedCategory, onCategorySelect, isOpen, onToggle }) => {
  const dropdownRef = useRef(null);

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      {/* عنوان منو */}
      <button
        className={`dropdown-toggle w-full flex items-center justify-between px-4 py-3 
          border border-gray-200 rounded-lg bg-white hover:bg-gray-50 
          transition-all duration-200 focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:border-transparent
          ${isOpen ? 'border-blue-500 shadow-md' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-medium text-gray-900">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-200" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
        )}
      </button>

      {/* منو کشویی با انیمیشن */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 
          rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="dropdown-menu py-1 max-h-60 overflow-y-auto">
            {categories.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onCategorySelect(item)}
                  className={`w-full text-right px-4 py-2 transition-colors duration-150
                    hover:bg-gray-50 focus:outline-none focus:bg-gray-50
                    ${selectedCategory?.id === item.id || selectedCategory?.name === item.name
                      ? 'bg-blue-50 text-blue-700 font-medium border-r-2 border-blue-500'
                      : 'text-gray-700'
                    }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Main Component
const CategoriesSection = ({ selectedCategory, onCategoryChange }) => {
  const [category, setCategory] = useState({});
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://blog.launch-team.ir/api/spadana-sub-categories?populate=*");
        const result = response.data.data;
        const newCategory = {};
        
        result.forEach(element => {
          newCategory[element.name] = element.spadana_categories.map(subElement => ({
            id: subElement.id,
            name: subElement.name,
            documentId: subElement.documentId,
            slug: subElement.slug
          }));
        });
        
        setCategory(newCategory);
        
        // ایجاد state اولیه برای dropdown ها
        const initialDropdownState = {};
        Object.keys(newCategory).forEach(categoryName => {
          initialDropdownState[categoryName] = false;
        });
        setOpenDropdowns(initialDropdownState);
        
        console.log("category:", newCategory);
      } catch (error) {
        console.log("خطا در دریافت داده‌ها:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // بستن dropdown با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        // بستن همه dropdown ها
        const closedState = {};
        Object.keys(category).forEach(categoryName => {
          closedState[categoryName] = false;
        });
        setOpenDropdowns(closedState);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [category]);

  // تابع برای toggle کردن dropdown ها
  const toggleDropdown = useCallback((categoryName) => {
    setOpenDropdowns(prev => {
      const newState = {};
      // همه را false کن
      Object.keys(category).forEach(name => {
        newState[name] = false;
      });
      // فقط target را toggle کن
      newState[categoryName] = !prev[categoryName];
      return newState;
    });
  }, [category]);

  // تابع برای انتخاب دسته‌بندی
  const handleCategorySelect = useCallback((selectedItem) => {
    onCategoryChange(selectedItem); // ارسال به کامپوننت والد
    // بستن همه dropdown ها
    const closedState = {};
    Object.keys(category).forEach(categoryName => {
      closedState[categoryName] = false;
    });
    setOpenDropdowns(closedState);
  }, [onCategoryChange, category]);

  // نمایش loading
  if (loading) {
    return (
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">دسته‌بندی</h3>
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded-lg mb-3"></div>
          <div className="h-12 bg-gray-200 rounded-lg mb-3"></div>
          <div className="h-12 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  // نمایش خطا
  if (error) {
    return (
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">دسته‌بندی</h3>
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          خطا در بارگذاری دسته‌بندی‌ها: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6" ref={containerRef}>
      <h3 className="font-semibold text-gray-900 mb-4 text-lg">دسته‌بندی</h3>

      {/* نمایش دسته‌بندی انتخاب شده */}
      {selectedCategory && selectedCategory !== 'همه' && selectedCategory.name && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-700">
              دسته‌بندی انتخاب شده: <strong>{selectedCategory.name}</strong>
            </span>
            <button
              onClick={() => onCategoryChange('همه')}
              className="text-blue-500 hover:text-blue-700 text-sm underline"
            >
              حذف فیلتر
            </button>
          </div>
        </div>
      )}

      {/* دکمه "همه محصولات" */}
      <div className="mb-3">
        <button
          onClick={() => onCategoryChange('همه')}
          className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
            selectedCategory === 'همه' || selectedCategory === '' || !selectedCategory
              ? 'bg-blue-100 text-blue-800 font-medium border-2 border-blue-500'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          همه محصولات
        </button>
      </div>

      {/* نمایش dynamic dropdown ها */}
      <div className="space-y-3">
        {Object.entries(category).map(([categoryName, subcategories]) => (
          <CategoryDropdown
            key={categoryName}
            title={categoryName}
            categories={subcategories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            isOpen={openDropdowns[categoryName] || false}
            onToggle={() => toggleDropdown(categoryName)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
