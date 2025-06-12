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

import img10 from "../assets/products/18.png";
import img10_1 from "../assets/products/19.png";
import img10_2 from "../assets/products/20.png";

import Images from "../utils/img";
import {Images2} from '../utils/img'   //Easy on Harness
import { Images4 } from "../utils/img"; //chest Harness

const Product = () => {
  const navigate = useNavigate();
  const productImages = [img11];

  const Productss = [
    {
      id: 1,
      image: Images.hHarness,
      thumbnails: [
        Images.hHarness,
        Images.hHarness2,
        Images.hHarness3,
        Images.hHarness4,
        Images.hHarness5,
        Images.hHarness6,
        Images.hHarness7,
        Images.hHarness8,
        Images.hHarness9,
      ],
      name: "H-Harness",
    },
    { id: 2, image: Images2.EasyOn, thumbnails : [Images2.EasyOn , Images2.EasyOn2, Images2.EasyOn3, Images2.EasyOn4], name: "Easy On Harness" },
    {
      id: 3,
      image: img3,
      thumbnails: [img3_2, img3_3, img3],
      name: "Full Body Harness",
    },
    { id: 4, image: Images4.chest, thumbnails:[Images4.chest1,], name: "Chest Harness" },
    { id: 5, image: productImages[0], name: "Cat Harness" },
    {
      id: 6,
      image: img6,
      thumbnails: [img6, img6_1, img6_2, img6_3],
      name: "Dog Collar",
    },
    { id: 7, image: productImages[0], name: "Dog Collar Printed" },
    { id: 8, image: productImages[0], name: "Leash" },
    { id: 9, image: productImages[0], name: "Printed Leash" },
    {
      id: 10,
      image: img10,
      thumbnails: [img10, img10_1, img10_2],
      name: "Hut-Pumpkin",
    },
    { id: 11, image: productImages[0], name: "Tuxedo" },
    { id: 12, image: productImages[0], name: "Bow Tue" },
    { id: 13, image: productImages[0], name: "Bandana" },
    { id: 14, image: productImages[0], name: "Printed Mat" },
    { id: 15, image: productImages[0], name: "Fur Mat" },
    { id: 16, image: productImages[0], name: "Pattern Lounger" },
    { id: 17, image: productImages[0], name: "Embroidery Lounger" },
    { id: 18, image: productImages[0], name: "Fur Lounger" },
    { id: 19, image: productImages[0], name: "Printed Lounger" },
    { id: 20, image: productImages[0], name: "Mattress" },
    { id: 21, image: productImages[0], name: "Round Bed" },
    { id: 22, image: productImages[0], name: "Hut-Snail" },
    {
      id: 23,
      image: img10,
      thumbnails: [img10, img10_1, img10_2],
      name: "Hut-Pumpkin",
    },
    { id: 24, image: productImages[0], name: "Hut-Caterpillar" },
    { id: 25, image: productImages[0], name: "Cave Bed-Cartoon" },
    { id: 26, image: productImages[0], name: "Cave Bed-X-MAS" },
    { id: 27, image: productImages[0], name: "Cave Bed-Grey" },
    { id: 28, image: productImages[0], name: "Cave Bed-Printed" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#ecf2e7] px-4 sm:px-10 md:px-16 lg:px-10  py-6 sm:py-10 mt-15 max-w-[1500px] mx-auto">
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
