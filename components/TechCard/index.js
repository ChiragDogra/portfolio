import Image from "next/image";
import React from "react";

const TechCard = ({ imgSource, techName }) => {
  return (
    <div
      className="overflow-hidden  rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0" style={{ height: "90px", width:"90px" }}
    >
      <div
        className=" relative overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-105 mob:h-48 "
        style={{ height: "50px" }}
      >
        <Image src={imgSource} alt={techName} layout="fill" />

        
      </div>
    </div>
  );
};

export default TechCard;
