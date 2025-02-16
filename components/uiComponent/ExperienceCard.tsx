import React from "react";

type JobExperience = {
  company?: string;
  location?: string;
  role?: string;
  duration?: string;
  responsibilities?: string[];
  projects?: {
    name: string;
    details: string;
  }[];
};

const ExperienceCard = ({ data }: { data: JobExperience }) => {
  return (
    <div className="rounded-xl border border-secondary p-8 shadow-lg hover:shadow-xl">
      <div className="">
        <h2 className="mb-2 text-2xl font-medium text-secondary">
          {data.role}
        </h2>
        <p className="text-lg font-semibold text-primary">
          {data.company}
          <span className="pl-2 text-sm font-normal text-dark">
            {" "}
            ({data.location})
          </span>
        </p>
      </div>

      <div className="text-sm text-dark">
        <p>{data.duration}</p>
      </div>

      <div className="mt-4">
        <ul className="list-disc pl-4 text-sm">
          {data.responsibilities?.map((resp, i) => (
            <li className="mb-2" key={i}>
              {resp}
            </li>
          ))}
        </ul>

        {data.projects && (
          <ul className="list-disc pl-4 text-sm">
            {data.projects.map((project, i) => (
              <li key={i} className="mb-1">
                <strong>{project.name}</strong>: {project.details}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
