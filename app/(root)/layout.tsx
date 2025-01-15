import React from "react";

import Navbar from "@/components/navigation/Navbar";
import ContactMe from "@/components/sections/ContactMe";
import Footer from "@/components/sections/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className="container max-w-7xl">
        {children}
        <ContactMe />
      </section>
      <Footer />
    </main>
  );
};

export default HomeLayout;
