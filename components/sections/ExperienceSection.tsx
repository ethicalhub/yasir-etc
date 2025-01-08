import React from "react";
import { PiStudentBold } from "react-icons/pi";

import { workExperience } from "@/constants/StaticData";

import ExperienceCard from "../uiComponent/ExperienceCard";

const ExperienceSection = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24 lg:w-3/4 ">
      <h3 className="flex-align-center gap-4 text-4xl text-primary">
        <PiStudentBold />
        <span>Working Experience</span>
      </h3>
      {workExperience?.map((experience) => {
        return <ExperienceCard key={experience.company} data={experience} />;
      })}
    </section>
  );
};

export default ExperienceSection;
