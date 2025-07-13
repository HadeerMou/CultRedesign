import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Testimonials() {
  const reviewsData = [
    {
      id: 1,
      user: "Layla",
      username: "@LaylaAhmed",
      stars: "",
      review:
        "This was the best choice when I worked with this agency for my web development and designing. It is perfect they did my a design and finishing that I can't complain about!",
      img: "/assets/profiles/profile1.jpg",
    },
    {
      id: 2,
      user: "Dina",
      username: "@DinaMohammed",
      stars: 5,
      review:
        "My website turned out amazing. I am thrilled to got the chance to work with cult.",
      img: "/assets/profiles/profile2.jpg",
    },
    {
      id: 3,
      user: "Ibrahim",
      username: "@IbrahimAli",
      stars: 5,
      review:
        "I appreciate working with cult agency. The web met my requirements after concerned discussion. Sure will be working together in future.",
      img: "/assets/profiles/profile3.jpeg",
    },
    {
      id: 4,
      user: "Mostafa",
      username: "@MostafaMarwan",
      stars: 4,
      review:
        "Cult agency payed attention to all the weaknesses of the implementation and turned out better than what I asked. Thank you.",
      img: "/assets/profiles/profile4.jpeg",
    },
  ];
  return (
    <div id="testimonials" className="px-10">
      <div class="text-xl flex flex-col gap-2 items-center mb-10">
        <span className="tracking-widest">TESTIMONIALS</span>
        <h1 className="bg-white/90 text-black text-5xl py-4 px-5">Clients Says</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-20">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="flex flex-col bg-white text-black/90 p-5 rounded-2xl shadow-xl shadow-yellow-100/30"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-12 h-12 rounded-full"
                src={review.img}
                alt={review.user}
              />
              <div className="flex flex-col text-xs opacity-70">
                <strong>{review.user}</strong>
                <span>{review.username}</span>
              </div>
              <div className="justify-end ms-auto">
                <div className="flex gap-1 text-yellow-400 ">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const full = review.stars >= i + 1;
                    const half = !full && review.stars >= i + 0.5;
                    return full ? (
                      <FaStar key={i} />
                    ) : half ? (
                      <FaStarHalfAlt key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-4 me-5">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
