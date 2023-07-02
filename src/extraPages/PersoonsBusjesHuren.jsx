import React, { useState } from "react";
import productData from "./persoonsBusjeData";
import { BiGasPump, BiUser, BiChevronRight } from "react-icons/bi";
import { TbManualGearbox } from "react-icons/tb";
import { FaRegSnowflake } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const iconGrid = [
  { icon: <BiGasPump />, label: "Benzine", specKey: "engine" },
  { icon: <BiUser />, label: "5 zitplaatsen", specKey: "stoelen" },
  { icon: <GrLocation />, label: "Locatie", specKey: "location" },
  { icon: <TbManualGearbox />, label: "Automatisch", specKey: "gearType" },
  { icon: <FaRegSnowflake />, label: "Airco", specKey: "aircoBool" },
  { icon: <AiFillCar />, label: "4 deuren", specKey: "aantalDeuren" },
];

const BusjesHuren = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleDetails = (productId) => {
    if (expandedProduct === productId) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productId);
    }
  };

  const handleClickOutside = () => {
    setExpandedProduct(null);
  };

  return (
    <div className="w-full h-screen bg-white mt-10">
      <div className="car-page-title pb-6">
        <h1>
          Ideale auto's{" "}
          <span className="text-[#6e47cf] ">voor een weekendje weg</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[1280px] mx-auto">
        {productData.map((product) => (
          <div key={product.id}>
            <div className="car-container p-3 mx-7 border-2 mb-4">
              <h2 className="text-xl font-semibold mb-2 ">{product.name}</h2>
              <p className="mb-2 text-[#3e257c]">
                Prijs{" "}
                <span className="text-xl font-bold text-[#ff1e1e]">
                  €{product.price},-
                </span>
              </p>
              <img
                src={product.image}
                alt={product.name}
                className="w-[350px] h-[175px] object-contain"
              />
              <p className="mb-2 text-gray-400">
                Minimale leeftijd bestuurder 21 jaar
              </p>
              <p className="mb-2 text-gray-400">
                Trekhaak en all-season banden op aanvraag
              </p>
              <div className="grid grid-cols-2 gap-2">
                {iconGrid.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center mr-auto"
                  >
                    <div className="icon text-[#3e257c]">{item.icon}</div>
                    <span className="text-gray-600 ml-1">
                      {product.specs[item.specKey]}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className="mt-4 py-3 px-4 bg-[white] text-[#6e47cf] border border-[#6e47cf] w-full rounded-md shadow-md hover:bg-[#d6c6fe]"
                onClick={() => toggleDetails(product.id)}
              >
                Reserveer dit voertuig
              </button>
              <button
                className="flex text-[#6e47cf] font-light hover:underline cursor-pointer mx-auto text-sm mt-1 pt-"
                onClick={() => toggleDetails(product.id)}
              >
                Bekijk details
                <BiChevronRight size={25} />
              </button>
              {expandedProduct === product.id && (
                <div className="overlay" onClick={handleClickOutside}>
                  <div
                    className="overlay-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="close-button"
                      onClick={() => toggleDetails(product.id)}
                    >
                      X
                    </button>
                    <h2>{product.name}</h2>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[500px] h-[250px] object-contain mb-4"
                    />
                    {iconGrid.map((item, index) => (
                      <p key={index}>
                        {item.label}: {product.specs[item.specKey]}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusjesHuren;
