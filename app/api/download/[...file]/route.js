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
    // دریافت نام فایل از پارامترها
    const fileSegments = params.file;
    const fileName = fileSegments.join('/');
    
    // بررسی امنیت: جلوگیری از دسترسی به فایل‌های خارج از پوشه مجاز
    if (fileName.includes('..') || fileName.includes('\\')) {
      return NextResponse.json(
        { error: 'نام فایل نامعتبر' }, 
        { status: 400 }
      );
    }

    // تشخیص پسوند فایل
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    
    if (!fileExtension || !ALLOWED_FILE_TYPES[fileExtension]) {
      return NextResponse.json(
        { error: 'نوع فایل پشتیبانی نمی‌شود' }, 
        { status: 400 }
      );
    }

    // در محیط serverless، فایل‌ها باید static باشند
    const fileUrl = `/downloads/${fileName}`;
    const baseUrl = request.nextUrl.origin;
    const fullUrl = `${baseUrl}${fileUrl}`;
    
    // Redirect به فایل static
    return NextResponse.redirect(fullUrl);

  } catch (error) {
    console.error('خطا در دانلود فایل:', error);
    return NextResponse.json(
      { error: 'خطای سرور داخلی' }, 
      { status: 500 }
    );
  }
}

// API برای دریافت لیست فایل‌های قابل دانلود
export async function POST(request) {
  try {
    // لیست استاتیک فایل‌ها - در production از دیتابیس بخوانید
    const staticFiles = [
      {
        name: 'sample.pdf',
        size: 1024000,
        extension: 'pdf'
      }
    ];

    return NextResponse.json({ files: staticFiles });

  } catch (error) {
    console.error('خطا در دریافت لیست فایل‌ها:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت لیست فایل‌ها' }, 
      { status: 500 }
    );
  }
}
