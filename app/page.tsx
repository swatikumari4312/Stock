import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Chat />
      <About />
      <Feature />
      <Faq />
      <Footer />
    </main>
  );
}
