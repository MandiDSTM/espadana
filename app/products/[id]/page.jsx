import React from 'react';
import { sampleProducts } from '@/data/products/products';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default async function ProductDetail({ params }) {
  // در App Router باید params را await کنید
  const { id } = await params;
  const productId = Number(id);
  const product = sampleProducts.find(p => p.id === productId);

  if (!product) {
    return <div>محصول پیدا نشد</div>;
  }

  return (
    <div>
      <Navbar scrollValue={true} />
      <div className="p-20">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-blue-600 font-semibold">
          {product.price.toLocaleString()} تومان
        </p>
      </div>
      <Footer />
    </div>
  );
}
