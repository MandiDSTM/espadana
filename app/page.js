import Navbar from "./components/layout/Navbar";
import HeaderClient from "./components/layout/Header";
import Servises from "./components/layout/Services";
import ContactForm from "./components/ui/ContactForm";
import Footer from "./components/layout/Footer";
import HeaderServer from "./components/layout/Header.server";


export default function Home() {

  return (
    <div>
      <Navbar />
      <HeaderServer />
      <HeaderClient />
      <Servises />
      <ContactForm />
      <Footer />
    </div>
  );
}
