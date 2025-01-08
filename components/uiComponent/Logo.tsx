import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ImageConstant } from "@/constants/ImageConstants";
import { ROUTES } from "@/constants/ROUTES";

const Logo = () => {
  const { src, alt, width, height } = ImageConstant.LOGO;
  return (
    <Link
      href={ROUTES.HOME}
      className="flex flex-col items-center justify-center "
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="size-[45px]"
      />
      <span className="text-sm font-bold text-primary">yasir-etc</span>
    </Link>
  );
};

export default Logo;
