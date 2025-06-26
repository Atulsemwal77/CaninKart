import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import logo from "../assets/logo.png";
import Productss from "../pages/productdata";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  const navLinks = ["home", "product", "about", "blog", "contact"];

  useEffect(() => {
    const results = Productss.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedProducts(results);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setShowSearch(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Caninkart Logo" className="h-14 w-auto" />
          </NavLink>

          {/* Nav Links */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700 mx-auto">
            {navLinks.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "home" ? "/" : `/${item}`}
                  className={({ isActive }) =>
                    `group relative inline-block transition-colors ${
                      isActive
                        ? "text-orange-500 font-semibold"
                        : "text-gray-700 hover:text-orange-500"
                    }`
                  }
                >
                  {item.toUpperCase()}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300"></span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search + Menu */}
          <div className="flex items-center relative space-x-3">
            {/* Desktop Search */}
            <div className="relative w-48 sm:w-72 transition-all md:block hidden">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm pr-2"
              >
                <input
                  type="text"
                  className="flex-1 px-3 py-2 text-sm outline-none"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Cross Button to Clear Search */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-gray-500 hover:text-red-500 mr-2"
                  >
                    <FiX />
                  </button>
                )}

                
              </form>

              {/* Desktop Search Results */}
              {searchQuery && (
                <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded-md shadow-md max-h-60 overflow-auto">
                  {searchedProducts.length > 0 ? (
                    searchedProducts.map((product, idx) => (
                      <Link
                        key={idx}
                        to={`/product/${product.id}`}
                        state={{ product }}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                        onClick={() => setSearchQuery("")}
                      >
                        {product.name}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-500">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Search Toggle Button */}
            <div
              className="p-2 bg-[#D0F3FF] rounded-full md:hidden block"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? (
                <FiX className="text-xl text-gray-600" />
              ) : (
                <GoSearch className="text-xl" />
              )}
            </div>

            {/* Hamburger Icon */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        <div
          className={`md:hidden px-6 pt-2 pb-4 space-y-3 font-medium text-gray-700 transition-all duration-300 ease-in-out ${
            isOpen ? "block animate-slide-down" : "hidden"
          }`}
        >
          {navLinks.map((item) => (
            <div key={item}>
              <NavLink
                to={`/${item}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `group relative inline-block transition-colors ${
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {item.toUpperCase()}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300"></span>
              </NavLink>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Search Box */}
      {showSearch && (
        <div className="fixed top-7 left-25 right-0 px-6 z-50 md:hidden  max-w-[200px]">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center  bg-white border border-gray-600 rounded-lg  w-full ml-6  "
          >
            <input
              type="text"
              className="flex-1 px-3 py-2 text-sm outline-none"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Mobile Search Results */}
          {searchQuery && (
            <div className="mt-2 bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-auto w-full max-w-[300px] mx-auto">
              {searchedProducts.length > 0 ? (
                searchedProducts.map((product, idx) => (
                  <Link
                    key={idx}
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    onClick={() => {
                      setSearchQuery("");
                      setShowSearch(false);
                    }}
                  >
                    {product.name}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No products found
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
