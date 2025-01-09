import Link from "next/link";
import React from "react";
import { GrNotes } from "react-icons/gr";

import { myNotesData } from "@/constants/StaticData";

import { Button } from "../uiComponent";

const MyNotes = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      <div className="items-center justify-between gap-4 md:flex">
        <h3 className="flex-align-center gap-4 text-4xl text-primary">
          <GrNotes />
          <span>My Notes</span>
        </h3>
        <Button className="" variant="secondary">
          View Full Notes
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {myNotesData?.map((notes) => {
          return (
            <Link
              className="rounded-lg border border-secondary p-4"
              href={notes.link}
              key={notes.id}
            >
              <div>
                <span className="text-[45px]">{notes.icon}</span>
                <h4 className="mb-2 mt-6 text-xl text-secondary">
                  {notes.title}
                </h4>
                <p className="line-clamp-2 text-sm">{notes.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MyNotes;
