import clsx from "clsx";
import Image from "next/image";
import React from "react";

import { ImageConstant } from "@/constants/ImageConstants";

const UserFeedCard = ({ size = "large" }) => {
  const { height, width, src, alt } = ImageConstant.PROFILE_ICON;
  return (
    <div className="flex-align-center gap-3">
      <Image
        className={clsx(
          size === "large" ? `size-16 rounded-full` : `size-14 rounded-full`,
        )}
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
      <div>
        <h2 className="text-lg tracking-wide sm:text-xl">Yasir Ahmad Ansari</h2>
        <p
          className={clsx(
            size === "large" ? `font-light` : `text-sm font-light`,
          )}
        >
          Frontend Developer | Next.js | Web3
        </p>
      </div>
    </div>
  );
};

export default UserFeedCard;
