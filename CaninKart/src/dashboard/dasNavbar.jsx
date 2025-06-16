import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Replace with your actual logo path
import placeholderImg from "../assets/ctf.png"; // Replace or use a placeholder service

const DasNavbar = () => {
  const navItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "Blog", path: "/dashboard/blog" },
    { name: "Country", path: "/dashboard/countrypage" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="max-w-screen-2xl bg-white shadow-md  mx-auto sticky top-0  ">
      <nav className="shadow-md px-6 py-4 flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-10 font-medium text-gray-600">
          {navItems.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Profile or Placeholder */}
        <div>
          <img
            src={placeholderImg}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border"
          />
        </div>
      </nav>
    </header>
  );
};

export default DasNavbar;
