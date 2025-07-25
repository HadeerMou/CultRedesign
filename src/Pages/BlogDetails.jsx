import React from "react";
import { useParams } from "react-router";

function BlogDetails({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-white text-center py-20">Blog not found.</div>;
  }
  return (
    <div className="flex flex-col items-center gap-10 text-white py-30 px-5 md:px-10 bg-black/90 min-h-screen">
      <h1 className="text-4xl md:text-7xl text-center">"{blog.name}"</h1>
      <img className="h-80 md:h-200" src={blog.img} alt="" />
      {blog.contents.map((c) => (
        <div
          key={c.id}
          className="flex flex-col gap-2 p-5 rounded-lg bg-white/80 text-black shadow-white/80 shadow-sm"
        >
          <h2 className="text-2xl">{c.title}</h2>
          <p>{c.desc}</p>
          <h3>{c.listTitle}</h3>
          {c.list.map((l, index) => (
            <li key={index}>{l}</li>
          ))}
          <p>{c.quote}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
