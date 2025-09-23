// src/pages/Programs/Housing.jsx
<<<<<<< HEAD
import elderlyImg from "../../assets/elderly.jpg";
import ImageCarousel from '../../components/Carousel';

const housingImages = [
  { src: "/images/carousel/58.jpeg"},
  { src: "/images/carousel/59.jpeg"},
  { src: "/images/carousel/60.jpeg" },
  { src: "/images/carousel/61.jpeg"},
  { src: "/images/carousel/62.jpeg"},
=======
import elderlyImg from "../../assets/elderly.jpeg";
import ImageCarousel from '../../components/Carousel';

const housingImages = [
  { src: "/images/carousel/26.jpeg", caption: "Safe Housing" },
  { src: "/images/carousel/27.jpeg", caption: "Community Living" },
  { src: "/images/carousel/28.jpeg", caption: "Supportive Environments" },
  { src: "/images/carousel/29.jpeg", caption: "Dignified Living" },
  { src: "/images/carousel/30.jpeg", caption: "Empowering Widowers" },
>>>>>>> f9b6c8ae3fa8909e84750c322093353bbd2b02a6
];

export default function Housing() {
  return (
    <div className="bg-white text-black min-h-screen p-4">
      {/* Hero Image */}
      <img
        src={elderlyImg}
        alt="Elderly widower in a supportive environment"
        className="w-full mt-4 mb-4 shadow"
      />

      {/* Page Title */}
      <section className="bg-green-600 text-white py-12 text-center">
        <h1 className="text-3xl font-bold">Support Services</h1>
      </section>

      {/* Intro Paragraph */}
      <section className="mb-6 mx-auto max-w-prose text-justify leading-relaxed">
        <p>
          Stable and safe housing is a basic human right. WHESS supports elderly widowers
          facing homelessness or neglect by advocating for inclusive living arrangements
          and constructing dignified homes through community partnerships.
        </p>
      </section>

      {/* Housing Section */}
      <section className="mb-6 mx-auto max-w-prose text-justify space-y-4 leading-relaxed">
        <h2 className="text-2xl font-semibold text-green-600">
          3. Housing and Assisted Living Support
        </h2>
        <ul className="list-disc list-inside space-y-4 marker:text-green-600">
          <li>
            <strong className="text-green-600">Housing Projects in Partnership with Communities</strong>: 
            In collaboration with local leaders, we construct and renovate homes for vulnerable widowers, 
            ensuring they have safe, accessible, and dignified living spaces. In 2024, five fully furnished 
            homes were completed in Kisumu, each costing KSH 300,000 and funded entirely by donors.
          </li>
          <li>
            <strong className="text-green-600">Safe, Caring Environments</strong>: 
            We work with families and communities to establish supportive housing that reduces neglect 
            and promotes well-being. Our sensitization campaigns in Busia reached over 500 residents in 2023, 
            leading to improved community-based care for widowers.
          </li>
          <li>
            <strong className="text-green-600">Resettlement Support</strong>: 
            Vulnerable widowers facing unsafe or neglectful conditions are relocated to secure, 
            community-focused care facilities. In 2024, we successfully resettled 10 widowers in Siaya 
            into a faith-based home offering health services, companionship, and ongoing support.
          </li>
        </ul>
      </section>

      {/* Advocacy & Awareness Section */}
      <section className="mb-6 mx-auto max-w-prose text-justify space-y-4 leading-relaxed">
        <h2 className="text-2xl font-semibold text-green-600">
          4. Advocacy and Awareness
        </h2>
        <p>
          Widowers’ challenges are rarely addressed in policy or public discourse. WHESS actively works to 
          change this by amplifying their voices and pushing for inclusive support systems.
        </p>
        <ul className="list-disc list-inside space-y-4 marker:text-green-600">
          <li>
            <strong className="text-green-600">Public Campaigns</strong>: 
            We organize radio programs and community forums to highlight widowers’ issues. In 2024, 
            our “Voices of Widowers” campaign on Radio Nam Lolwe reached over 100,000 listeners across the region.
          </li>
          <li>
            <strong className="text-green-600">Partnerships with Faith-Based Organizations</strong>: 
            Collaborating with churches and mosques ensures widowers are included in outreach programs. 
            Our partnership with the Catholic Diocese of Kisumu has integrated 200 widowers into parish 
            activities and support networks.
          </li>
          <li>
            <strong className="text-green-600">Policy Lobbying</strong>: 
            We engage with county governments to promote widower-inclusive eldercare policies. In 2024, 
            WHESS presented a policy brief to the Kisumu County Assembly advocating for targeted welfare programs.
          </li>
        </ul>
      </section>

      {/* Image Carousel */}
    
        <ImageCarousel images={housingImages} />
      
    </div>
  );
}
