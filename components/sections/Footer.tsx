"use client";

import copy from "copy-to-clipboard";
import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";

import { Button } from "../uiComponent";
import SocialLink from "../uiComponent/SocialLink";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    copy("yasiransari73@gmail.com");
    setIsCopied(true);
  };
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);
  return (
    <section className="section-layout items-center rounded-t-lg bg-dark !pb-0 !pt-12 text-secondary">
      <div className="flex-align-center gap-4">
        <Button
          onClick={handleCopy}
          variant="secondary"
          className={
            isCopied ? "border-2 border-green-700" : "border-secondary"
          }
        >
          <FaCopy /> <span className="ml-2">Copy My Email</span>
        </Button>
      </div>
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
