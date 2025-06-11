import React, { useEffect, useState } from "react";
import dog from "../assets/ctf.png";

const ContactForm = () => {
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const bgStyle = isMdOrLarger
    ? {
        backgroundImage: `url(${dog})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
      }
    : { backgroundImage: "none" };

  return (
    <section className="relative py-10 px-4 bg-[#FDFDFD] text-center max-w-7xl mx-auto">
      <h2 className="text-sm font-semibold text-orange-500 mb-2">🧡 CONTACT</h2>
      <h3 className="text-lg font-bold mb-0 md:mb-6">Contact Us</h3>

      <div
        className="relative w-full  md:py-20 px-4 rounded-2xl min-h-[400px] md:min-h-[500px]"
        style={bgStyle}
      >
        {/* Optional semi-transparent overlay for readability */}
        {isMdOrLarger && (
          <div className="absolute inset-0 bg-white opacity-30 rounded-2xl z-0"></div>
        )}

        <div className="relative max-w-7xl mx-auto flex justify-center md:justify-end z-10">
          <form className="bg-[#F0F2F3] p-6 rounded shadow-md w-full max-w-sm text-left space-y-3 text-black">
            <h3 className="font-bold text-lg">Do You Have Any Questions?</h3>

            <input
              className="w-full p-2 rounded bg-white"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full p-2 rounded bg-white"
              type="tel"
              placeholder="Your Contact"
              required
            />
            <input
              className="w-full p-2 rounded bg-white"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="w-full p-2 rounded bg-white"
              placeholder="Your Message"
              rows="3"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
