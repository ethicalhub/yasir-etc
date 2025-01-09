import Link from "next/link";
import React from "react";
import { GrNotes } from "react-icons/gr";

import { myNotesData } from "@/constants/StaticData";

import { Button } from "../uiComponent";

const MyNotes = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      <div className="title-with-action">
        <h3 className="section-title">
          <GrNotes />
          <span>My Notes</span>
        </h3>
        <Button className="" variant="secondary">
          View Full Notes
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {myNotesData?.map((notes) => {
          return (
            <Link
              className="rounded-lg border border-secondary p-4 shadow-lg hover:shadow-xl"
              href={notes.link}
              key={notes.id}
            >
              <div>
                <span className="text-[45px]">{notes.icon}</span>
                <h4 className="mb-2 mt-6 line-clamp-1 text-xl text-secondary">
                  {notes.title}
                </h4>
                <p className="mb-4 line-clamp-2 text-sm text-dark">
                  {notes.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MyNotes;
