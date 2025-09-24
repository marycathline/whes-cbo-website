// src/pages/Gallery.jsx
import React from "react";

const galleryData = {
  photos: [
    {
      subtitle: "WHESS Ngodhe 17-07-25",
      items: [
        { src: "/photos/ngodhe-1.jpg", title: "Ngodhe Photo 1" },
        { src: "/photos/ngodhe-2.jpg", title: "Ngodhe Photo 2" },
        { src: "/photos/ngodhe-3.jpg", title: "Ngodhe Photo 3" },
        { src: "/photos/ngodhe-4.jpg", title: "Ngodhe Photo 4" },
        { src: "/photos/ngodhe-5.jpg", title: "Ngodhe Photo 5" },
        { src: "/photos/ngodhe-6.jpg", title: "Ngodhe Photo 6" },
        { src: "/photos/ngodhe-7.jpg", title: "Ngodhe Photo 7" },
        { src: "/photos/ngodhe-8.jpg", title: "Ngodhe Photo 8" },
        { src: "/photos/ngodhe-9.jpg", title: "Ngodhe Photo 9" },
        { src: "/photos/ngodhe-10.jpg", title: "Ngodhe Photo 10" },
      ],
    },
    {
      subtitle: "WHESS Kabianga 04-08-25",
      items: [
        { src: "/photos/kabianga-1.jpg", title: "Kabianga Photo 1" },
        { src: "/photos/kabianga-2.jpg", title: "Kabianga Photo 2" },
        { src: "/photos/kabianga-3.jpg", title: "Kabianga Photo 3" },
        { src: "/photos/kabianga-4.jpg", title: "Kabianga Photo 4" },
        { src: "/photos/kabianga-5.jpg", title: "Kabianga Photo 5" },
        { src: "/photos/kabianga-6.jpg", title: "Kabianga Photo 6" },
        { src: "/photos/kabianga-7.jpg", title: "Kabianga Photo 7" },
        { src: "/photos/kabianga-8.jpg", title: "Kabianga Photo 8" },
        { src: "/photos/kabianga-9.jpg", title: "Kabianga Photo 9" },
        { src: "/photos/kabianga-10.jpg", title: "Kabianga Photo 10" },
      ],
    },
  ],

  videos: [
    {
      subtitle: "WHESS Ngodhe 17-07-25",
      items: [
        { src: "/videos/ngodhe-1.mp4", title: "Ngodhe Video 1" },
        { src: "/videos/ngodhe-2.mp4", title: "Ngodhe Video 2" },
        { src: "/videos/ngodhe-3.mp4", title: "Ngodhe Video 3" },
      ],
    },
    {
      subtitle: "WHESS Kabianga 04-08-25",
      items: [
        { src: "/videos/kabianga-1.mp4", title: "Kabianga Video 1" },
        { src: "/videos/kabianga-2.mp4", title: "Kabianga Video 2" },
        { src: "/videos/kabianga-3.mp4", title: "Kabianga Video 3" },
      ],
    },
  ],

  podcasts: [
    {
      subtitle: "Mental Health Series",
      items: [
        {
          src: "/audio/episode1.mp3",
          title: "Episode 1: Mental Health in Widowers",
        },
      ],
    },
  ],

  interviews: [
    {
      subtitle: "WHESS Beneficiary Stories",
      items: [
        {
          src: "/videos/interview1.mp4",
          title: "Testimonial from Beneficiary",
        },
      ],
    },
  ],
};

export default function Gallery() {
  return (
    <div className="px-4 md:px-12 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">WHESS Gallery</h1>

      {/* Photos Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Photos</h2>
        {galleryData.photos.map((event, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-lg font-medium mb-3">{event.subtitle}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {event.items.map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='sans-serif' font-size='16'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Videos Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Videos</h2>
        {galleryData.videos.map((event, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-lg font-medium mb-3">{event.subtitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {event.items.map((item, i) => (
                <video
                  key={i}
                  controls
                  preload="metadata"
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Podcasts Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Podcasts</h2>
        {galleryData.podcasts.map((event, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg font-medium mb-2">{event.subtitle}</h3>
            {event.items.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <p className="font-semibold">{item.title}</p>
                <audio controls className="mt-2 w-full">
                  <source src={item.src} type="audio/mpeg" />
                </audio>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Interviews Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Interviews</h2>
        {galleryData.interviews.map((event, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-lg font-medium mb-3">{event.subtitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.items.map((item, i) => (
                <video
                  key={i}
                  controls
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
