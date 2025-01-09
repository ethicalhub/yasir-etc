import React from "react";
import { PiStudentBold } from "react-icons/pi";

import { workExperience } from "@/constants/StaticData";

import ExperienceCard from "../uiComponent/ExperienceCard";

const ExperienceSection = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      <h3 className="flex-align-center gap-4 text-4xl text-primary">
        <PiStudentBold />
        <span>Work Experience</span>
      </h3>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {workExperience?.map((experience, index) => {
          return (
            <ExperienceCard
              key={experience.company}
              data={experience}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
