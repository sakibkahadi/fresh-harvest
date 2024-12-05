import React from "react";
import arrow from "../../../assets/banner/Container.png";
import offer from "../../../assets/banner/offer.png";
import app from "../../../assets/banner/app.png";
import google from "../../../assets/banner/google.png";
const Banner = () => {
  return (
    <div className=" bg-cover bg-[right_-300px_top_0px]  lg:bg-[right_0px_top_0px] pb-20   bg-no-repeat bg-96   bg-[url('assets/banner/Bg.png')]     ">
      <div className="pt-32  h-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto px-5 lg:px-0  ">
        <div className=" md:w-[60%] space-y-5 ">
          <h3 className="bg-slate-300 w-fit px-2 py-1 text-xs md:text-sm font-rubik font-medium text-green-600">
            Welcome to fresh harvest
          </h3>
          <h1 className=" text-[13vw] font-bold font-rubik md:text-[5vw] xl:text-[6rem]    leading-none ">
            Fresh Fruits and Vegetables
          </h1>
          <p className="font-questrial  text-xs md:text-[1rem] md:w-[70%]">
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>
          {/* show now and offer*/}
          <div className="border lg:w-1/2 h-60">
            <button className="btn bg-orange-500 text-white font-rubik !font-normal !px-5">
              Shop Now
            </button>
            <div className="relative">
              <img
                className="hidden lg:block lg:absolute  left-[75px]"
                src={arrow}
                alt=""
              />
              <img
                className="absolute  top-5 left-5 lg:left-36 w-[70%] lg:w-[100%] "
                src={offer}
                alt=""
              />
            </div>
          </div>
          {/* download app */}
          <div className="space-y-5">
            <h5 className="font-rubik">Download App: </h5>
            <div className="flex flex-wrap gap-5">
              <img src={app} alt="" />
              <img src={app} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
