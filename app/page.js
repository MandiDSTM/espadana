import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Servises from "./components/layout/Services";
import ContactForm from "./components/ui/ContactForm";
import Footer from "./components/layout/Footer";


export default function Home() {

  return (
    <div>
      <Navbar  />
      <Header  />
      <Servises  />
      <div className="w-full  mx-auto py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-center mb-4">
              تماس با ما
            </h3>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ما آماده پاسخگویی به سوالات شما هستیم. با پر کردن فرم زیر،
              کارشناسان ما در کمترین زمان بهترین پیشنهاد را به شما ارائه خواهند
              داد.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
