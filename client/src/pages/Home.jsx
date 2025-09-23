// src/pages/Home.jsx
import Hero from "../components/Hero";
import ImageCarousel from "../components/Carousel";
import PhotoGallery from "../components/PhotoGallery";

// Inline ImpactCard component
function ImpactCard({ number, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-4xl font-bold text-whessBlue mb-2">{number}</div>
      <h3 className="text-xl font-semibold text-whessGreen mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}


// ✅ Image data moved outside the components
const homeImages = [
  { src: "/images/carousel/1.jpeg"},
  { src: "/images/carousel/2.jpeg"},
  { src: "/images/carousel/3.jpeg" },
  { src: "/images/carousel/4.jpeg" },
  { src: "/images/carousel/5.jpeg"},
  { src: "/images/carousel/6.jpeg" },
  { src: "/images/carousel/7.jpeg" },
  { src: "/images/carousel/8.jpeg" },
  { src: "/images/carousel/9.jpeg" },
  { src: "/images/carousel/10.jpeg"},

];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="p-4">
        <Hero />
      </div>

      {/* Carousel Section */}
      <ImageCarousel images={homeImages} />

      {/* Impact Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-green-600 mb-8">
            Our Impact So Far
          </h2>
          <div className="grid gap-6 text-green-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <ImpactCard
              number="1,000+"
              title="Widowers Reached"
              description="Through medical camps and counseling since 2023."
            />
            <ImpactCard
              number="200+"
              title="Trained in Income Skills"
              description="70% report improved livelihoods after WHESS programs."
            />
            <ImpactCard
              number="10"
              title="Homes Built"
              description="Constructed or renovated for vulnerable widowers."
            />
            <ImpactCard
              number="150,000+"
              title="People Reached"
              description="Through radio campaigns and advocacy since 2023."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="p-4">
        <PhotoGallery />
      </div>
    </div>
  );
}
