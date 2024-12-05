import { useState } from "react";
import Heading from "../../../components/customs/Heading";
import SubHeading from "../../../components/customs/SubHeading";
import useProduct from "../../../Hooks/useProducts";
import Card from "./Card";

const ProductBox = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [products, loading] = useProduct();
  const [showAll, setShowAll] = useState(false); // State to toggle "See All"

  const tabs = [
    { id: "all", label: "All" },
    { id: "6751516f9c52879c1fde6558", label: "Fruits" },
    { id: "6751569e0e539396658e60a9", label: "Vegetables" },
    { id: "6751584feaeaa5cc21bbe21b", label: "Salad" },
  ];

  // Filtered products based on activeTab
  const filteredProducts =
    activeTab === "all"
      ? products // Show all products
      : products.filter((product) => product.categoryId === activeTab);

  // Limit displayed products to the first 8 if not showing all
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <div className="max-w-5xl mt-10 mx-auto">
      <div className="space-y-2 text-center flex items-center flex-col px-2 md:w-[60%] md:mx-auto">
        <SubHeading subheading="Our Products" />
        <Heading heading="Our Fresh Products" />
        <p className="text-[13px]">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients
        </p>
        {/* Tabs */}
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowAll(false); // Reset "See All" when changing tabs
              }}
              className={`px-4 text-sm font-rubik py-2 font-light rounded-lg ${
                activeTab === tab.id
                  ? "bg-green-700 tracking-wide text-white"
                  : "bg-white text-gray-400 border border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {!loading ? (
          displayedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <div className="flex items-center justify-center">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
      </div>
      {/* Dynamic Button */}
      {filteredProducts.length > 8 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-white text-orange-600 border font-rubik border-orange-500 font-thin rounded-lg text-sm"
          >
            {showAll ? "Show Less" : "See All Products"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductBox;
