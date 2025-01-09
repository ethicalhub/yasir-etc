import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";

const ContactMe = () => {
  return (
    <div className="flex w-full flex-col gap-8 py-24">
      <div className="items-center justify-between gap-4 md:flex">
        <h3 className="flex-align-center gap-4 text-4xl text-primary">
          <MdConnectWithoutContact />
          <span>Get In Touch</span>
        </h3>
      </div>
    </div>
  );
};

export default ContactMe;
