import React from "react";
import productData from "./VerhuisBusjeData";
import { BiGasPump, BiUser } from "react-icons/bi";
import { RiSuitcaseLine } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";
import { FaRegSnowflake } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";

const VerhuisWagenHuren = () => {
  const iconGrid = [
    { icon: <BiGasPump />, label: "Benzine" },
    { icon: <BiUser />, label: "5 zitplaatsen" },
    { icon: <RiSuitcaseLine />, label: "2 koffers" },
    { icon: <TbManualGearbox />, label: "Automatisch" },
    { icon: <FaRegSnowflake />, label: "Airco" },
    { icon: <AiFillCar />, label: "4 deuren" },
    // Add more icons and labels here
  ];

  return (
    <div className="w-full h-screen bg-white mt-10">
      <div className="car-page-title pb-6">
        <h1>
          Ideale auto's{" "}
          <span className="text-[#6e47cf]">voor een weekendje weg</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[1280px] mx-auto">
        {productData.map((product) => (
          <div key={product.id}>
            <div className="car-container p-3 mx-7 border-2 mb-4">
              <h2 className="text-xl font-semibold mb-2 ">{product.name}</h2>
              <p className="mb-2 text-[#3e257c]">Prijs: ${product.price}</p>
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
                    <span className="text-gray-600 ml-1">{item.label}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 py-3 px-4 bg-[white] text-[#6e47cf] border border-[#6e47cf] w-full rounded-md shadow-md hover:bg-[#d6c6fe]">
                Reserveer dit voertuig
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerhuisWagenHuren;
