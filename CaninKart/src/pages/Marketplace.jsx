import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TfiArrowTopRight } from "react-icons/tfi";
import img12 from "../assets/Indiabanner.png";
import { Link } from "react-router-dom";

const locations = [
  { id: 1, name: "Amritsar" },
  { id: 2, name: "Ludhiana" },
  { id: 3, name: "Jalandhar" },
  { id: 4, name: "Delhi" },
  { id: 5, name: "Mumbai" },
  { id: 6, name: "Chennai" },
  { id: 7, name: "Bengaluru" },
  { id: 8, name: "Kolkata" },
  { id: 9, name: "Hyderabad" },
  { id: 10, name: "Pune" },
  { id: 11, name: "Ahmedabad" },
  { id: 12, name: "Jaipur" },
  { id: 13, name: "Surat" },
  { id: 14, name: "Bhopal" },
  { id: 15, name: "Chandigarh" },
  { id: 16, name: "Nagpur" },
  { id: 17, name: "Indore" },
  { id: 18, name: "Patna" },
  { id: 19, name: "Ranchi" },
  { id: 20, name: "Guwahati" },
  { id: 21, name: "Noida" },
  { id: 22, name: "Gurgaon" },
  { id: 23, name: "Varanasi" },
  { id: 24, name: "Lucknow" },
];

const Marketplace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white max-w-screen-2xl mx-auto mt-18">
      {/* Header */}
      <div className="w-full mx-auto">
        <img
          src={img12}
          alt="India banner"
          className="w-full  h-auto mx-auto"
        />
      </div>

      {/* City Grid */}
      <div className="max-w-7xl md:mx-auto mx-5 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {locations.map((city) => (
          <Link
            key={city.id}
            to={`/marketplacedetails/${city.id}`}
            state={city}
            className="bg-[#F0F2F3] text-black rounded-lg p-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition no-underline"
          >
            <div className="flex flex-col items-start">
              <div className="bg-[#FFFAEF] p-1 rounded">
                <FaMapMarkerAlt className="text-black text-2xl" />
              </div>
              <span className="text-sm font-medium mt-5">{city.name}</span>
            </div>

            <TfiArrowTopRight className="text-blue-400 text-3xl w-10 h-10" />
          </Link>
        ))}
      </div>

      {/* </Link> */}

      {/* Pagination */}
      <div className="flex justify-center space-x-2 pb-10">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            className="w-8 h-8 text-sm font-medium rounded-full hover:bg-white hover:text-black transition-all duration-200"
            style={{
              backgroundColor: num === 1 ? "white" : "transparent",
              color: num === 1 ? "black" : "white",
            }}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
