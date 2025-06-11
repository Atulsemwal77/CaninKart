import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContactForm from "../components/contactForm";

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  // Get thumbnails from product data or use fallback
  const thumbnails =
    product?.thumbnails ||
    (product?.image ? [product.image] : ["/placeholder.jpg"]);

  const [mainImage, setMainImage] = useState(product?.image || thumbnails[0]);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product?.image) {
      setMainImage(product.image);
      setImageError(false); // Reset error state when product changes
    }
  }, [product]);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleThumbnailClick = (img) => {
    setMainImage(img);
    setImageError(false); // Reset error state for new image
  };

  // Early return for no product
  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-xl">Product not found.</p>
        <button
          onClick={() => navigate("/product")}
          className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

  // Thumbnail component to reduce duplication
  const Thumbnail = ({ img, index, className = "" }) => (
    <img
      key={index}
      src={img}
      onClick={() => handleThumbnailClick(img)}
      onError={handleImageError}
      className={`object-contain rounded-md cursor-pointer bg-white p-1 transition-all ${
        mainImage === img
          ? "ring-2 ring-orange-400"
          : "hover:ring-2 hover:ring-gray-400"
      } ${className}`}
      alt={`${product.name} thumbnail ${index + 1}`}
    />
  );

  return (
    <>
      <div className="bg-[#F1FFEF] flex flex-col p-4 sm:p-6 md:px-32 relative top-18 max-w-7xl mx-auto">
        <button
          className="text-sm font-bold text-gray-600 hover:text-orange-500 w-fit transition-colors mb-4"
          onClick={() => navigate(-1)}
        >
          &larr; BACK
        </button>

        {/* Main Product Display */}
        <div className="w-full max-w-6xl rounded-lg flex flex-col md:flex-row gap-6 my-8">
          {/* Desktop Sidebar Thumbnails */}
          <div className="hidden md:flex md:flex-col gap-4 h-120 sticky top-24">
            {thumbnails.map((img, index) => (
              <Thumbnail
                key={`desktop-${index}`}
                img={img}
                index={index}
                className="w-20 h-20 sm:w-32 sm:h-28"
              />
            ))}
          </div>

          {/* Main Image Section */}
          <div className="flex flex-col md:bg-white md:justify-center flex-1 gap-4 h-120 lg:sticky top-24">
            <div className="flex justify-center bg-white p-4 rounded relative">
              {imageError ? (
                <div className="w-full max-w-xs sm:max-w-sm h-48 md:h-auto flex items-center justify-center bg-gray-100 rounded-md">
                  <span className="text-gray-500">Image not available</span>
                </div>
              ) : (
                <img
                  src={mainImage}
                  alt={`${product.name} - Main Product`}
                  onError={handleImageError}
                  className="w-full max-w-xs sm:max-w-sm md:h-auto h-48 object-contain rounded-md"
                />
              )}
            </div>

            {/* Mobile Thumbnails */}
            <div className="flex md:hidden gap-3 overflow-x-auto py-2 px-3">
              {thumbnails.map((img, index) => (
                <Thumbnail
                  key={`mobile-${index}`}
                  img={img}
                  index={index}
                  className="w-20 h-20 sm:w-32 sm:h-28 flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}

          {product.id === 3 && (
            <>
              <div className="space-y-4 text-left flex-1">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 w-full">
                  {product.name}
                </h1>

                <p className="text-gray-700 font-semibold text-lg">
                  Full Body Dog Harness – Secure, Comfortable & Supportive
                </p>

                <p className="text-gray-700">
                  Give your dog the ultimate comfort with our Full Body Dog
                  Harness. Designed for active pups, senior dogs, and pets in
                  recovery, this harness offers full-body support with evenly
                  distributed pressure to reduce strain on your dog’s neck and
                  spine. It features adjustable straps for a custom fit, soft
                  padding for all-day comfort, and a back-handle to assist with
                  lifting or guiding your dog safely. Whether you're hiking,
                  training, or helping your pet with mobility, this harness
                  ensures stability, comfort, and confidence in every step.
                </p>

                <p className="text-gray-700">
                  Caninkart is a prominent Indian manufacturer and exporter of
                  pet accessories, including full-body harnesses for dogs. We
                  are known for our commitment to quality, comfort, and
                  durability in our products. Caninkart’s harnesses are designed
                  to provide a secure and comfortable fit for dogs of various
                  sizes, with features such as adjustable straps and breathable
                  materials.
                </p>

                <div className="p-4 mt-6">
                  <h2 className="text-lg font-semibold mb-3 text-gray-800">
                    🐾 Benefits of Using a Full Body Harness:
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Even Pressure Distribution</strong> – Prevents
                      choking and reduces strain on the neck.
                    </li>
                    <li>
                      <strong>Secure Fit</strong> – Adjustable straps ensure a
                      snug fit for dogs of all sizes.
                    </li>
                    <li>
                      <strong>Better Control</strong> – Especially useful for
                      energetic or untrained dogs.
                    </li>
                    <li>
                      <strong>Comfortable for Long Use</strong> – Soft and
                      breathable webbed straps increase comfort.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {product.id === 4 && <div>...harness content...</div>}

          {product.id === 6 && (
            <div className="space-y-4 text-left flex-1">
              <h2 className="text-2xl font-semibold mb-4">Dog Collars</h2>
              <p className="mb-4">
                <strong>Caninkart</strong> is a prominent Indian manufacturer
                and exporter of pet accessories, including dog collars. We offer
                a diverse range of products designed to meet the needs of pets
                and their owners. Our dog collars are known for quality and
                affordability, featuring durable materials like{" "}
                <strong>Polyester</strong> and adjustable straps for comfort.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Top Reasons Why a Dog Collar Is Important
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Identification & Safety</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>
                      Collars can hold ID tags with your dog’s name, your phone
                      number, and address.
                    </li>
                    <li>
                      If your dog gets lost, a collar increases the chances of a
                      safe return.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Control & Training</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>
                      Collars allow easy attachment of a leash for walks and
                      training.
                    </li>
                    <li>
                      They help manage pulling, jumping, or other behavior in
                      public.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Legal Requirement</strong>
                  <p className="pl-6 mt-1">
                    In some areas, it’s mandatory for dogs to wear
                    identification while outside.
                  </p>
                </li>
                <li>
                  <strong>Fashion & Personality</strong>
                  <p className="pl-6 mt-1">
                    Collars come in various styles and materials, reflecting
                    your dog’s personality.
                  </p>
                </li>
              </ol>

              <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-600 rounded">
                <strong>✅ Bonus Tip:</strong> Always ensure the collar fits
                comfortably—not too tight or too loose. You should be able to
                slide two fingers under it easily.
              </div>
            </div>
          )}
          {product.id === 10 && (
            <div className="space-y-4 text-left flex-1">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 w-full">
                {product.name}
              </h1>

              <p className="text-gray-700 font-semibold text-lg">
                Pumpkin Shaped Cat Hut – Cozy, Cute, and Perfect for Feline
                Comfort
              </p>

              <p className="text-gray-700">
                Give your furry friend the ultimate cozy hideaway with our
                Pumpkin Shaped Cat Hut – a charming and functional pet bed that
                combines whimsical design with unmatched comfort. Thoughtfully
                designed for cats and small dogs, this hut offers a safe and
                stylish space where your pet can relax, nap, or simply enjoy
                some quiet time.
              </p>

              <p className="text-gray-700">
                Crafted in an adorable pumpkin shape, this cat hut adds a
                playful and decorative touch to any room, blending easily into
                modern, minimalist, or seasonal décor. The round and spacious
                design mimics a natural den-like environment, offering your pet
                a sense of security and warmth. Whether your cat is curling up
                for a nap or seeking shelter from a noisy household, this hut
                provides the perfect refuge.
              </p>

              <div>
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  • Soft, Durable & Pet-Friendly Materials
                </h2>
                <p className="text-gray-700">
                  Made with premium fabric, the Pumpkin Cat Hut is both soft to
                  the touch and gentle on your pet’s skin. The interior is
                  padded with cozy polyfill that supports restful sleep and
                  maintains its shape after extended use. The outer shell is
                  sturdy yet flexible, allowing the hut to retain its unique
                  shape while still being lightweight and easy to move around
                  your home.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  • Comfort Meets Convenience
                </h2>
                <p className="text-gray-700">
                  This cat hut is designed with your convenience in mind. The
                  removable inner cushion makes cleaning hassle-free, and the
                  entire hut can be spot cleaned with ease. Its lightweight
                  build ensures portability, so your pet can enjoy their cozy
                  corner in the living room, bedroom, or even while traveling.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  • Ideal for Cats and Puppies
                </h2>
                <p className="text-gray-700">
                  Available in multiple colors and suitable for kittens, adult
                  cats, and puppies, this pumpkin hut is a versatile choice for
                  pet owners who want something functional yet visually
                  appealing.
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Why Pet Parents Love It:
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Whimsical pumpkin design</li>
                  <li>Provides a secure and private retreat for pets</li>
                  <li>Cushioned and warm for all-season comfort</li>
                  <li>Easy to clean and move</li>
                  <li>Perfect gift for pet lovers or festive pet setups</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-orange-100 border-l-4 border-orange-500 rounded">
                <strong>Treat your pet</strong> to the luxury of comfort and
                cuteness with the Pumpkin Shaped Cat Hut – where every nap feels
                like a warm hug inside a pumpkin.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-18">
        <ContactForm />
      </div>
    </>
  );
};

export default ProductDetail;
