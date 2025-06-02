import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
              <li key={item}>
                <button
                  onClick={() => onCategorySelect(item)}
                  className={`w-full text-right px-4 py-2 transition-colors duration-150
                    hover:bg-gray-50 focus:outline-none focus:bg-gray-50
                    ${selectedCategory === item
                      ? 'bg-blue-50 text-blue-700 font-medium border-r-2 border-blue-500'
                      : 'text-gray-700'
                    }`}
                >
                  {item}
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
  const [openDropdowns, setOpenDropdowns] = useState({
    niroogah: false,
    zakhireh: false
  });
  const containerRef = useRef(null);

  // بستن dropdown با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenDropdowns({ niroogah: false, zakhireh: false });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // تابع برای toggle کردن dropdown ها
  const toggleDropdown = useCallback((dropdownName) => {
    setOpenDropdowns(prev => ({
      niroogah: dropdownName === 'niroogah' ? !prev.niroogah : false,
      zakhireh: dropdownName === 'zakhireh' ? !prev.zakhireh : false
    }));
  }, []);

  // تابع برای انتخاب دسته‌بندی
  const handleCategorySelect = useCallback((category) => {
    onCategoryChange(category); // ارسال به کامپوننت والد
    setOpenDropdowns({ niroogah: false, zakhireh: false }); // بستن همه dropdown ها
  }, [onCategoryChange]);

  // دسته‌بندی‌ها (باید مطابق با دسته‌بندی‌های موجود در sampleProducts باشند)
  const niroogahCategories = ['پنل خورشیدی', 'اینورتر خوشیدی'];
  const zakhirehCategories = ['باتری', 'یو پی اس (UPS)', 'All in one (برق اضطراری)'];

  return (
    <div className="mb-6" ref={containerRef}>
      <h3 className="font-semibold text-gray-900 mb-4 text-lg">دسته‌بندی</h3>
      
      {/* نمایش دسته‌بندی انتخاب شده */}
      {selectedCategory && selectedCategory !== 'همه' && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-700">
              دسته‌بندی انتخاب شده: <strong>{selectedCategory}</strong>
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
            selectedCategory === 'همه' || selectedCategory === ''
              ? 'bg-blue-100 text-blue-800 font-medium border-2 border-blue-500'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          همه محصولات
        </button>
      </div>

      <div className="space-y-3">
        <CategoryDropdown
          title="تجهیزات نیروگاهی"
          categories={niroogahCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          isOpen={openDropdowns.niroogah}
          onToggle={() => toggleDropdown('niroogah')}
        />

        <CategoryDropdown
          title="تجهیزات ذخیره سازی"
          categories={zakhirehCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          isOpen={openDropdowns.zakhireh}
          onToggle={() => toggleDropdown('zakhireh')}
        />
      </div>
    </div>
  );
};

export default CategoriesSection;
