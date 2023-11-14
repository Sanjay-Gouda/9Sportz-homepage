import React from "react";
import Logo from "../../assets/Logo/9sportz_logo.png";
import Image from "next/image";
import Button from "../Shared/Button";

const Navbar = () => {
  return (
    <>
      <header
        className="text-gray-600 fixed top-0 body-font w-full z-10 backdrop-blur-5 "
        style={{ background: "#fdfdfd" }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 max-w-[130px]">
            <Image src={Logo} alt="logo" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Categories
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Academies</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Top 100 Academy
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Free Listing
            </a>
          </nav>
          <Button label="Login/Sign Up" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
