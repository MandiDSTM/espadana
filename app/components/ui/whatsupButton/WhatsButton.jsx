import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
 return (
   <div className="flex justify-center">
     <Link
       href="https://wa.me/989352318315?text=سلام، من از وب‌سایت شما آمده‌ام"
       target="_blank"
       rel="noopener noreferrer"
       className="bg-green-500 hover:bg-green-600 md:text-xl w-full text-sm text-white font-bold py-3 md:px-6 px-2  rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex  justify-center items-center md:gap-2 gap-1"
     >
       <MessageCircle size={20} />
      واتس آپ پشتیبان
     </Link>
   </div>
 );
}
