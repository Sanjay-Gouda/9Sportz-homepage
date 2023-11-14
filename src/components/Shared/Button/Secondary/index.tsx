import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const SecondaryButton = () => {
  return (
    <>
      <button
        type="button"
        className="py-2.5 px-5 gap-2 text-sm flex  font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
      >
        <IoLogoWhatsapp size="20" />
        Chat
      </button>
    </>
  );
};

export default SecondaryButton;
