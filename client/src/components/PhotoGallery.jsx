// src/components/PhotoGallery.jsx
import photo1 from "../assets/images/gallery/photo1.jpg";
import photo2 from "../assets/images/gallery/photo2.jpg";
import video1 from "../assets/images/gallery/video1.mp4";
import photo3 from "../assets/images/gallery/photo3.jpg";
import video2 from "../assets/images/gallery/video2.mp4";
import photo4 from "../assets/images/gallery/photo4.jpg";

export default function PhotoGallery() {
  const media = [
    { type: "image", src: photo1, alt: "Medical Camp" },
    { type: "image", src: photo2, alt: "Empowerment Talk" },
    { type: "video", src: video1, alt: "Training Session" },
    { type: "image", src: photo3, alt: "Widower Wellness" },
    { type: "video", src: video2, alt: "Support Group Testimony" },
    { type: "image", src: photo4, alt: "Support" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-8">
          Past Outreach Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {media.map((item, index) =>
            item.type === "image" ? (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="rounded-xl shadow-md hover:shadow-lg transition h-64 w-full object-cover"
              />
            ) : (
              <video
                key={index}
                src={item.src}
                controls
                className="rounded-xl shadow-md hover:shadow-lg transition h-64 w-full object-cover"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
