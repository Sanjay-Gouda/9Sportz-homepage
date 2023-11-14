import React from "react";
import { IoIosCall } from "react-icons/io";

type TButton = {
  label: string;
  isMdcard?: boolean;
};

const Button = ({ label, isMdcard }: TButton) => {
  return (
    <>
      <button
        type="button"
        className="focus:outline-none flex  gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        {isMdcard && <IoIosCall size="20" />}
        {label}
      </button>
    </>
  );
};

export default Button;
