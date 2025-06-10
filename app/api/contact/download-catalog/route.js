// app/api/download-catalog/route.js
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    // مسیر فایل کاتالوگ در پوشه public
    const filePath = path.join(process.cwd(), 'public', 'catalog.pdf');
    
    // بررسی وجود فایل
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'فایل پیدا نشد' }, 
        { status: 404 }
      );
    }

    // خواندن فایل
    const fileBuffer = fs.readFileSync(filePath);
    
    // تنظیم headers برای دانلود
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="catalog.pdf"');
    headers.set('Content-Length', fileBuffer.length.toString());
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error('خطا در دانلود:', error);
    return NextResponse.json(
      { error: 'خطای سرور' }, 
      { status: 500 }
    );
  }
}

// اختیاری: اگر می‌خواهید از روش POST هم پشتیبانی کنید
export async function POST(request) {
  // همان منطق GET
  return GET(request);
}
