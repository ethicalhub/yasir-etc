import Link from "next/link";
import React from "react";
import { CgFeed } from "react-icons/cg";
import { GrNotes } from "react-icons/gr";

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
    title: "Services",
    path: ROUTES.HOME,
  },
  {
    id: 3,
    title: "My Work",
    path: ROUTES.HOME,
  },
  {
    id: 4,
    title: "Blogs",
    path: ROUTES.HOME,
  },
  {
    id: 5,
    title: "Contact",
    path: ROUTES.HOME,
  },
];

const NavActions = [
  {
    id: 1,
    title: "My Feed",
    path: ROUTES.HOME,
    variant: "outline",
    icon: <CgFeed />,
  },
  {
    id: 3,
    title: "My Notes",
    path: ROUTES.HOME,
    variant: "primary",
    icon: <GrNotes />,
  },
];

const Navbar = () => {
  return (
    <nav className="flex-align-center justify-between py-2">
      <Logo />
      <div className="flex-align-center gap-10">
        <ul className="md:flex-align-center  hidden gap-6 rounded-xl text-base font-normal">
          {NavLinks?.map((link) => {
            return (
              <Link href={link.path} key={link.id}>
                {link.title}
              </Link>
            );
          })}
        </ul>
        <ul className="md:flex-align-center hidden gap-4">
          {NavActions?.map((action) => {
            return (
              <Link key={action.id} href={action.path}>
                <Button icon={action.icon} variant={action.variant}>
                  {action.title}
                </Button>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
