import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerJourney from "@/components/CareerJourney";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CareerJourney />
        <Skills />
        <Portfolio />
        <Connect />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
