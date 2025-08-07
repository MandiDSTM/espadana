'use client'

import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Search, Filter, Grid, List } from 'lucide-react';
import Navbar from '@/app/components/layout/Navbar';
import { sampleProducts } from '@/data/products/products'
import Link from 'next/link';
import Image from 'next/image';
import DropDown from "../../components/ui/dropdown/DropDown"
import LinkWithProgress from '../../components/linkWithProgress/LinkWithProgress';
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
              <Skeleton height="20px" width="80%" className="mb-3" />
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

export default function Loading() {
  return <ProductsPageSkeleton />
}
