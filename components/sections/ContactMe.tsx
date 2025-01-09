import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";

import ContactForm from "../forms/ContactForm";

const ContactMe = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      {/* Header Section */}
      <div className="items-center justify-between gap-4 md:flex">
        <h3 className="section-title">
          <MdConnectWithoutContact />
          <span>Get In Touch</span>
        </h3>
      </div>

      {/* Form Section */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
