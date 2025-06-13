import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-0 md:py-10 text-sm md:mt-10 max-w-8xl mx-auto">
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-10 border">
        {/* Logo & Description */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left border ">
          <img
            src={logo1}
            alt="Caninkart"
            className="w-24 h-auto  mb-3"
          />
          <p className="text-gray-700 leading-relaxed max-w-xs">
            Caninkart is a highly reputable manufacturer and exporter of pet
            accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Quick Links</h4>
          <div className="max-h-18 pr-1 overflow-y-scroll w-fit">
            <ul className="space-y-1 text-gray-600">
              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/breed" className="hover:text-orange-500">
                  Dog Breed
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-orange-500">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="hover:text-orange-500">
                  Market Place
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold mb-2 text-black">Legal</h4>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Cookie Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-semibold mb-2 text-black text-base sm:text-lg">
            Contact Us
          </h4>

          {/* Email */}
          <div className="flex items-start sm:items-center gap-2  mb-3">
            <div className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#FDDF82]">
              <FiMail className="text-sm md:text-lg" />
            </div>
            <span className="hover:text-orange-400 text-sm md:text-base break-all text-gray-700">
              support@caninkart.com
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-start sm:items-center gap-2 ">
            <div className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#FDDF82]">
              <FiPhone className="text-sm md:text-lg" />
            </div>
            <span className="hover:text-orange-400 text-sm md:text-base text-gray-700">
              +91 95029 57250
            </span>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6 text-xl flex-wrap">
        {[
          { icon: <FaFacebookF />, label: "Facebook" },
          { icon: <FaInstagram />, label: "Instagram" },
          { icon: <FaYoutube />, label: "YouTube" },
          { icon: <FaXTwitter />, label: "X (Twitter)" },
        ].map((item, idx) => (
          <div
            key={idx}
            aria-label={item.label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDDF82] 
                 transition-transform duration-300 ease-in-out cursor-pointer 
                 hover:scale-110 hover:rotate-12"
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-6 mb-6 md:mb-0 text-center text-xs text-gray-500">
        © 2025 Caninkart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
