import React from "react";
import { PiStudentBold } from "react-icons/pi";

import { workExperience } from "@/constants/StaticData";

import ExperienceCard from "../uiComponent/ExperienceCard";

const ExperienceSection = () => {
  return (
    <section id="work" className="section-layout ">
      <h3 className="section-title">
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
