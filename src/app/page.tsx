import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularAcademy from "@/components/PopularAcademy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Navbar />
      <Hero />
      <PopularAcademy heading="Popular Academies in Surat" />
      <PopularAcademy heading="Featured Academies" />
      <ContactUs />
      <Footer />
    </main>
  );
}
