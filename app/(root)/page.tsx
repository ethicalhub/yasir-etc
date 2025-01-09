import Navbar from "@/components/navigation/Navbar";
import ContactMe from "@/components/sections/ContactMe";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MyBlog from "@/components/sections/MyBlog";
import MyNotes from "@/components/sections/MyNotes";
import MyProjects from "@/components/sections/MyProjects";
import SkillSection from "@/components/sections/SkillSection";
import TrendingFeed from "@/components/sections/TrendingFeed";

export default function Home() {
  return (
    <main className="container relative max-w-7xl">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <MyProjects />
      <MyNotes />
      <ExperienceSection />
      <TrendingFeed />
      <MyBlog />
      <ContactMe />
      <Footer />
    </main>
  );
}
