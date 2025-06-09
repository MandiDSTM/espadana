import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
 return (
   <div className="flex justify-center">
     <Link
       href="https://wa.me/989121234567?text=سلام، من از وب‌سایت شما آمده‌ام"
       target="_blank"
       rel="noopener noreferrer"
       className="bg-green-500 hover:bg-green-600 w-full  text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex  justify-center items-center gap-2"
     >
       <MessageCircle size={20} />
      واتس آپ پشتیبان
     </Link>
   </div>
 );
}
