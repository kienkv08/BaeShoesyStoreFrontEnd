import React from "react";
import "./CardCategory.css";

const CardCategory = ({
  customClass = "w-1/4 2xl:w-[15%] px-3 mb-1 mr-3 hover-card",
  image,
  name,
}) => {
  return (
    <div className={customClass}>
      <img className="rounded w-full h-[10vh]" alt="category" src={image} />
      <span className="flex justify-center">{name}</span>
    </div>
  );
};

export default CardCategory;
