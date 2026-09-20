import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioPreview from "@/components/PortfolioPreview";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
<Hero />
<About />
<PortfolioPreview />
<Contact />
<Footer />
    </>
  );
}