import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import img11 from "../assets/pngwing.png";
import ContactForm from "../components/contactForm";
import img3 from "../assets/products/1.png";
import img6 from "../assets/products/4.png";

import dog1 from "../assets/pngwing.png";
import img3_2 from "../assets/products/2.png";
import img3_3 from "../assets/products/3.png";

import img6_1 from "../assets/products/5.png";
import img6_2 from "../assets/products/6.png";
import img6_3 from "../assets/products/7.png";

import img10 from '../assets/products/18.png'
import img10_1 from '../assets/products/19.png'
import img10_2 from '../assets/products/20.png'


const Product = () => {
  const navigate = useNavigate();
  const productImages = [img11];


  const Productss = [
    { id: 1, image: productImages[0], name: "H-Harness" },
    { id: 2, image: productImages[0], name: "Easy On Harness" },
    { id: 3, image: img3, thumbnails:[img3_2 , img3_3 , img3], name: "Full Body Harness" },
    { id: 4, image: productImages[0], name: "Chest Harness" },
    { id: 5, image: productImages[0], name: "Cat Harness" },
    { id: 6, image: img6, thumbnails:[img6 , img6_1, img6_2 , img6_3] , name: "Dog Collar" },
    { id: 7, image: productImages[0], name: "Dog Collar Printed" },
    { id: 8, image: productImages[0], name: "Leash" },
    { id: 9, image: productImages[0], name: "Printed Leash" },
    {
      id: 10,
      image: img10,
      thumbnails:[img10 , img10_1 , img10_2],
      name: "Hut-Pumpkin",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#ecf2e7] px-4 sm:px-10 md:px-16 lg:px-10  py-6 sm:py-10 mt-15 max-w-7xl mx-auto">
        <p className="text-center font-semibold text-lg mb-6">Products</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {Productss.map((product) => (
            <Link
              key={product.id}
              to={{
                pathname: `/product/${product.id}`,
              }}
              state={{ product }}
              className="bg-white rounded shadow p-4 lg:py-8 sm:p-3 text-center cursor-pointer hover:ring-2 ring-orange-300 transition duration-200 block"
            >
              <img
                src={product.image}
                alt="product"
                className="mx-auto w-35 h-20 md:w-40 sm:h-24 object-contain"
              />
              <p className="mt-2 text-sm">{product.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Section */}

      <ContactForm />
    </>
  );
};

export default Product;
