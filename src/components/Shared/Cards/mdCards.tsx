import React from "react";
import Button from "../Button";
import { IoLocation } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import SecondaryButton from "../Button/Secondary";

type TItem = {
  id?: number;
  name: string;
  rating: number;
  country: string;
  src: string;
};

const MdCards = ({ name, rating, country, src }: TItem) => {
  return (
    <>
      <a
        href="#"
        className="flex flex-col items-start  bg-white border border-gray-200 rounded-lg shadow md:flex-col gap-2 w-[27rem] hover:bg-gray-100 "
      >
        <div className="flex w-full">
          <img
            className="object-contain w-full rounded-t-lg h-20 md:h-40 md:w-48 md:rounded-none md:rounded-s-lg"
            src={src}
            alt={name}
          />

          <div className="flex flex-col w-full justify-start p-4 leading-normal">
            <p className="mb-2 text-base font-bold tracking-tight text-gray-900 ">
              {name}
            </p>
            <p className="flex items-center">
              <span>
                <FaRegStarHalfStroke />{" "}
              </span>
              {rating}
              <span className="text-sm">rating</span>
            </p>
            <p className="flex items-center">
              <span>
                <IoLocation />
              </span>
              {country}
            </p>
          </div>
        </div>
        <div className="flex p-2 justify-end items-center w-full gap-4">
          <Button isMdcard={true} label="Call Now" />
          <SecondaryButton />
        </div>
      </a>
    </>
  );
};

export default MdCards;
