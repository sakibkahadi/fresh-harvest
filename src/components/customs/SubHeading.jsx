import React from "react";

const SubHeading = ({ subheading }) => {
  return (
    <h3 className="bg-slate-300 w-fit px-2 py-1 text-xs md:text-sm font-rubik font-medium text-green-600">
      {subheading}
    </h3>
  );
};

export default SubHeading;
