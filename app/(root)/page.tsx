import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="container relative max-w-7xl">
      <Navbar />
      <HeroSection />
    </main>
  );
}
