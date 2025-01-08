import React from "react";

const ExperienceCard = ({ data }) => {
  return (
    <div className="rounded-xl bg-white px-8 py-6">
      <div className="flex-align-center justify-between gap-4">
        <div className="">
          <p className="text-2xl text-blue">{data.role}</p>
          <p className="text-lg font-semibold text-primary">{data.company}</p>
        </div>

        <div className="text-sm">
          <p>{data.duration}</p>
          <p>{data.location}</p>
        </div>
      </div>

      <div className="mt-4">
        <ul className="list-disc pl-4 text-sm">
          {data.responsibilities?.map((resp, i) => <li key={i}>{resp}</li>)}
        </ul>

        {data.projects && (
          <ul className="list-disc pl-4 text-sm">
            {data.projects.map((project, i) => (
              <li key={i}>
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
