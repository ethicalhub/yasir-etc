import Image from "next/image";
import React from "react";

const ProjectCard = ({ projectInfo }) => {
  return (
    <section className="rounded-lg border border-secondary  shadow-lg  hover:shadow-xl">
      <div className="transition duration-300">
        {/* Project Image */}
        <Image
          src={projectInfo.image}
          alt={projectInfo.project}
          width={394}
          height={700}
          className="h-60 w-full rounded-t-lg object-cover"
        />

        {/* Project Details */}
        <div className="p-6">
          <h2 className="mb-2  text-2xl font-medium text-secondary">
            {projectInfo.project}
          </h2>
          <p className="mb-4 text-sm text-dark">{projectInfo.description}</p>

          {/* Technologies Used */}
          <h3 className="text-lg font-semibold text-primary">
            Technologies Used
          </h3>
          <div className="mb-10 mt-2 flex flex-wrap gap-2">
            {projectInfo.technologiesUsed.map((tech, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs  text-dark hover:bg-primary hover:text-white"
              >
                <div className="size-2 rounded-full bg-secondary"></div>
                <span className="">{tech}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center justify-between">
            <a
              href={projectInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              GitHub
            </a>
            <a
              href={projectInfo.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
