// src/pages/About.jsx
import React, { useState } from "react";
import samwel from "../assets/samwel.jpeg";
import barrack from "../assets/barrack.jpeg";
<<<<<<< HEAD
import frank from "../assets/frank.png";
=======
import frank from "../assets/frank.jpeg";
>>>>>>> f9b6c8ae3fa8909e84750c322093353bbd2b02a6
import psomollo from "../assets/ps-omollo.jpeg";
import ImageCarousel from "../components/Carousel";

const aboutImages = [
  
<<<<<<< HEAD
  { src: "/images/carousel/11.jpeg"},
  { src: "/images/carousel/12.jpeg" },
  { src: "/images/carousel/13.jpeg"},
  { src: "/images/carousel/14.jpeg"},
  { src: "/images/carousel/15.jpeg"},
  { src: "/images/carousel/16.jpeg"},
  { src: "/images/carousel/17.jpeg" },
  { src: "/images/carousel/18.jpeg" },
  { src: "/images/carousel/19.jpeg" },
  { src: "/images/carousel/20.jpeg" },
=======
  { src: "/images/carousel/11.jpeg", caption: "Support Services" },
  { src: "/images/carousel/12.jpeg", caption: "Empowering Widowers" },
  { src: "/images/carousel/13.jpeg", caption: "Support Services" },
  { src: "/images/carousel/14.jpeg", caption: "Empowerment" },
  { src: "/images/carousel/15.jpeg", caption: "Strengthening Communities" },
  { src: "/images/carousel/16.jpeg", caption: "Advocacy and Awareness" },
  { src: "/images/carousel/17.jpeg", caption: "Empowerment Through Education" },
  { src: "/images/carousel/18.jpeg", caption: "Empowerment Through Education" },
  { src: "/images/carousel/19.jpeg", caption: "Strengthening Communities" },
  { src: "/images/carousel/20.jpeg", caption: "Together We Rise" },
>>>>>>> f9b6c8ae3fa8909e84750c322093353bbd2b02a6
];

