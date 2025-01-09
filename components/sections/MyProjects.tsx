import React from "react";
import { MdWorkspacesFilled } from "react-icons/md";

import { Button } from "../uiComponent";

const MyProjects = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      <div className="items-center justify-between gap-4 md:flex">
        <h3 className="flex-align-center gap-4 text-4xl text-primary">
          <MdWorkspacesFilled />
          <span>My Projects</span>
        </h3>
        <Button className="" variant="secondary">
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default MyProjects;
