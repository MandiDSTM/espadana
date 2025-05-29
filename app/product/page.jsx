"use client"
import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Search, Filter, Grid, List } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortBy, setSortBy] = useState('جدیدترین');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // داده‌های نمونه محصولات
  const sampleProducts = [
    {
      id: 1,
      name: 'لپ تاپ ایسوس VivoBook',
      category: 'لپ‌تاپ',
      price: 25000000,
      originalPrice: 28000000,
      image: 'https://via.placeholder.com/300x200/3B82F6/white?text=لپ+تاپ+ایسوس',
      rating: 4.5,
      reviews: 127,
      inStock: true,
      isNew: true,
      description: 'لپ تاپ قدرتمند با پردازنده Intel Core i7'
    },
    {
      id: 2,
      name: 'موبایل سامسونگ Galaxy A54',
      category: 'موبایل',
      price: 15000000,
      originalPrice: 16500000,
      image: 'https://via.placeholder.com/300x200/EF4444/white?text=سامسونگ+A54',
      rating: 4.2,
      reviews: 89,
      inStock: true,
      isNew: false,
      description: 'گوشی هوشمند با دوربین 50 مگاپیکسل'
    },
    {
      id: 3,
      name: 'هدفون بی‌سیم سونی',
      category: 'صوتی',
      price: 3500000,
      originalPrice: 4000000,
      image: 'https://via.placeholder.com/300x200/10B981/white?text=هدفون+سونی',
      rating: 4.8,
      reviews: 234,
      inStock: false,
      isNew: false,
      description: 'هدفون با کیفیت صدای بی‌نظیر و noise cancelling'
    },
    {
      id: 4,
      name: 'ساعت هوشمند اپل واچ',
      category: 'پوشیدنی',
      price: 12000000,
      originalPrice: 13000000,
      image: 'https://via.placeholder.com/300x200/8B5CF6/white?text=اپل+واچ',
      rating: 4.6,
      reviews: 156,
      inStock: true,
      isNew: true,
      description: 'ساعت هوشمند با امکانات سلامتی پیشرفته'
    },
    {
      id: 5,
      name: 'تبلت آیپد ایر',
      category: 'تبلت',
      price: 20000000,
      originalPrice: 22000000,
      image: 'https://via.placeholder.com/300x200/F59E0B/white?text=آیپد+ایر',
      rating: 4.7,
      reviews: 98,
      inStock: true,
      isNew: false,
      description: 'تبلت قدرتمند برای کار و سرگرمی'
    },
    {
      id: 6,
      name: 'دوربین کانن EOS R6',
      category: 'دوربین',
      price: 45000000,
      originalPrice: 48000000,
      image: 'https://via.placeholder.com/300x200/EC4899/white?text=کانن+R6',
      rating: 4.9,
      reviews: 67,
      inStock: true,
      isNew: true,
      description: 'دوربین حرفه‌ای برای عکاسی و فیلمبرداری'
    }
  ];

  const categories = ['همه', 'لپ‌تاپ', 'موبایل', 'صوتی پوشیدنی', 'تبلت', 'دوربین'];

  useEffect(() => {
    // شبیه‌سازی API call
    setTimeout(() => {
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, priceRange, searchTerm, sortBy, products]);

  const filterProducts = () => {
    let filtered = [...products];

    // فیلتر بر اساس دسته‌بندی
    if (selectedCategory !== 'همه') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // فیلتر بر اساس قیمت
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // فیلتر بر اساس جستجو
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // مرتب‌سازی
    switch (sortBy) {
      case 'قیمت-کم':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'قیمت-زیاد':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'محبوب‌ترین':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'جدیدترین':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 mr-1">({rating})</span>
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
        
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">جدید</span>
          )}
          {product.originalPrice > product.price && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% تخفیف
            </span>
          )}
        </div>
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        {renderStars(product.rating)}
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'موجود' : 'ناموجود'}
            </span>
          </div>
        </div>

        <button 
          className={`w-full mt-4 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
            product.inStock
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!product.inStock}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.inStock ? 'افزودن به سبد' : 'ناموجود'}
        </button>
      </div>
    </div>
  );

  const ProductListItem = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover"
      />
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <button className="p-1 hover:bg-gray-50 rounded">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          {renderStars(product.rating)}
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <span className={`text-xs px-2 py-1 rounded ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'موجود' : 'ناموجود'}
            </span>
            
            <button 
              className={`py-2 px-4 rounded-lg transition-colors flex items-center gap-2 ${
                product.inStock
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4" />
              {product.inStock ? 'افزودن به سبد' : 'ناموجود'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">در حال بارگذاری محصولات...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
        <Navbar />
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 pt-10">فروشگاه محصولات</h1>
          <p className="text-gray-600">بهترین محصولات تکنولوژی را از ما بخرید</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="جستجو در محصولات..."
                    className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">دسته‌بندی</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-right px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">محدوده قیمت</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="50000000"
                    step="1000000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    {filteredProducts.length} محصول یافت شد
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="جدیدترین">جدیدترین</option>
                    <option value="محبوب‌ترین">محبوب‌ترین</option>
                    <option value="قیمت-کم">قیمت: کم به زیاد</option>
                    <option value="قیمت-زیاد">قیمت: زیاد به کم</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${
                        viewMode === 'grid'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${
                        viewMode === 'list'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  محصولی یافت نشد
                </h3>
                <p className="text-gray-600">
                  لطفاً فیلترها را تغییر دهید یا عبارت جستجوی دیگری امتحان کنید
                </p>
              </div>
            ) : (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }>
                {filteredProducts.map((product) =>
                  viewMode === 'grid' ? (
                    <ProductCard key={product.id} product={product} />
                  ) : (
                    <ProductListItem key={product.id} product={product} />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}