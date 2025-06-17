// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";
// import blogDetailImage from '../assets/dogbd.png';
// import ContactForm from "../components/contactForm";

// const BlogDetails = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const data = location.state;

//   if (!data) {
//     return (
//       <div className="mt-20 text-center text-gray-600">
//         Blog data not available. Please go back and select a blog again.
//         <br />
//         <button
//           onClick={() => navigate(-1)}
//           className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="w-full mx-auto px-10 py-8 bg-[#EDEBE0] mt-16 max-w-5xl">
//         {/* Back Button */}
//         <div
//           onClick={() => navigate(-1)}
//           className="flex items-center text-sm text-gray-600 cursor-pointer mb-4 hover:text-orange-500"
//           role="button"
//           tabIndex={0}
//           onKeyDown={(e) => { if (e.key === 'Enter') navigate(-1); }}
//         >
//           <FaArrowLeft className="mr-2" />
//           BACK
//         </div>
//         {
//           data.id === 1 && (
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit a, odit molestias molestiae harum ipsam numquam maxime recusandae nam minima iure illum rerum modi veniam provident eveniet dolor. Minus.
//             </p>
//           )
//         }
//         {/* Title & Meta */}
//         <h1 className="text-2xl sm:text-3xl font-bold mb-2">
//           Precision and Perfection: Why Caninkart Stands Out as the Best Dog Collar Manufacturer
//         </h1>
//         <p className="text-sm text-gray-500 mb-4">{data.date} · By {data.author}</p>

//         {/* Image */}
//         <img
//           src={blogDetailImage}
//           alt="Dog with toy"
//           className="w-full h-auto rounded-lg mb-6 object-cover"
//         />

//         {/* Content */}
//         <div className="space-y-6 text-sm sm:text-base text-black bg-[#EDEBE0]">
//           <p>
//             When it comes to selecting the perfect dog collar for your furry companion, quality and craftsmanship are key factors to consider...
//           </p>
//           <p>
//             In this article, we will explore the reasons why we stand out as the best dog collar manufacturer in India...
//           </p>

//           {[...Array(5)].map((_, idx) => (
//             <div key={idx}>
//               <h2 className="font-semibold text-base sm:text-lg mb-1">Meticulous attention to detail</h2>
//               <p>
//                 Our commitment to maintaining meticulous attention to detail is evident in every aspect of our dog collar manufacturing process...
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <ContactForm />
//     </>
//   );
// };

// export default BlogDetails;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ContactForm from "../components/contactForm";

const BlogDetails = () => {
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

export default BlogDetails;
