import React from "react";
import MdCards from "../Shared/Cards/mdCards";
import { ACADEMIES } from "@/constants/academies";

type THeading = {
  heading: string;
};

const PopularAcademy = ({ heading }: THeading) => {
  return (
    <div className="container p-5 pb-20 mx-auto">
      <div className="w-[100%] mx-auto gap-8 flex flex-col">
        <h2 className="text-center text-heading text-2xl font-bold">
          {heading}
        </h2>
        <div className="flex flex-wrap justify-center w-full gap-6">
          {ACADEMIES?.map((acr) => (
            <MdCards
              name={acr.name}
              rating={acr.rating}
              country={acr.country}
              src={acr.src}
              key={acr.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularAcademy;
