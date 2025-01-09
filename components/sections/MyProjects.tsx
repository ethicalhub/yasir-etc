import React from "react";
import { MdWorkspacesFilled } from "react-icons/md";

import { projectData } from "@/constants/StaticData";

import { Button } from "../uiComponent";
import ProjectCard from "../uiComponent/ProjectCard";

const MyProjects = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      <div className="title-with-action">
        <h3 className="section-title">
          <MdWorkspacesFilled />
          <span>My Projects</span>
        </h3>
        <Button className="" variant="secondary">
          View All Projects
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        {projectData.map((item, index) => {
          return <ProjectCard projectInfo={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default MyProjects;
