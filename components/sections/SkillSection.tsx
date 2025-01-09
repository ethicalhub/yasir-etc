import React from "react";
import { FaLaptopCode } from "react-icons/fa6";

import { programmingSkills, tools } from "@/constants/StaticData";

const SkillSection = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      {/* Skills & Services Bento Grid Section */}

      <h3 className="section-title">
        <FaLaptopCode />
        <span>Skills & Services</span>
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 row-span-2 flex flex-col justify-between gap-10 rounded-xl bg-white p-8 shadow-lg transition hover:shadow-xl">
          <div>
            <h3 className="mb-6 text-xl font-bold text-primary">
              Programming Skills:
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {programmingSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-lightBg px-3 py-2  text-dark hover:bg-primary hover:text-white"
                >
                  <div className="size-2 rounded-full bg-secondary"></div>
                  <span className="">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-bold text-primary">
              Tools & DevOps:
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-lightBg px-3 py-2  text-dark hover:bg-primary hover:text-white"
                >
                  <div className="size-2 rounded-full bg-secondary"></div>
                  <span className="">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Card 1 */}
        <div className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
          <h3 className="mb-2 text-xl font-bold text-primary">
            Custom UI/UX Development
          </h3>
          <ul className="text-sm text-dark">
            <li>
              Design and implement pixel-perfect, custom user interfaces using
              Tailwind CSS or other CSS frameworks.
            </li>
            <li>Ensure a seamless and responsive user experience.</li>
          </ul>
        </div>

        {/* Service Card 2 */}
        <div className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-xl">
          <h3 className="mb-2 text-xl font-bold text-primary">
            Full Stack Web Apps
          </h3>
          <ul className="text-sm text-dark">
            <li>
              Building full-stack solutions with React, Node.js, and modern
              authentication (e.g., JWT, OAuth, OTP)
            </li>
          </ul>
          <p className="text-sm text-dark"></p>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
