import React from "react";
import { GrNotes } from "react-icons/gr";

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
    </section>
  );
};

export default MyNotes;
