import React from "react";
import { Link } from "react-router";

function Blogs({ blogs }) {
  return (
    <div className="py-30 bg-black/90 text-white">
      <h1 className="text-5xl md:text-9xl mb-10 md:mb-20 text-center">Blogs</h1>
      <div className="grid md:grid-cols-3 gap-2 mx-2">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="flex flex-col p-4 shadow-white/70 shadow-md"
          >
            <img className="h-80 md:h-130" src={blog.img} />
            <div className="flex flex-col mt-5 text-center">
              <h2 className="text-2xl">"{blog.name}"</h2>
              <p className="">{blog.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