export default function About() {
  return (

<div className="bg-white text-black min-h-screen">
  {/* Carousel Section */}
  <section className="bg-green-600 bg-opacity-90">
  <ImageCarousel images={aboutImages} />
</section>

  {/* Hero Section */}
  <section className="w-full bg-green-600 bg-opacity-90 flex flex-col items-center justify-center text-white text-center px-4 py-16">
    <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
    <p className="mt-2 text-lg">Health. | Empowerment. | & Support Services.</p>
  </section>

  {/* Mission & Vision */}
  <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
    <InfoCard
      title="Our Mission"
      iconPath="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      description="To empower elderly widowers in Kenya by addressing their health, economic, emotional, and social needs through community-driven, sustainable programs, ensuring they live with dignity, purpose, and inclusion."
    />
    <InfoCard
      title="Our Vision"
      iconPath="M12 6v6l4 2M12 4a8 8 0 100 16 8 8 0 000-16z"
      description="A society where every elderly widower is valued, supported, and empowered to thrive, contributing their wisdom and experience to their communities while living with dignity and wellbeing."
    />
  </section>

  {/* About WHESS */}
  <Section title="About WHESS">
    <Paragraphs
      texts={[
        "Widowers Health Empowerment and Support Services (WHESS) is a compassionate, community-driven organization dedicated to addressing the unique challenges faced by elderly widowers in Kenya. Established in 2023 by founders Samwel Okombo and Barrack Ochieng Nyaranga, with PS Dr. Omollo Raymond as our esteemed patron, WHESS was born out of a shared vision to tackle the silent suffering of widowers a demographic often overlooked in national and local development programs. Rooted in Christian values of compassion, service, and dignity, WHESS seeks to empower elderly widowers through holistic support in health, economic stability, emotional wellbeing, and social inclusion.",
        "Our work is inspired by the understanding that widowers, particularly in rural Kenya, face profound challenges such as grief, isolation, poverty, and declining health. These men, who carry invaluable cultural wisdom and historical knowledge, deserve to live with dignity and purpose in their later years. WHESS operates through community-based, research-driven models, partnering with local leaders, faith-based organizations, and stakeholders to deliver sustainable solutions. From mobile medical camps to skills training and advocacy, we are committed to ensuring no widower is left behind.",
      ]}
    />
  </Section>

  {/* Patron Section with Read More */}
  <ProfileWithReadMore
    image={psomollo}
    title="Our Patron – PS Dr. Omollo Raymond"
    shortText="PS Dr. Omollo Raymond is a revered figure in Kenyan community service, known for his lifelong dedication to uplifting the marginalized. A devout Christian from humble beginnings, he has built a legacy of compassion through initiatives such as constructing houses for widows, supporting orphanages, supporting youths with sports kits and training merchandise, he also helps youths overcome alcohol, drug addictions and championing grassroots empowerment programs. His patronage of WHESS reflects his deep commitment to addressing the needs of elderly widowers, a group he believes is often forgotten in society’s welfare efforts."
    fullText="PS Dr. Omollo’s philosophy, grounded in the teachings of Jesus Christ, emphasizes servant leadership and care for the least advantaged. His involvement provides WHESS with strategic guidance, moral inspiration, and credibility in mobilizing communities. For example, his past projects, such as building over 20 homes for widows in Western Kenya, serve as a model for WHESS’s housing initiatives. His vision aligns with our mission to restore dignity and hope, making him an invaluable pillar of our organization."
  />

  {/* Founding Team */}
  <section className="bg-gray-100 py-10 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center">Our Founding Team</h2>
      <p className="mb-2 text-center max-w-3xl mx-auto break-words leading-relaxed">
        The WHESS founding team combines expertise, passion, and a shared history to drive our mission forward. United by
        their high school friendship with PS Omollo Raymond, our founders bring diverse skills and a unified commitment to serving elderly widowers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <TeamCard
          name="Sam Okombo"
          image={samwel}
          title="Businessman & Governance Expert"
          text="A Nairobi-based businessman and governance expert, Sam has over 15 years of experience in community leadership and project coordination. His expertise in mobilizing resources and engaging stakeholders ensures WHESS’s programs are impactful and sustainable. Sam’s passion for social justice drives his dedication to empowering widowers, and he often leads community dialogues to identify their needs. For instance, his work in Nairobi’s informal settlements has informed WHESS’s approach to urban widower outreach."
        />
        <TeamCard
          name="Barrack Ochieng Nyaranga"
          image={barrack}
          title="Insurance & Risk Expert"
          text="Based in Kisumu, Barrack is an insurance and risk management professional with 11 years of experience in procurement and supplies management. His strategic insight ensures WHESS’s programs are cost-effective and scalable. Barrack’s background in community development, including his work with youth empowerment groups in Kisumu, has shaped WHESS’s economic empowerment initiatives, such as micro-enterprise grants. His ability to forge partnerships with local businesses strengthens our resource base."
        />
        <TeamCard
          name="Dr. Frank Odayo"
          image={frank}
          title="Logistics Coordinator"
          text="As Logistics Coordinator, Dr. Odayo brings operational excellence to WHESS. With a background in logistics and operations management, he ensures seamless planning and execution of programs, from mobile medical camps in rural Siaya to housing projects in Kisumu. His meticulous approach has enabled WHESS to reach over 500 widowers in its first year, coordinating transport, supplies, and volunteer networks. Dr. Odayo’s community roots in Western Kenya make him a trusted figure in grassroots mobilization."
        />
      </div>
    </div>
  </section>
</div>
  );
}

function InfoCard({ title, iconPath, description }) {
  return (
    <div className="flex items-start bg-white shadow rounded-lg p-6">
      <div className="text-green-600 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-green-600 mb-2">{title}</h2>
        <p className="text-gray-700 break-words text-left md:text-justify leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Paragraphs({ texts }) {
  return (
    <div className="space-y-4 text-left md:text-justify break-words leading-relaxed text-gray-700">
      {texts.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  );
}

function ProfileWithReadMore({ image, title, shortText, fullText }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center">
      <img src={image} alt={title} className="w-full md:w-1/3 rounded shadow" />
      <div>
        <h2 className="text-3xl font-semibold text-green-600 mb-4">{title}</h2>
        <p className="mb-2 text-gray-700 text-left md:text-justify break-words leading-relaxed">{shortText}</p>
        {expanded && <p className="mb-2 text-gray-700 text-left md:text-justify break-words leading-relaxed">{fullText}</p>}
        <button
          className="mt-2 text-sm text-white "
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}

function TeamCard({ name, image, title, text }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-green-600">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="mt-2 text-sm text-gray-700 text-left md:text-justify break-words leading-relaxed">
        {readMore ? text : text.slice(0, 100) + "..."}
      </p>
      <button
        onClick={() => setReadMore(!readMore)}
        className="text-white text-xs mt-1"
      >
        {readMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
