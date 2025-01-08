import Navbar from "@/components/navigation/Navbar";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <main className="container relative max-w-7xl">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ExperienceSection />
    </main>
  );
}
