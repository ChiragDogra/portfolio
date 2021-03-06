import Image from "next/image";
import React from "react";

const ContactCard = ({title, link, imgSource}) => {
  return (
    <div
      className="overflow-hidden  rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0 mob:h-16 mob:w-16 laptop:h-24 laptop:w-24" 
    >
      <div
        className=" relative overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-105 mob:h-48 "
        style={{ height: "50px" }}
      >
        <Image src={imgSource} alt={title} onClick={()=>window.open(link)} layout="fill" />

        
      </div>
    </div>
  );
};

export default ContactCard;
