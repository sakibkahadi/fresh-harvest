import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const location = useLocation(); // Get the current route

  const isHomeRoute = location.pathname === "/"; // Check if on the "/" route

  return (
    <nav className=" absolute navbar">
      <div className="w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto px-5 lg:px-0 flex items-center justify-between">
        {/* first-part */}
        <div>
          <div className="flex items-center gap-1">
            <img src={logo} alt="" />
            <h1 className="font-bold text-xl tracking-tighter">
              Fresh Harvests
            </h1>
          </div>
        </div>
        {/* middle-part */}
        <div className="hidden lg:block">
          <div className="flex text-sm items-center justify-center gap-[4vw]">
            <NavLink className="navlink font-questrial" to="/">
              Home
            </NavLink>
            <NavLink className="navlink font-questrial" to="/shop">
              Shop
            </NavLink>
            <NavLink className="navlink font-questrial" to="/aboutUs">
              About us
            </NavLink>
            <NavLink className="navlink font-questrial" to="/blog">
              Blog
            </NavLink>
          </div>
        </div>
        {/* last part */}
        <div>
          {/* lg block */}
          <div className="lg:flex hidden  gap-5">
            {/* Favorites */}
            <Link
              className={`flex items-center gap-2 font-medium font-questrial tracking-tight ${
                isHomeRoute ? "text-white" : "text-black"
              }`}
            >
              <FaHeart
                color={`${isHomeRoute ? "white" : "gray"} `}
                className="text-xl mb-1"
              />
              <span>Favorites</span>
            </Link>
            {/* Cart */}
            <div
              className={`flex items-center gap-5 font-questrial relative ${
                isHomeRoute ? "text-white" : "text-black"
              }`}
            >
              <div className="relative">
                <FaShoppingCart
                  color={`${isHomeRoute ? "white" : "gray"}`}
                  className="text-xl"
                />
                <span className="absolute -top-2 -right-3 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
              <span>Cart</span>
            </div>
            {/* Button */}
            <div>
              <Link
                className={`font-questrial py-2 px-5 border-2 bg-transparent font-bold tracking-wide  ${
                  isHomeRoute
                    ? "text-white border-white"
                    : "text-black border-black"
                }`}
              >
                Sign in
              </Link>
            </div>
          </div>
          {/* menu */}
          <div className="lg:hidden mr-5 gap-5 flex">
            <div
              className={`flex items-center gap-5 font-questrial relative ${
                isHomeRoute ? "text-white" : "text-black"
              }`}
            >
              <div className="relative">
                <FaShoppingCart
                  color={`${isHomeRoute ? "white" : "gray"}`}
                  className="text-xl"
                />
                <span className="absolute -top-2 -right-3 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="  !bg-transparent !border-none"
                >
                  {" "}
                  <IoMdMenu
                    color={`${isHomeRoute ? "white" : "gray"}`}
                    className="text-xl"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className={`dropdown-content menu   rounded-box z-[1] ${
                    isHomeRoute ? "bg-white" : "bg-green-100"
                  } w-52 p-2 shadow max-h-fit pt-5 `}
                >
                  <div className="">
                    <div className="flex flex-col text-sm gap-5 items-center justify-center ">
                      <NavLink className="navlink font-questrial" to="/">
                        Home
                      </NavLink>
                      <NavLink className="navlink font-questrial" to="/shop">
                        Shop
                      </NavLink>
                      <NavLink className="navlink font-questrial" to="/aboutUs">
                        About us
                      </NavLink>
                      <NavLink className="navlink font-questrial" to="/blog">
                        Blog
                      </NavLink>
                      <Link
                        className={`flex  items-center gap-2 text-center font-medium font-questrial tracking-tight ${
                          isHomeRoute ? "text-black" : "text-black"
                        }`}
                      >
                        <FaHeart
                          color={`${isHomeRoute ? "gray" : "gray"} `}
                          className="text-xl mb-1"
                        />
                        <span>Favorites</span>
                      </Link>
                      <Link
                        className={`font-questrial py-2 px-5 border-2 bg-transparent font-bold tracking-wide  ${
                          isHomeRoute
                            ? "text-black border-white"
                            : "text-black border-black"
                        }`}
                      >
                        Sign in
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
