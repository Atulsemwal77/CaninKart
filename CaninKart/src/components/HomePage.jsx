"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero from "../assets/5dog.png";
import pupy from "../assets/pupy.png";
import img1 from "../assets/categoriy.png";
import img2 from "../assets/categoriy.png";
import img3 from "../assets/categoriy.png";
import img4 from "../assets/categoriy.png";
import img5 from "../assets/categoriy.png";
import img6 from "../assets/pngwing.png";
import img96 from "../assets/promo.png";
import img99 from "../assets/doggab.png";
import ContactForm from "./contactForm";
import img11 from "../assets/pngwing.png";
import { Link, useNavigate } from "react-router-dom";
import Productss from "../pages/productdata";

const HomePage = () => {
  const categories = [
    "WALKING ESSENTIALS",
    "BEDDINGS",
    "CAVE HUT",
    "JACKETS",
    "TOYS",
  ];
  const images = [img1, img2, img3, img4, img5];
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "David",
      city: "Pune",
      img: img1,
      text: '"My golden retriever, Max, absolutely loves the chew toys I ordered. The quality is top-notch, and delivery was super fast. You\'ve earned a customer for life!"',
    },
    {
      name: "Aarav",
      city: "Delhi",
      img: img2,
      text: '"The accessories are stylish and functional. I\'ve recommended Caninkart to all my friends with pets!"',
    },
    {
      name: "Sneha",
      city: "Mumbai",
      img: img3,
      text: '"Fantastic service and the cutest products! My puppy is obsessed with the new bed."',
    },
    {
      name: "Sneha",
      city: "Mumbai",
      img: img3,
      text: '"Fantastic service and the cutest products! My puppy is obsessed with the new bed."',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Handle mobile navigation buttons
    const handleMobileNavigation = () => {
      const swiperInstance = document.querySelector(
        ".testimonials-swiper"
      )?.swiper;

      const prevMobile = document.querySelector(".swiper-button-prev-mobile");
      const nextMobile = document.querySelector(".swiper-button-next-mobile");

      if (prevMobile && nextMobile && swiperInstance) {
        prevMobile.addEventListener("click", () => swiperInstance.slidePrev());
        nextMobile.addEventListener("click", () => swiperInstance.slideNext());
      }
    };

    // Delay to ensure swiper is initialized
    setTimeout(handleMobileNavigation, 100);
  }, []);

  return (
    <div className="font-sans text-gray-800 max-w-[1500px] mx-auto">
      {/* Hero Section */}
      <section className="bg-orange-100 md:relative overflow-hidden px-4 py-20 text-center flex flex-col items-center mt-16">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            WELCOME TO CANINKART
          </h1>
          <p className="mb-6 font-semibold text-base sm:text-lg md:text-2xl leading-relaxed">
            One of India's Leading{" "}
            <span className="text-red-950">Manufacturers and Exporters</span> of
            pet
            <br className="hidden sm:block" />
            accessories and beddings
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md text-sm sm:text-base">
            Explore Now
          </button>
        </div>
        <div className="lg:absolute -bottom-4 right-65 md:w-[300px] lg:w-[350px]">
          <img
            src={hero || "/placeholder.svg"}
            alt="Hero Dogs"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 text-center ">
        <h2 className="text-sm font-semibold text-orange-500 mb-4">
          🧡 CATEGORY
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 lg:mx-50 mx-auto md:gap-5">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center my-3">
              <div className="bg-[#ECDDC7] rounded-full px-5 py-5 h-40 w-40">
                <img
                  src={images[index] || "/placeholder.svg"}
                  alt={category}
                  className="h-30 mx-auto object-contain"
                />
              </div>
              <p className="my-2 text-xs font-medium">{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Sellers */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-[#E7EDE6] text-center">
        <h2 className="font-semibold mb-4 text-lg text-orange-500">
          🔥 TOP SELLERS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4 max-w-8xl mx-auto ">
          {Productss.slice(12, 20).map((product, idx) => {
            return (
              <div
                onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product } })
                }
                key={product.id}
                className="bg-white px-2 sm:px-4 md:px-4 lg:px-8 py-4 sm:py-6 md:py-4 shadow-md rounded cursor-pointer hover:ring-2 ring-orange-300 transition duration-200"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="mx-auto h-20 sm:h-28 md:h-32 object-contain"
                />
                <p className=" mt-2 font-medium">{product.name}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Promo Banner */}
      <div className="w-full max-w-[1400px] mx-auto ">
        <img
          src={img96 || "/placeholder.svg"}
          alt="Product"
          className="w-full h-auto object-contain hidden md:flex "
        />

        <img
          src={img99 || "/placeholder.svg"}
          alt="Product"
          className="w-full h-auto object-contain md:hidden py-4"
        />
      </div>

      {/* Products */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-[#E7EDE6] text-center">
        <h2 className="font-semibold mb-4 text-lg text-orange-500">
          🛍️ Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4 max-w-8xl mx-auto">
          {Productss.slice(0, 12).map((product, idx) => {
            return (
              <div
                onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product } })
                }
                key={product.id}
                className="bg-white px-2 sm:px-4 md:px-4 lg:px-8 py-4 sm:py-6 md:py-4 shadow-md rounded cursor-pointer hover:ring-2 ring-orange-300 transition duration-200"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="mx-auto h-20 sm:h-28 md:h-32 object-contain"
                />
                <p className="mt-2 font-medium">{product.name}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <div className="mt- bg-green-200">
        <h2 className="text-sm font-semibold  text-orange-500 text-center  py-4 ">
          🧡 ABOUT
        </h2>
        <section className="py-5 px-4  flex flex-col md:flex-row items-center justify-center md:gap-15">
          <img src={pupy} alt="About Dog" className="h-70 " />
          <div>
            <p className="text-sm max-w-md">
              As a leading manufacturer and exporter of pet accessories,
              Caninkart has gained a reputation for producing top-notch pet
              products that cater to the needs of pets of all shapes and sizes.
              Caninkart has been dedicated to creating innovative and practical
              pet products that enhance the lives of pets and their owners.
            </p>
            <Link to="/about">
              <button className="mt-4 bg-red-500 text-white text-xs px-4 py-2 rounded">
                READ MORE
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Testimonials with Swiper */}
      <section className="bg-gray-100 py-10 text-center overflow-hidden ">
        <h2 className="text-sm font-semibold text-orange-500 mb-6">
          🧡 TESTIMONIALS
        </h2>
        <h3 className="font-black text-xl mb-6">
          Trusted by Pet Lovers Everywhere
        </h3>

        {/* Main container with flex layout for buttons and swiper */}
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 ">
          <div className="relative flex items-center ">
            {/* Left Navigation Button */}
            <button className="swiper-button-prev-custom hidden md:flex items-center justify-center w-12 h-12 bg-white border-2 border-orange-500 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 z-10 mr-4 flex-shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Swiper Container */}
            <div className="flex-1 overflow-hidden h-full ">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="testimonials-swiper !pb-2"
              >
                {testimonials.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-white p-6 sm:p-4 border rounded-lg shadow-md text-left h-50 ">
                      <p className="text-sm mb-4 leading-relaxed h-1/2">
                        {item.text}
                      </p>
                      <div className="">
                        <hr className="border-t mb-3" />
                        <div className="flex items-center mt-2 space-x-3 text-xs font-medium">
                          <img
                            src={item.img || "/placeholder.svg"}
                            alt={item.name}
                            className="w-10 h-10 rounded-full object-contain border ml-2"
                          />
                          <div className="flex flex-col leading-tight">
                            <span className="font-semibold">{item.name}</span>
                            <span className="text-gray-500">{item.city}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right Navigation Button */}
            <button className="swiper-button-next-custom hidden md:flex items-center justify-center w-12 h-12 bg-white border-2 border-orange-500 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 z-10 ml-4 flex-shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Buttons (positioned below swiper) */}
          <div className="flex md:hidden justify-center space-x-4 ">
            <button className="swiper-button-prev-mobile flex items-center justify-center w-10 h-10 bg-white border-2 border-orange-500 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="swiper-button-next-mobile flex items-center justify-center w-10 h-10 bg-white border-2 border-orange-500 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Custom Styling */}
          <style>{`
            .testimonials-swiper .swiper-pagination {
              bottom: 0px !important;
              position: relative;
              margin-top: 20px;
              display: flex;
              justify-content: center;
            }
            
            .testimonials-swiper .swiper-pagination-bullet {
              background-color: #fb923c;
              opacity: 0.5;
              width: 5px;
              height: 5px;
              margin: 0 4px;
              transition: all 0.3s ease;
            }
            
            .testimonials-swiper .swiper-pagination-bullet-active {
              opacity: 1;
              background-color: #ea580c;
              transform: scale(1.2);
            }

            .swiper-button-prev-custom:hover svg,
            .swiper-button-next-custom:hover svg,
            .swiper-button-prev-mobile:hover svg,
            .swiper-button-next-mobile:hover svg {
              color: white;
            }
            
            .swiper-button-prev-custom svg,
            .swiper-button-next-custom svg,
            .swiper-button-prev-mobile svg,
            .swiper-button-next-mobile svg {
              color: #ea580c;
              transition: color 0.3s ease;
            }
          `}</style>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default HomePage;
