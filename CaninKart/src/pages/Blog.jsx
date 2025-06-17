import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ContactForm from "../components/contactForm";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/blogs`);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#EDEBE0] py-8 px-10 mt-16 max-w-screen-2xl mx-auto">
        <h2 className="text-center text-xl font-bold mb-6">Our Blog</h2>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog._id}`} state={blog}>
                <div
                  key={blog._id}
                  className="bg-[#f5f4ef] rounded-xl px-2 py-2 shadow-lg overflow-hidden border border-gray-200"
                >
                  <span className="inline-block border border-black px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {blog.tags[0] || "Blog"}
                  </span>
                  {blog.image && (
                    <img
                      src={`${import.meta.env.VITE_BACKEND}/${blog.image}`}
                      alt={blog.title}
                      className="w-full h-64 object-contain"
                    />
                  )}
                  <div className="px-6 pb-6">

                    <p className="text-sm text-gray-600 mb-1">
                      {new Date(blog.date).toLocaleDateString()} • By {blog.author}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {blog.title.length > 10 ? blog.title.substring(0, 10) + "..." : blog.title}
                    </h3>

                    {/* <div
                    className="text-gray-700 text-sm prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 100) + "..." }}
                  /> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <ContactForm />
    </>
  );
};

export default Blog;
