import React from "react";
import { CgFeed } from "react-icons/cg";

import { Button } from "../uiComponent";
// Make it horizontal, floating like testimonial section...
const TrendingFeed = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      <div className="items-center justify-between gap-4 md:flex">
        <h3 className="flex-align-center gap-4 text-4xl text-primary">
          <CgFeed />
          <span>Trending Feed</span>
        </h3>
        <Button className="" variant="secondary">
          View Feed
        </Button>
      </div>
    </section>
  );
};

export default TrendingFeed;
