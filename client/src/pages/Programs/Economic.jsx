// src/pages/Programs/Economic.jsx
<<<<<<< HEAD
import socialImg from '../../assets/social.jpg';
import ImageCarousel from '../../components/Carousel';

const socialImages = [
  { src: "/images/carousel/16.jpeg" },
  { src: "/images/carousel/17.jpeg" },
  { src: "/images/carousel/18.jpeg" },
  { src: "/images/carousel/19.jpeg"},
  { src: "/images/carousel/20.jpeg" },
  { src: "/images/carousel/21.jpeg"},
  { src: "/images/carousel/22.jpeg" },
  { src: "/images/carousel/23.jpeg" },
  { src: "/images/carousel/24.jpeg"},
  { src: "/images/carousel/25.jpeg" },
=======
import socialImg from '../../assets/social.jpeg';
import ImageCarousel from '../../components/Carousel';

const socialImages = [
  { src: "/images/carousel/16.jpeg", caption: "Social Empowerment" },
  { src: "/images/carousel/17.jpeg", caption: "Community Support" },
  { src: "/images/carousel/18.jpeg", caption: "Understanding Widowers needs" },
  { src: "/images/carousel/19.jpeg", caption: "Empowering Lives" },
  { src: "/images/carousel/20.jpeg", caption: "Together We Thrive" },
  { src: "/images/carousel/21.jpeg", caption: "Strength in Unity" },
  { src: "/images/carousel/22.jpeg", caption: "Awareness" },
  { src: "/images/carousel/23.jpeg", caption: "Fostering Community" },
  { src: "/images/carousel/24.jpeg", caption: "Empowering Elders" },
  { src: "/images/carousel/25.jpeg", caption: "Social Change in Action" },
>>>>>>> f9b6c8ae3fa8909e84750c322093353bbd2b02a6
];

export default function Economic() {
  return (
    <div className="bg-white text-black min-h-screen p-4">
      
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-12 text-center">
        <img
          src={socialImg}
          alt="Economic and social empowerment program"
          className="w-full mt-6 shadow"
        />
        <h1 className="text-3xl font-bold mt-6">
          Empowerment
        </h1>
      </section>
      
      {/* Intro Paragraph */}
      <section className="mb-6 mx-auto max-w-prose text-justify leading-relaxed">
        <p>
          At WHESS, we believe that economic stability and social inclusion are essential 
          for restoring dignity and independence among elderly widowers. Through sustainable 
          income programs and strong community networks, we equip widowers to rebuild their 
          lives with purpose, financial security, and renewed hope.
        </p>
      </section>

      {/* Main Content */}
      <section className="mb-6 mx-auto max-w-prose text-justify space-y-4 leading-relaxed">
        <h2 className="text-2xl font-semibold text-green-600">
          2. Economic and Social Empowerment
        </h2>
        <ul className="list-disc list-inside space-y-4 marker:text-green-600">
          <li>
            <strong className="text-green-600">Skills Training and Micro-Enterprise Support</strong>: 
            Widowers receive training in practical skills such as poultry farming, beekeeping, and tailoring, 
            alongside starter kits to help launch small enterprises. In 2024, 50 participants in Kisumu 
            completed poultry training, with 80% reporting increased household income within six months.
          </li>
          <li>
            <strong className="text-green-600">Start-Up Grants for Small Income-Generating Projects</strong>: 
            WHESS provides seed grants, typically KSH 10,000, enabling widowers to establish ventures like 
            vegetable stalls, soap-making, or small retail shops. A 2024 pilot in Migori supported 30 widowers, 
            with two-thirds sustaining profitable operations for at least eight months.
          </li>
          <li>
            <strong className="text-green-600">Legal and Estate Planning Assistance</strong>: 
            We partner with pro bono lawyers to assist widowers in drafting wills, securing property rights, 
            and resolving inheritance disputes. In Nairobi alone, 15 widowers received full legal support in 2024, 
            helping protect their assets and secure their family’s future.
          </li>
          <li>
            <strong className="text-green-600">Local Widowers’ Support Groups</strong>: 
            Our community-based groups provide peer support, shared learning, and social activities to combat 
            isolation. In 2024, 10 groups across Western Kenya hosted monthly gatherings attended by over 300 
            widowers, strengthening social ties and mutual assistance networks.
          </li>
        </ul>
      </section>
      <div className="mt-8">
  <ImageCarousel images={socialImages} />
</div>

    </div>
  );
}
