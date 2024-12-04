import React from "react";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Fresh Harvests || Error</title>
      </Helmet>
      <div className="border  w-screen h-screen flex items-center justify-center ">
        <div className=" flex  flex-col items-center">
          <h1 className="text-[10vw]">Sorry</h1>
          <p className="text-[3vw]">This page is not found</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
