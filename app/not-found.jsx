// app/not-found.jsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 
    text-center px-4">
      {/* لوگو */}
      <Image
        src="/images/spadana-color.svg" // مسیر لوگو
        alt="لوگو"
        width={100}
        height={100}
        className="mb-6"
      />

      {/* عنوان */}
      <h1 className="text-6xl font-bold text-blue-800">404</h1>
      <p className="mt-4 text-lg text-blue-900">
        صفحه‌ای که دنبال آن هستید پیدا نشد.
      </p>

      {/* دکمه بازگشت */}
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-800 text-white px-6 py-2 
        rounded-lg shadow hover:bg-blue-950 transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
