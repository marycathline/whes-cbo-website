import { Link } from "react-router-dom";

import healthImg from "../assets/health.jpg";
import socialImg from "../assets/social.jpg";
import elderlyImg from "../assets/elderly.jpg";

import ImageCarousel from "../components/Carousel";

const programImages = [

  { src: "/images/carousel/51.jpeg"},
  { src: "/images/carousel/52.jpeg" },
  { src: "/images/carousel/53.jpeg" },
  { src: "/images/carousel/54.jpeg" },
  { src: "/images/carousel/55.jpeg" },
  { src: "/images/carousel/56.jpeg" },
  { src: "/images/carousel/57.jpeg" },


  
];



export default function Programs() {
  return (
     <div className="bg-white text-black min-h-screen ">

       {/* Carousel Section */}
        <section className="bg-green-600 bg-opacity-90">
        <ImageCarousel images={programImages} />
      </section>
      
        {/* Hero Section */}
        <section className="w-full bg-green-600 bg-opacity-90 flex flex-col items-center justify-center text-white text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Our Programs</h1>
          <p className="mt-2 text-lg">Health. | Empowerment. | & Support Services.</p>
        </section>


      <section className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-semibold text-green-600 mb-4 text-center">Why WHESS?</h2>

  <div className="mx-auto max-w-prose text-justify">
    <p className="mb-4">
      Kenya has made significant strides in supporting widows and women, but elderly widowers remain a neglected group.
      According to a 2022 study by the Kenya National Bureau of Statistics, over 60% of elderly men in rural areas live
      below the poverty line, with widowers facing heightened risks of depression, malnutrition, and social exclusion.
      The loss of a spouse often compounds these challenges, leaving widowers vulnerable to exploitation, loneliness,
      and poor health.
    </p>

    <p className="mb-4">
      WHESS recognizes that elderly widowers are not just beneficiaries but carriers of cultural heritage, wisdom,
      and resilience. Supporting them is an investment in preserving Kenya’s social fabric. Our community-based approach
      ensures programs are tailored to local needs, while our partnerships with donors, NGOs, and faith-based groups
      amplify our impact. For example, our 2024 health camp in Migori identified 40% of widowers with untreated chronic
      conditions, underscoring the urgent need for our work.
    </p>
  </div>
</section>


      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8">What We Do</h2>
        <p>WHESS delivers targeted, holistic programs designed to address the multifaceted challenges faced by elderly widowers.
          Our initiatives are informed by community feedback, research, and partnerships with local and international stakeholders.
          Below is an expanded overview of our core programs, with examples of their impact: </p>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Program Card 1 */}
          <div className="border border-gray-200 rounded-lg shadow-lg p-6">
            <img src={healthImg} alt="Health program" className="rounded mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-green-600 mb-2">Health</h3>
            <p className="mb-4">
              We provide free health camps, mental health counseling, nutrition education,
              and hospital referrals to improve widowers’ wellbeing.
            </p>
            <Link
              to="/programs/health"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Program Card 2 */}
          <div className="border border-gray-200 rounded-lg shadow-lg p-6">
            <img src={socialImg} alt="Economic support" className="rounded mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-green-600 mb-2"> Empowerment</h3>
            <p className="mb-4">
              From micro-grants and skills training to support groups and legal help,
              we promote self-reliance and community belonging.
            </p>
            <Link
              to="/programs/economic"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Program Card 3 */}
          <div className="border border-gray-200 rounded-lg shadow-lg p-6">
            <img src={elderlyImg} alt="Housing support" className="rounded mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-green-600 mb-2">Support Services</h3>
            <p className="mb-4">
              We build, renovate, and support dignified homes and safe living for widowers 
              at risk of homelessness or neglect.
            </p>
            <Link
              to="/programs/housing"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Program Card 4 */}
          {/*<div className="border border-gray-200 rounded-lg shadow-lg p-6">
            <img src={mobileImg} alt="Advocacy" className="rounded mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-green-600 mb-2">Advocacy & Awareness</h3>
            <p className="mb-4">
              We run campaigns, partner with churches and policy leaders, 
              and amplify the voices of elderly widowers in public discourse.
            </p>
            <Link
              to="/programs/advocacy"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Learn More
            </Link>
          </div>*/}

        </div>
      </section>
    </div>
  );
}
