import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({ product }) => {
  const { images, price, productName } = product;
  //   console.log(product);
  function getDirectImageURL(pageURL) {
    const match = pageURL.match(/https:\/\/ibb\.co\.com\/([a-zA-Z0-9]+)/);
    if (match) {
      const imageID = match[1];
      return `https://i.ibb.co/${imageID}/image.jpg`;
    }
    return null;
  }

  const directImageURL = getDirectImageURL(images[0]);

  return (
    <div className="">
      <div className="border rounded-lg space-y-1 p-2">
        <img
          src={directImageURL}
          className="h-52 bg-gray-200 w-full rounded-lg"
          alt="products"
        />
        <h1 className="font-rubik font-bold text-xl text-center">
          {productName}
        </h1>
        <p className="text-center font-rubik text-gray-600">{`$${price}/kg`}</p>
        <button className="btn w-full bg-[#ff6a1a] text-white font-rubik font-light">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
