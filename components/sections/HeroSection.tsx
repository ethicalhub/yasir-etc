import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";

import { Button } from "../uiComponent";
import SocialLink from "../uiComponent/SocialLink";
import UserFeedCard from "../uiComponent/userFeedCard";

const HeroSection = () => {
  return (
    <section className=" section-layout min-h-[70vh] justify-center">
      <UserFeedCard />
      <div className="grid py-2 sm:grid-cols-3">
        <p className="w-full text-xl font-extralight leading-snug sm:col-span-2 sm:text-justify sm:text-2xl md:text-3xl">
          A software engineer with <strong>3+ years of experience</strong> in
          frontend development using{" "}
          <strong>Javascript, ReactJS, NextJS</strong> and{" "}
          <strong>Tailwind CSS</strong>, with a working knowledge of backend
          development using <strong>NodeJS, ExpressJS, MongoDB</strong> and{" "}
          <strong>Solidity</strong>. Focused on building responsive,
          feature-rich and user-centric web applications.
        </p>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <SocialLink />
        <Link target="_blank" href="/Yasir_Frontend_Web_Developer_Resume.pdf">
          <Button icon={<HiOutlineDownload />} variant="primary">
            Resume
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
