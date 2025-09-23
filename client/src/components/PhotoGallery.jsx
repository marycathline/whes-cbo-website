// src/components/PhotoGallery.jsx
export default function PhotoGallery() {
  const media = [
    { type: "image", src: "/images/gallery/photo1.jpeg", alt: "Medical Camp" },
    { type: "image", src: "/images/gallery/photo2.jpeg", alt: "Empowerment Talk" },
    { type: "video", src: "/images/gallery/video1.mp4", alt: "Training Session" },
    { type: "image", src: "/images/gallery/photo3.jpeg", alt: "Widower Wellness" },
    { type: "video", src: "/images/gallery/video2.mp4", alt: "Support Group Testimony" },
    { type: "image", src: "/images/gallery/photo4.jpeg", alt: "Nutritional Support" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-8">Past Outreach Gallery</h2>
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
