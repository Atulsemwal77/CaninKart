import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ContactForm from "../components/contactForm";

const BlogDetailsAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="mt-20 text-center text-gray-600">
        Blog data not available. Please go back and select a blog again.
        <br />
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="w-full mx-auto px-6 sm:px-10 py-8 bg-[#EDEBE0] mt-16 max-w-screen-2xl">
        {/* Back Button */}
        <div
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-gray-600 cursor-pointer mb-4 hover:text-orange-500"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') navigate(-1); }}
        >
          <FaArrowLeft className="mr-2" />
          BACK
        </div>

        {/* Title & Meta */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{new Date(data.date).toLocaleDateString()} · By {data.author}</p>

        {/* Image */}
        {data.image && (
          <div className="max-w-4xl mx-auto mb-6">
            <img
              src={`http://localhost:5000/${data.image}`}
              alt={data.title}
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>
        )}

        {/* Blog Content */}
        <div
          className="prose max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>

      <ContactForm />
    </>
  );
};

export default BlogDetailsAdmin;
