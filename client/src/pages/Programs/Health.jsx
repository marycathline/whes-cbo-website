// src/pages/Programs/Health.jsx

import healthImg from "../../assets/health.jpg";
import ImageCarousel from "../../components/Carousel";

const healthImages = [
  { src: "/images/carousel/63.jpeg" },
  { src: "/images/carousel/64.jpeg" },
  { src: "/images/carousel/65.jpeg" },
  { src: "/images/carousel/66.jpeg" },
  { src: "/images/carousel/67.jpeg"},
  { src: "/images/carousel/68.jpeg"},
  { src: "/images/carousel/69.jpeg" }

];

export default function Health() {
  return (
    <div className="bg-white text-black min-h-screen p-4">
      {/* Hero Image */}
      <img
        src={healthImg}
        alt="mobile medical camp"
        className="w-full mt-4 mb-4 shadow"
      />

      {/* Title Section */}
      <section className="bg-green-600 text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-bold">Health Services</h1>
      </section>

      {/* Intro Paragraphs */}
      <div className="mb-6 mx-auto max-w-prose text-justify text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Empowerment through Care: WHESS Support for Widowers and the Elderly
        </h2>
        <p className="mb-4">
          Widowers Health Empowerment and Support Services (WHESS) is deeply committed to restoring dignity, hope, and independence among widowers and the elderly in our communities. A key part of this mission involves the distribution of essential support items such as walking aids, wheelchairs, and other assistive devices that enhance mobility and improve daily living for those with physical challenges.
        </p>
        <p className="mb-4">
          In addition to mobility support, WHESS also provides gift hampers packed with nutritious food, basic household items, clothing, and personal care products. These hampers are a gesture of love and solidarity, especially during festive seasons or outreach visits, reminding widowers and the elderly that they are seen, valued, and cared for.
        </p>
        <p className="mb-8">
          WHESS also offers psychosocial support, health screenings, and community bonding sessions to promote emotional well-being and social inclusion. Through these comprehensive interventions, WHESS continues to empower, uplift, and walk alongside widowers and the elderly with compassion and commitment.
        </p>

        {/* New Detailed Health Initiatives Section */}
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Comprehensive Health Initiatives
        </h2>
        <p className="mb-4">
          Elderly widowers often face declining physical and mental health, worsened by limited access to healthcare. WHESS addresses these challenges through targeted programs:
        </p>
        <ul className="list-disc list-inside space-y-4 marker:text-green-600">
          <li>
            <strong className="text-green-600">Free Health Screenings and Mobile Medical Camps</strong>:  
            Quarterly camps in both rural and urban areas offer screenings for hypertension, diabetes, arthritis, and other conditions. At our 2024 Siaya camp, over 200 widowers received check-ups, with 30 referred for specialized care.
          </li>
          <li>
            <strong className="text-green-600">Mental Health Support and Counseling</strong>:  
            We provide free counseling through trained professionals and peer support groups to address grief, loneliness, and depression. In Kisumu, our “Healing Hearts” program has supported 150 widowers since 2023.
          </li>
          <li>
            <strong className="text-green-600">Nutrition Education and Wellness Programs</strong>:  
            Workshops teach widowers about affordable, nutritious diets to help manage chronic illnesses. In Homa Bay, over 100 participants have adopted healthier eating habits through our sessions.
          </li>
          <li>
            <strong className="text-green-600">Referrals to Specialized Medical Centers</strong>:  
            WHESS partners with hospitals to provide access to advanced care including cataract surgeries and prostate treatments at subsidized rates.
          </li>
        </ul>
      </div>

      <div className="mt-8">
  <ImageCarousel images={healthImages} />
</div>

    </div>
  );
}
