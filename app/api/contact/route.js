// app/api/contact/route.js (Next.js 13+)
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // اینجا می‌توانید اتصال به دیتابیس یا ارسال ایمیل را پیاده‌سازی کنید
    console.log('داده‌های دریافتی فرم:', body);
    
    return NextResponse.json({ success: true, message: 'پیام شما با موفقیت ارسال شد' });
  } catch (error) {
    console.error('خطا در پردازش فرم تماس:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در پردازش فرم' },
      { status: 500 }
    );
  }
}
