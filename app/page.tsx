import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Faq from "./components/Faq";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Faq />
      <Footer />
    </main>
  );
}
