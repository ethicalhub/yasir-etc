import Image from "next/image";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";

import { ImageConstant } from "@/constants/ImageConstants";

import { Button } from "../uiComponent";
import SocialLink from "../uiComponent/SocialLink";

const HeroSection = () => {
  const { height, width, src, alt } = ImageConstant.PROFILE_ICON;
  return (
    <section className="flex min-h-[75vh] flex-col justify-center gap-8 py-24">
      <div className="flex-align-center gap-3">
        <Image
          className="size-16 rounded-full"
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
        <div>
          <h2 className="text-xl">Yasir Ahmad Ansari</h2>
          <p className="font-light">Frontend Developer | Next.js | Web3</p>
        </div>
      </div>
      <div className="py-2">
        <p className="w-full text-justify text-[32px] font-extralight leading-snug lg:w-3/4">
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
          <Button icon={<HiOutlineDownload />} variant="secondary">
            My Resume
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
