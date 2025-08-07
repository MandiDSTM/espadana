"use client"
import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Search, Filter, Grid, List } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { sampleProducts } from '@/data/products/products'
import Link from 'next/link';
import Image from 'next/image';
import DropDown from '../components/ui/dropdown/DropDown'
import LinkWithProgress from '../components/linkWithProgress/LinkWithProgress';
import axios from 'axios'

// کامپوننت Skeleton
const Skeleton = ({ width = '100%', height = '20px', className = '', rounded = false }) => {
  return (
    <div
      className={`
        animate-pulse 
        bg-gray-200 
        ${rounded ? 'rounded-full' : 'rounded'} 
        ${className}
      `}
      style={{ width, height }}
    />
  );
};

// اسکلتون کارت محصول
const ProductCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Skeleton height="192px" className="w-full" />
    <div className="p-4">
      <Skeleton height="24px" width="80%" className="mb-2" />
      <Skeleton height="16px" width="100%" className="mb-1" />
      <Skeleton height="16px" width="60%" className="mb-3" />

      {/* ستاره‌ها */}
      <div className="flex items-center mb-3">
        <Skeleton height="16px" width="100px" />
      </div>

      {/* قیمت */}
      <div className="flex items-center justify-between mb-3">
        <Skeleton height="20px" width="80px" />
        <Skeleton height="20px" width="50px" />
      </div>

      {/* دکمه */}
      <Skeleton height="40px" width="100%" />
    </div>
  </div>
);

// اسکلتون آیتم لیست
const ProductListItemSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
    <Skeleton height="128px" width="128px" />
    <div className="flex-1 p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-2">
          <Skeleton height="24px" width="70%" />
          <Skeleton height="16px" width="16px" rounded />
        </div>
        <Skeleton height="16px" width="100%" className="mb-1" />
        <Skeleton height="16px" width="80%" className="mb-2" />
        <Skeleton height="16px" width="100px" />
      </div>

      <div className="flex items-center justify-between mt-3">
        <Skeleton height="20px" width="80px" />
        <div className="flex items-center gap-3">
          <Skeleton height="20px" width="50px" />
          <Skeleton height="40px" width="120px" />
        </div>
      </div>
    </div>
  </div>
);

// اسکلتون صفحه اصلی
const ProductsPageSkeleton = () => (
  <div className="min-h-screen bg-gray-50" dir="rtl">
    <Navbar />
    {/* Header */}
    <div className=" shadow-sm border-b bg-blue-800">
      <div className="container mx-auto px-4 py-6 bg-blue-800">
        <h1 className="text-3xl font-bold text-gray-100 mb-2 pt-16 text-center ">فروشگاه اسپادانا</h1>
        <p className="text-gray-200 text-center pt-2">انرژی پایدار، آینده روشن با اسپادانا</p>
      </div>
    </div>


    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Skeleton */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            {/* Search Skeleton */}
            <div className="mb-6">
              <Skeleton height="40px" width="100%" />
            </div>

            {/* Categories Skeleton */}
            <div className="mb-6">
              <Skeleton height="20px" width="80px" className="mb-3" />
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} height="36px" width="100%" />
                ))}
              </div>
            </div>

            {/* Price Range Skeleton */}
            <div className="mb-6">
              <Skeleton height="20px" width="100px" className="mb-3" />
              <Skeleton height="20px" width="100%" className="mb-2" />
              <div className="flex justify-between">
                <Skeleton height="16px" width="30px" />
                <Skeleton height="16px" width="80px" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1">
          {/* Toolbar Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Skeleton height="20px" width="150px" />
              <div className="flex items-center gap-4">
                <Skeleton height="40px" width="120px" />
                <Skeleton height="40px" width="80px" />
              </div>
            </div>
          </div>

          {/* Products Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [priceRange, setPriceRange] = useState([0, 300000000]);
  const [sortBy, setSortBy] = useState('جدیدترین');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log("useEffect running...");

    axios.get('https://blog.launch-team.ir/api/spadana-items?fields[0]=title&fields[1]=description&fields[2]=slug&fields[3]=price&fields[4]=isNew&fields[5]=available&fields[6]=publishedAt&fields[7]=rate&populate[cover][fields][0]=url')
      .then((response) => {
        const data = response.data.data;
        setProducts(data);
        setFilteredProducts(data);
        return data;
      })
      .then((data) => {
        console.log("Fetched data:", data);
      })
      .catch((err) => {
        console.log('Error occurred:', err);
      });
  }, []);

    useEffect(() => {
    if (products.length > 0) {
      console.log("Updated products state:", products);
      products.map(product => {
        console.log(`blog.launch-team.ir${product.cover.url}`)
      })
    }
  }, [products]);


  useEffect(() => {
    // شبیه‌سازی API call
    // setProducts(sampleProducts);
    // setFilteredProducts(sampleProducts);
    setLoading(false);
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
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
          />
        ))}
        <span className="text-sm text-gray-600 mr-1">({rating})</span>
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col justify-between">
      <div className="relative">
        <Image
          src={`https://blog.launch-team.ir${product.cover.url}`}
          alt={product.title}
          width={150}
          height={200}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
        <LinkWithProgress href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
        </LinkWithProgress>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {renderStars(product.rate)}

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
            <span className={`text-xs px-2 py-1 rounded ${product.available
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
              }`}>
              {product.available ? 'موجود' : 'ناموجود'}
            </span>
          </div>
        </div>

        <button
          className={`w-full mt-4 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${product.available
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          disabled={!product.available}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.available ? 'افزودن به سبد' : 'ناموجود'}
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
            <span className={`text-xs px-2 py-1 rounded ${product.available
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
              }`}>
              {product.available ? 'موجود' : 'ناموجود'}
            </span>

            <button
              className={`py-2 px-4 rounded-lg transition-colors flex items-center gap-2 ${product.available
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              disabled={!product.available}
            >
              <ShoppingCart className="w-4 h-4" />
              {product.available ? 'افزودن به سبد' : 'ناموجود'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // نمایش اسکلتون در حالت loading
  if (loading) {
    return <ProductsPageSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      {/* Header */}
      <div className=" shadow-sm border-b bg-blue-800">
        <div className="container mx-auto px-4 py-6 bg-blue-800">
          <h1 className="text-3xl font-bold text-gray-100 mb-2 pt-16 text-center ">فروشگاه اسپادانا</h1>
          <p className="text-gray-200 text-center pt-2">انرژی پایدار، آینده روشن با اسپادانا</p>
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
              <DropDown
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory} />

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">محدوده قیمت</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="300000000"
                    step="3000000"
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
                      className={`p-2 ${viewMode === 'grid'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list'
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
