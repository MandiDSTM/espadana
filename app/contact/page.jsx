import { MapPin, Mail, Phone, Instagram, Linkedin, Send } from "lucide-react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Image from "next/image";

export const revalidate = 60;

export const metadata = {
    title: "تماس با ما - پیشرو فناوران اسپادانا",
    description: "با پیشرو فناوران اسپادانا تماس بگیرید. مشاوره و پشتیبانی ۲۴ ساعته.",
    alternates: {
        canonical: "https://spadanasolar.ir/contact",
    },
    openGraph: {
        title: "تماس با ما - پیشرو فناوران اسپادانا",
        description: "راه‌های تماس با پیشرو فناوران اسپادانا. مشاوره و پشتیبانی ۲۴ ساعته.",
        url: "https://spadanasolar.ir/contact",
        siteName: "پیشرو فناوران اسپادانا",
        type: "website",
        images: [
            {
                url: "https://spadanasolar.ir/images/og.jpg",
                height: 630,
                alt: "تماس با ما - پیشرو فناوران اسپادانا",
            },
        ],
    },
};

// ✅ JSON-LD Schema
function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "تماس با ما - پیشرو فناوران اسپادانا",
        "url": "https://spadanasolar.ir/contact",
        "description": "با پیشرو فناوران اسپادانا تماس بگیرید. مشاوره و پشتیبانی ۲۴ ساعته.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+98-31-33330790",
            "contactType": "customer service",
            "areaServed": "IR",
            "availableLanguage": ["Persian", "English"],
        },
        "publisher": {
            "@type": "Organization",
            "name": "پیشرو فناوران اسپادانا",
            "logo": {
                "@type": "ImageObject",
                "url": "https://spadanasolar.ir/images/spadana-color.svg",
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* ✅ اینجا اسکیما رو اضافه کن */}
            <JsonLd />

            <div className="relative w-full h-32 md:h-48 lg:h-[300px] bg-blue-800">
                <Image alt="About Header" fill data-nimg="fill" src="/images/final-header.svg" className="object-cover" />
            </div>
            <Navbar />
            <section className="mx-auto max-w-5xl px-4 py-16">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center"> ارتباط با ما </h1>
                <p className="mt-3 text-center text-gray-600"> از طریق اطلاعات زیر می‌توانید با ما در تماس باشید. </p>
                {/* بخش اطلاعات تماس */} <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"> {/* آدرس اول */}
                    <div className="rounded-2xl bg-white shadow p-6 text-center">
                        <MapPin className="mx-auto h-8 w-8 text-blue-600" />
                        <h3 className="mt-3 text-lg font-semibold text-gray-900">آدرس دفتر مرکزی</h3>
                        <p className="mt-2 text-gray-600"> سمنان، بلوار قائم بلوار دانشجو مرکز رشد فناوری دانشگاه سمنان کارخانه نوآوری </p> </div> {/* آدرس دوم */} <div className="rounded-2xl bg-white shadow p-6 text-center"> <MapPin className="mx-auto h-8 w-8 text-blue-600" /> <h3 className="mt-3 text-lg font-semibold text-gray-900">آدرس دفتر تهران</h3> <p className="mt-2 text-gray-600"> تهران، امانیه، خیابان ولیعصر، خیابان شهید قریشی (تورج)، پلاک ۱۶، طبقه اول، واحد ۶ </p>
                    </div> {/* تلفن‌ها */}
                    <div className="rounded-2xl bg-white shadow p-6 text-center">
                        <Phone className="mx-auto h-8 w-8 text-blue-600" />
                        <h3 className="mt-3 text-lg font-semibold text-gray-900">تلفن</h3>
                        <div className="mt-2 space-y-1 text-gray-600">
                            <a href="tel:+982112345678" className="block hover:text-blue-600"> 023-33330790 </a>
                            <a href="tel:+985112345678" className="block hover:text-blue-600"> 0935-231-8315 </a>
                        </div> </div> </div> {/* بخش ایمیل */}
                <div className="mt-8 max-w-md mx-auto rounded-2xl bg-white shadow p-6 text-center">
                    <Mail className="mx-auto h-8 w-8 text-blue-600" />
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">ایمیل</h3>
                    <a href="mailto:info@example.com" className="mt-2 block text-blue-600 hover:underline" >
                        info@spadanasolar.ir </a> </div> {/* بخش شبکه‌های اجتماعی */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">ما را دنبال کنید</h3>
                    <div className="mt-4 flex justify-center gap-6">
                        <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                            <Send className="h-5 w-5" /> تلگرام </a>
                        <a href="https://www.instagram.com/spadana.solar" className="flex items-center
                                                      gap-2 text-gray-500 hover:text-blue-600"> <Instagram className="h-5 w-5" />
                            اینستاگرام </a> <a href="#" className="flex items-center gap-2 text-gray-500
                                                       hover:text-blue-600"> <Linkedin className="h-5 w-5" /> لینکدین </a> </div>
                </div>
                <div className="mt-16"> <h3 className="text-xl 
                                                       font-semibold text-gray-900 text-center"> موقعیت ما روی نقشه </h3>
                    <div className="mt-6 overflow-hidden rounded-2xl shadow-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.2810639475189!2d53.380369569591544!3d35.575324798288854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f9a4d001facf2af%3A0x1073e65912877ea8!2sBitsoBit!5e0!3m2!1sen!2s!4v1755683801169!5m2!1sen!2s" width="100%" height="400" allowFullScreen="" loading="lazy" className="w-full" >
                        </iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
