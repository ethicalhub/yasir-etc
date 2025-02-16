import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import MyBlog from "@/components/sections/MyBlog";
import MyNotes from "@/components/sections/MyNotes";
import MyProjects from "@/components/sections/MyProjects";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ExperienceSection />
      <SkillSection />
      <MyProjects />
      <MyNotes />
      {/* <TrendingFeed /> */}
      <MyBlog />{" "}
    </main>
  );
}
