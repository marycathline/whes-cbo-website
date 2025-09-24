import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from "../components/Carousel";

// Example (can be imported from another fil
const getInvolvedImages = [

  { src: "/images/carousel/4.jpg"},
  { src: "/images/carousel/13.jpeg" },
  { src: "/images/carousel/32.jpg" },
  { src: "/images/carousel/24.jpeg"},
  { src: "/images/carousel/60.jpg" },
  { src: "/images/carousel/63.jpg" },
  { src: "/images/carousel/51.jpg" }

];


export default function GetInvolved() {
  return (
    <div className="bg-white text-whessBlack">
      
      
       {/* Carousel Section */}
        <section className="bg-green-600 bg-opacity-90">
        <ImageCarousel images={getInvolvedImages} />
      </section>
      
        {/* Hero Section */}
        <section className="w-full bg-green-600 bg-opacity-90 flex flex-col items-center justify-center text-white text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Get Involved</h1>
          <p className="mt-2 text-lg">WHESS thrives on collaboration. Help us empower widowers, uplift the elderly, and restore dignity across Kenya.</p>
        </section>


      

      {/* Support Options */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-green-600 text-center mb-10">How You Can Support</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {supportOptions.map((item, i) => (
            <div key={i} className="bg-gray-50 border-l-4 border-green-600 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 text-justify">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition">
            Reach Out to Partner with WHESS →
          </Link>
        </div>
      </section>
    </div>
  );
}

const supportOptions = [
  {
    title: "Donors & Philanthropists",
    description: "Fund our medical camps, housing projects, or micro-enterprise grants. A donation of KSH 50,000 can sponsor a widower’s home renovation.",
  },
  {
    title: "Local & International NGOs",
    description: "Partner with us on health, elderly care, or mental health programs. Collaborations amplify our reach like HelpAge Kenya did for 100 widowers.",
  },
  {
    title: "Faith-Based Organizations",
    description: "Include widowers in your outreach efforts. We work with churches and mosques to provide spiritual and social support in their later years.",
  },
  {
    title: "Government & County Officials",
    description: "Collaborate on policy for eldercare. WHESS provides policy briefs and supports county-level engagement for sustainable impact.",
  },
  {
    title: "Corporate Sponsors",
    description: "Support CSR-aligned programs wellness workshops, housing, or skills training. Promote dignified aging while building brand goodwill.",
  },
];
