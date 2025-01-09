"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CgFeed } from "react-icons/cg";
import { GrNotes } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

import { ROUTES } from "@/constants/ROUTES";

import { Logo, Button } from "../uiComponent";

const NavLinks = [
  {
    id: 1,
    title: "Home",
    path: ROUTES.HOME,
  },
  {
    id: 2,
    title: "Work",
    path: ROUTES.WORK,
  },
  {
    id: 3,
    title: "Services",
    path: ROUTES.SERVICES,
  },

  {
    id: 4,
    title: "Blogs",
    path: ROUTES.BLOGS,
  },
  {
    id: 5,
    title: "Contact",
    path: ROUTES.CONTACT,
  },
];

const NavActions = [
  {
    id: 1,
    title: "Feed",
    path: ROUTES.HOME,
    variant: "outline",
    icon: <CgFeed />,
  },
  {
    id: 3,
    title: "Notes",
    path: ROUTES.HOME,
    variant: "primary",
    icon: <GrNotes />,
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="">
      <nav className="flex-align-center container max-w-7xl justify-between py-2">
        <Logo />
        <div className="md:flex-align-center hidden gap-10">
          <ul className="md:flex-align-center hidden gap-6 rounded-xl text-base font-normal">
            {NavLinks?.map((link) => (
              <Link href={link.path} key={link.id}>
                {link.title}
              </Link>
            ))}
          </ul>
          <ul className="md:flex-align-center hidden gap-4">
            {NavActions?.map((action) => (
              <Link key={action.id} href={action.path}>
                <Button icon={action.icon} variant={action.variant}>
                  {action.title}
                </Button>
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="flex md:hidden"
        >
          {isNavOpen ? (
            <RxCross2 className="text-3xl text-secondary" />
          ) : (
            <AiOutlineMenuUnfold className="text-3xl text-secondary" />
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-3/4 max-w-sm bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <RxCross2
            className="cursor-pointer text-3xl text-secondary"
            onClick={() => setIsNavOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-4 p-6">
          {NavLinks.map((link) => (
            <Link
              href={link.path}
              key={link.id}
              className="text-lg font-medium text-dark hover:text-primary"
              onClick={() => setIsNavOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="flex flex-col gap-4 p-4">
          {NavActions.map((action) => (
            <Link
              key={action.id}
              href={action.path}
              onClick={() => setIsNavOpen(false)}
            >
              <Button
                className="w-full"
                icon={action.icon}
                variant={action.variant}
              >
                {action.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {isNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary opacity-30"
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}
    </section>
  );
};

export default Navbar;
