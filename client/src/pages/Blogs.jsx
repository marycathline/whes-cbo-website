import React, { useState } from "react";
import ImageCarousel from "../components/Carousel";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Restoring Dignity on Godhe Island",
    date: "Friday, 11th July 2025",
    focus: "Elderly Widowers",
    image: "/ngodhe-island.jpg", // ✅  /public/ngodhe-island.jpg
    content: `On Friday, 11th July 2025, Widowers Health and Empowerment Support Services (WHESS), 
led by Director Samwel Okombo, Dr. Franklin Odayoa, and Barrack Nyaranga, visited Godhe Island
in Homa Bay County as part of their mission to restore dignity and hope to elderly widowers.
The visit was filled with heartfelt conversations as the widowers shared their daily struggles 
and quiet strength drawn from fishing, farming, weaving, and community service. The team provided 
emotional support and conducted sensitization on the Social Health Authority (SHA), Pesa ya Wazee (Inua Jamii),
and other key government programs focused on healthcare, nutrition, and financial inclusion for older persons.
This outreach not only empowered the widowers with knowledge and encouragement but reaffirmed that their
lives and stories matter. Special appreciation goes to Ps. Dr. Raymond Omollo, whose compassionate 
leadership continues to shine a light on vulnerable communities. His unwavering support gives 
strength and visibility to a group often forgotten.`
  },
];

// ✅ Import images directly from assets
import img14 from "../assets/media/14.jpg";
import img19 from "../assets/media/19.jpg";
import img17 from "../assets/media/17.jpg";
import img22 from "../assets/media/22.jpg";
import img21 from "../assets/media/21.jpg";
import img24 from "../assets/media/24.jpg";
import img9 from "../assets/media/9.jpg";
import img3 from "../assets/media/3.jpg";

const blogImages = [
  { src: img14 },
  { src: img19 },
  { src: img17 },
  { src: img22 },
  { src: img21 },
  { src: img24 },
  { src: img21 },
  { src: img9 },
  { src: img3 },
];



export default function Blog() {
  // Track which post is expanded
  const [expandedPostId, setExpandedPostId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Carousel Section */}
       <section className="bg-green-600 bg-opacity-90">
       <ImageCarousel images={blogImages} />
     </section>
     
       {/* Hero Section */}
       <section className="w-full bg-green-600 bg-opacity-90 flex flex-col items-center justify-center text-white text-center px-4 py-16">
         <h1 className="text-4xl md:text-5xl font-bold">WHESS Blogs</h1>
         <p className="mt-2 text-lg">Stories that uplift, inform, and inspire</p>
       </section>
    

       {/* Blog Grid */}
      <div className="py-10 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const isExpanded = expandedPostId === post.id;
          const displayText = isExpanded ? post.content : post.content.slice(0, 400) + "...";

          return (
            <div key={post.id} className="bg-white border shadow-lg rounded-xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold text-green-700">{post.title}</h2>
                <p className="text-sm text-gray-600">
                  {post.date} | <span className="italic">{post.focus}</span>
                </p>
                <p className="text-gray-700 text-sm text-justify">
                  {displayText}
                </p>
                <button
                  onClick={() => toggleReadMore(post.id)}
                  className="mt-2 text-sm font-semibold text-white hover:underline"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
