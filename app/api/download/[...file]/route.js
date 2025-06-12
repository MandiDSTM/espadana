// app/api/download/[...file]/route.js
import { NextRequest, NextResponse } from 'next/server';

// نوع‌های مجاز فایل
const ALLOWED_FILE_TYPES = {
  'pdf': 'application/pdf',
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'png': 'image/png',
  'doc': 'application/msword',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'zip': 'application/zip'
};

export async function GET(request, { params }) {
  try {
    // در محیط serverless، فایل‌ها باید از CDN یا storage خارجی سرو شوند
    return NextResponse.json(
      { error: 'این API در حال حاضر در دسترس نیست' }, 
      { status: 503 }
    );

  } catch (error) {
    console.error('خطا در دانلود فایل:', error);
    return NextResponse.json(
      { error: 'خطای سرور داخلی' }, 
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // برای محیط serverless، لیست فایل‌ها باید از دیتابیس یا API خارجی آمده باشد
    return NextResponse.json({ files: [] });

  } catch (error) {
    console.error('خطا در دریافت لیست فایل‌ها:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت لیست فایل‌ها' }, 
      { status: 500 }
    );
  }
}
