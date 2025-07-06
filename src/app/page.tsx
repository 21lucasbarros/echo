import Header from "@/components/header";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Newsletter />
    </div>
  );
}
