import React from "react";

import SocialLink from "../uiComponent/SocialLink";

const Footer = () => {
  return (
    <section className="flex w-full flex-col items-center gap-8 rounded-t-lg bg-dark px-12 pt-8 text-secondary">
      <div>
        <SocialLink />
        <p className="pb-2 pt-4 text-sm font-light">
          &copy; {new Date().getFullYear()} yasir-etc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
