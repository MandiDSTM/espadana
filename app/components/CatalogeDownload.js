'use client'

import React, { useState } from 'react';

const CatalogDownload = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    // روش 1: دانلود از طریق API Route
    const handleApiDownload = async () => {
        setIsDownloading(true);

        try {
            const response = await fetch('/api/download-catalog');

            if (!response.ok) {
                throw new Error('خطا در دانلود فایل');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'catalog.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

        } catch (error) {
            console.error('خطا:', error);
            alert('خطا در دانلود فایل');
        } finally {
            setIsDownloading(false);
        }
    };

    // روش 2: دانلود مستقیم فایل استاتیک
    const handleDirectDownload = () => {
        const link = document.createElement('a');
        link.href = '/catalog.pdf'; // فایل باید در public/catalog.pdf باشد
        link.download = 'catalog.pdf';
        link.click();
    };

    return (
        <div onClick={handleDirectDownload}
            className="md:px-6 px-2 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm">
            دانلود کاتالوگ
        </div>

    );
};

export default CatalogDownload;
