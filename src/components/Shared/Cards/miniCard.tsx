import React from "react";

type TCard = {
  src: string;
  name: string;
};

const MiniCard = ({ name, src }: TCard) => {
  return (
    <>
      <div className="w-[135px]">
        <a
          href="#"
          className="flex flex-col justify-center items-center gap-4 min-w-[110px] p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div className="w-12 h-12">
            <img
              className="w-full h-full object-contain"
              src={src}
              alt={name}
            />
          </div>

          <p className="m-0">{name}</p>
        </a>
      </div>
    </>
  );
};

export default MiniCard;
