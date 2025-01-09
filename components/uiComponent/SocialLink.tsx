import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import { SocialLinks } from "@/constants/ROUTES";

const SocialLink = () => {
  return (
    <div className="flex-align-center justify-center gap-4">
      <Link target="_blank" href={SocialLinks.LinkedIn}>
        <FaLinkedin className="size-9 text-secondary" />
      </Link>
      <Link target="_blank" href={SocialLinks.GitHub}>
        <FaGithub className="size-9 text-secondary" />
      </Link>
    </div>
  );
};

export default SocialLink;
