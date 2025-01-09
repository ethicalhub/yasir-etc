import Image from "next/image";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";

import { ImageConstant } from "@/constants/ImageConstants";

import { Button } from "../uiComponent";
import SocialLink from "../uiComponent/SocialLink";

const HeroSection = () => {
  const { height, width, src, alt } = ImageConstant.PROFILE_ICON;
  return (
    <section className="flex min-h-[70vh] w-full flex-col justify-center gap-8 py-24 ">
      <div className="flex-align-center gap-3">
        <Image
          className="size-16 rounded-full"
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
        <div>
          <h2 className="text-xl tracking-wide">Yasir Ahmad Ansari</h2>
          <p className="font-light">Frontend Developer | Next.js | Web3</p>
        </div>
      </div>
      <div className="grid grid-cols-3 py-2">
        <p className="col-span-2 w-full text-justify text-3xl font-extralight leading-snug">
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
            My Resume
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
