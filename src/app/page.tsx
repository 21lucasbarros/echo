import Header from "@/components/header";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Section from "../components/section";
import Moodboard from "@/components/moodboard";
import Footer from "@/components/footer";
import Editorial from "@/components/editorial";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Section />
      <Moodboard />
      <Editorial />
      <Newsletter />
      <Footer />
    </div>
  );
}
