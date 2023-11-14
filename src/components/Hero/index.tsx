import { CATEGORIES } from "@/constants/popularCategories";
import Image from "next/image";
import React from "react";
import MiniCard from "../Shared/Cards/miniCard";
import MdCards from "../Shared/Cards/mdCards";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font w-full">
        <div className="container p-5 py-28 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-[45px] font-semibold title-font text-heading mb-4">
              Discover the best sports academies in India - Cricket
            </h1>
          </div>
          <div className="w-full flex ">
            <div className="w-1/2 flex flex-wrap gap-4 justify-center items-center">
              {CATEGORIES.map((cat) => (
                <MiniCard src={cat.src} name={cat.name} key={cat.id} />
              ))}
            </div>

            <div className="w-1/2  flex  flex-wrap gap-4 justify-center items-center">
              {CATEGORIES.map((cat) => (
                <MiniCard src={cat.src} name={cat.name} key={cat.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
