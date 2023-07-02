import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-full mx-auto py-16 px-12 bg-[#3e257c]">
      <div className="grid grid-cols-4 gap-8 text-gray-400 bg-[#3e257c] ml-[40px]">
        <div>
          <h6 className="font-medium text-white text-lg">Persoons Busje</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#d6c6fe] hover:underline cursor-pointer">
              9 Persoons busje huren
            </li>
            <li className="py-2 text-sm hover:text-[#d6c6fe] hover:underline cursor-pointer">
              Persoons busje huren
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-white text-lg">Belangrijke Pagina's</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Bestel Busje Huren
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Provincies Busjes
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Aanbieders Busjes
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Auto huren
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white text-lg">Extra Producten</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Volkswagen Busje Huren
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Vakantie Busje Huren
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Verhuiswagen Huren
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white text-lg">Nieuws & Contact</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Nieuws
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Over{" "}
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Google.com
              </a>
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
