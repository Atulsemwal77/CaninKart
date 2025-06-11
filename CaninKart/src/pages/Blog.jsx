import React from "react";
import { Link } from "react-router-dom";
import blogImg from '../assets/dogb1.jpg';
import ContactForm from "../components/contactForm";
import caninkart1 from '../assets/caninkart1.jpg'
import caninkart2 from '../assets/caninkart2.jpg'
import caninkart3 from '../assets/caninkart3.jpg'
import caninkart4 from '../assets/caninkart4.jpg'

const blogs = [
  { id: 1, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: caninkart1 },
  { id: 2, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: caninkart2 },
  { id: 3, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: caninkart3 },
  { id: 4, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: caninkart4 },
  { id: 5, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 6, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 7, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 8, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 9, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 10, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 11, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 12, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 13, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 14, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 15, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 16, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 17, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 18, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 19, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 20, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
];


const Blog = () => {

  return (
    <>
      <div className="bg-[#EDEBE0] py-8 px-10 mt-16 max-w-7xl mx-auto">
        <h2 className="text-center text-xl font-bold mb-6">Our Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div>
              <div key={blog.id} className="bg-white p-3 rounded shadow">
                <span className="inline-block mt-1 text-xs bg-gray-200 px-2 py-1 rounded">{blog.tag}</span>

                <Link to={`/blog/${blog.id}`} state={blog}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-60 h-48 object-cover cursor-pointer mt-2 rounded"
                  />
                </Link>


              </div>
              <div>
                <p className="text-xs text-gray-500 mt-1">{blog.date} · By {blog.author}</p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="text-sm font-semibold mt-2 block hover:text-orange-500 cursor-pointer"
                >
                  {blog.title}
                </Link>
              </div>
            </div>


          ))}
        </div>


      </div>
        <ContactForm />
    </>
  );
};

export default Blog;
