import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import blog from "../assets/dogb1.png";
import axios from "axios";

const Dashboard = () => {
  // const contactData = Array.from({ length: 8 }, (_, idx) => ({
  //   id: idx + 1,
  //   name: "Aayush Gupta",
  //   contact: "+91 56842 45755",
  //   email: "aayush123@gmail.com",
  //   message: "value for more information about services and pricing...",
  // }));

  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/cnt/contact`);
        setContactData(res.data);
      } catch (error) {
        console.error("Error fetching contact messages:", error);
      }
    };

    fetchContactData();
  }, []);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/blogs`); // Replace with your endpoint
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const data = [
    { label: "Blog", value: blogs.length },
    { label: "Country", value: "08" },
    { label: "State", value: "24" },
    { label: "District", value: "30" },
  ];

  return (
    <>
      <div className="bg-[#D7D9DD] min-h-screen px-4 py-6">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Overview</h2>

          {/* Top Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {item.label}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold">
                    {item.value}
                  </h3>
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
                    <tr key={data._id} className="border-b hover:bg-gray-50">
                      <td className="py-2 pr-4">{index + 1}</td>
                      <td className="py-2 pr-4">{data.name}</td>
                      <td className="py-2 pr-4">{data.contact}</td>
                      <td className="py-2 pr-4">{data.email}</td>
                      <td className="py-2 pr-4 max-w-[150px] truncate">
                        {data.message}
                      </td>
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
              {blogs.length === 0 ? (
                <p className="text-center text-gray-500">No blogs available</p>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    {blogs.slice(0, 5).map((blog, index) => (
                      <div key={blog._id} className="flex gap-4 items-start">
                        {/* Blog Image */}
                        <div className="w-24 h-24 flex-shrink-0 border">
                          <img
                            src={`http://localhost:5000/${blog.image}`} // Adjust if using Cloudinary
                            alt={blog.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Blog Content */}
                        <div className="flex flex-col">
                          {/* Tag */}
                          <span className="text-xs bg-black text-white px-2 py-1 rounded-md w-fit mb-1">
                            {blog.tags?.[0] || "Blog"}
                          </span>

                          {/* Date & Author */}
                          <p className="text-xs text-gray-500 mb-1">
                            {new Date(blog.date).toLocaleDateString()}{" "}
                            &nbsp;•&nbsp; By {blog.author || "Admin"}
                          </p>

                          {/* Title */}
                          <h4 className="text-sm font-semibold leading-snug text-gray-800">
                            {blog.title.length > 60
                              ? blog.title.slice(0, 60) + "..."
                              : blog.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
