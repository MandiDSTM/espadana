// app/api/download/[...file]/route.js
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
    if (fileName.includes('..') || fileName.includes('/') || fileName.includes('\\')) {
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

    // مسیر فایل
    const filePath = path.join(process.cwd(), 'public', 'downloads', fileName);
    
    // بررسی وجود فایل
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'فایل پیدا نشد' }, 
        { status: 404 }
      );
    }

    // خواندن فایل
    const fileBuffer = fs.readFileSync(filePath);
    const contentType = ALLOWED_FILE_TYPES[fileExtension];
    
    // تنظیم headers
    const headers = new Headers();
    headers.set('Content-Type', contentType);
    headers.set('Content-Disposition', `attachment; filename="${fileName}"`);
    headers.set('Content-Length', fileBuffer.length.toString());
    headers.set('Cache-Control', 'public, max-age=31536000'); // کش برای یک سال
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: headers,
    });

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
    const downloadsPath = path.join(process.cwd(), 'public', 'downloads');
    
    if (!fs.existsSync(downloadsPath)) {
      return NextResponse.json({ files: [] });
    }

    const files = fs.readdirSync(downloadsPath)
      .filter(file => {
        const extension = file.split('.').pop()?.toLowerCase();
        return extension && ALLOWED_FILE_TYPES[extension];
      })
      .map(file => ({
        name: file,
        size: fs.statSync(path.join(downloadsPath, file)).size,
        extension: file.split('.').pop()?.toLowerCase()
      }));

    return NextResponse.json({ files });

  } catch (error) {
    console.error('خطا در دریافت لیست فایل‌ها:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت لیست فایل‌ها' }, 
      { status: 500 }
    );
  }
}
