import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import blog from "../assets/dogb1.png";
import DasNavbar from "./dasNavbar";


const Dashboard = () => {
  const contactData = Array.from({ length: 8 }, (_, idx) => ({
    id: idx + 1,
    name: "Aayush Gupta",
    contact: "+91 56842 45755",
    email: "aayush123@gmail.com",
    message: "value for more information about services and pricing...",
  }));

  return (
    <>
    <DasNavbar/>
    <div className="bg-[#D7D9DD] min-h-screen px-4 py-6">
      <div className="max-w-screen-xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Overview</h2>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Blog", value: "89" },
            { label: "Country", value: "08" },
            { label: "State", value: "24" },
            { label: "District", value: "132" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="text-gray-500 text-sm sm:text-base">{item.label}</p>
                <h3 className="text-3xl sm:text-4xl font-bold">{item.value}</h3>
              </div>
              <FiArrowUpRight className="text-gray-300 text-2xl sm:text-3xl" />
            </div>
          ))}
        </div>

        {/* Contact and Blog Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Contact Table */}
          <div className="bg-white rounded-xl p-4 shadow-sm overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600 font-medium">Contact</h3>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                View Details
              </a>
            </div>
            <table className="min-w-full text-sm text-left">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="py-2 pr-4">S no</th>
                  <th className="py-2 pr-4">Name</th>
                  <th className="py-2 pr-4">Contact</th>
                  <th className="py-2 pr-4">Email</th>
                  <th className="py-2 pr-4">Message</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((data, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 pr-4">{index + 1}</td>
                    <td className="py-2 pr-4">{data.name}</td>
                    <td className="py-2 pr-4">{data.contact}</td>
                    <td className="py-2 pr-4">{data.email}</td>
                    <td className="py-2 pr-4 max-w-[150px] truncate">{data.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Blog Section */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600 font-medium">My Blog</h3>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                View Details
              </a>
            </div>
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4"
              >
                <img
                  src={blog}
                  alt="product"
                  className="w-full sm:w-28 h-28 object-cover rounded-md"
                />
                <div className="flex-1">
                  <span className="bg-black text-white text-xs px-2 py-1 rounded">
                    Collar
                  </span>
                  <p className="text-gray-500 text-sm mt-1">
                    May 14, 2025 • By Tatjana
                  </p>
                  <p className="font-semibold text-sm mt-1">
                    Explore Caninkart's Range of High-Quality Pet Products for
                    Your Beloved Pets
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;  