// src/pages/Gallery.jsx
import React from "react";

// ✅ Ngodhe Photos (import from src/assets/media)
import ngodhe1 from "../assets/media/1.jpg";
import ngodhe2 from "../assets/media/2.jpg";
import ngodhe3 from "../assets/media/3.jpg";
import ngodhe4 from "../assets/media/4.jpg";
import ngodhe5 from "../assets/media/5.jpg";
import ngodhe6 from "../assets/media/6.jpg";
import ngodhe7 from "../assets/media/7.jpg";
import ngodhe8 from "../assets/media/8.jpg";
import ngodhe9 from "../assets/media/9.jpg";
import ngodhe10 from "../assets/media/10.jpg";
import ngodhe11 from "../assets/media/11.jpg";
import ngodhe12 from "../assets/media/12.jpg";
import ngodhe13 from "../assets/media/13.jpg";
import ngodhe14 from "../assets/media/14.jpg";
import ngodhe15 from "../assets/media/15.jpg";
import ngodhe16 from "../assets/media/16.jpg";
import ngodhe17 from "../assets/media/17.jpg";
import ngodhe18 from "../assets/media/18.jpg";
import ngodhe19 from "../assets/media/19.jpg";
import ngodhe20 from "../assets/media/20.jpg";
import ngodhe21 from "../assets/media/21.jpg";
import ngodhe22 from "../assets/media/22.jpg";
import ngodhe23 from "../assets/media/23.jpg";
import ngodhe24 from "../assets/media/24.jpg";

// ✅ Ngodhe Videos (import from src/assets/media)
import ngodheVideo1 from "../assets/images/gallery/video1.mp4";
import ngodheVideo2 from "../assets/images/gallery/video2.mp4";


const galleryData = {
  photos: [
    {
      subtitle: "WHESS Ngodhe",
      items: [
        { src: ngodhe1, title: "Ngodhe Photo 1" },
        { src: ngodhe2, title: "Ngodhe Photo 2" },
        { src: ngodhe3, title: "Ngodhe Photo 3" },
        { src: ngodhe4, title: "Ngodhe Photo 4" },
        { src: ngodhe5, title: "Ngodhe Photo 5" },
        { src: ngodhe6, title: "Ngodhe Photo 6" },
        { src: ngodhe7, title: "Ngodhe Photo 7" },
        { src: ngodhe8, title: "Ngodhe Photo 8" },
        { src: ngodhe9, title: "Ngodhe Photo 9" },
        { src: ngodhe10, title: "Ngodhe Photo 10" },
        { src: ngodhe11, title: "Ngodhe Photo 11" },
        { src: ngodhe12, title: "Ngodhe Photo 12" },
        { src: ngodhe13, title: "Ngodhe Photo 13" },
        { src: ngodhe14, title: "Ngodhe Photo 14" },
        { src: ngodhe15, title: "Ngodhe Photo 15" },
        { src: ngodhe16, title: "Ngodhe Photo 16" },
        { src: ngodhe17, title: "Ngodhe Photo 17" },
        { src: ngodhe18, title: "Ngodhe Photo 18" },
        { src: ngodhe19, title: "Ngodhe Photo 19" },
        { src: ngodhe20, title: "Ngodhe Photo 20" },
        { src: ngodhe21, title: "Ngodhe Photo 21" },
        { src: ngodhe22, title: "Ngodhe Photo 22" },
        { src: ngodhe23, title: "Ngodhe Photo 23" },
        { src: ngodhe24, title: "Ngodhe Photo 24" },
      ],
    },
    {
      subtitle: "WHESS Kabianga",
      items: [
        { src: "/images/carousel/2.jpeg", title: "Kabianga Photo 1" },
        { src: "/images/carousel/4.jpg", title: "Kabianga Photo 2" },
        { src: "/images/carousel/5.jpeg", title: "Kabianga Photo 3" },
        { src: "/images/carousel/8.jpeg", title: "Kabianga Photo 4" },
        { src: "/images/carousel/13.jpeg", title: "Kabianga Photo 5" },
        { src: "/images/carousel/14.jpeg", title: "Kabianga Photo 6" },
        { src: "/images/carousel/20.jpeg", title: "Kabianga Photo 7" },
        { src: "/images/carousel/23.jpeg", title: "Kabianga Photo 8" },
        { src: "/images/carousel/24.jpeg", title: "Kabianga Photo 9" },
        { src: "/images/carousel/28.jpg", title: "Kabianga Photo 10" },
        { src: "/images/carousel/30.jpg", title: "Kabianga Photo 11" },
        { src: "/images/carousel/32.jpg", title: "Kabianga Photo 12" },
        { src: "/images/carousel/33.jpg", title: "Kabianga Photo 13" },
        { src: "/images/carousel/34.jpg", title: "Kabianga Photo 14" },
        { src: "/images/carousel/38.jpg", title: "Kabianga Photo 15" },
        { src: "/images/carousel/47.jpg", title: "Kabianga Photo 16" },
        { src: "/images/carousel/48.jpg", title: "Kabianga Photo 17" },
        { src: "/images/carousel/51.jpg", title: "Kabianga Photo 18" },
        { src: "/images/carousel/57.jpg", title: "Kabianga Photo 19" },
        { src: "/images/carousel/58.jpg", title: "Kabianga Photo 20" },
        { src: "/images/carousel/60.jpg", title: "Kabianga Photo 21" },
        { src: "/images/carousel/63.jpg", title: "Kabianga Photo 22" },
        { src: "/images/carousel/64.jpg", title: "Kabianga Photo 23" },
      ],
    },
  ],

  videos: [
    {
      subtitle: "WHESS Ngodhe 17-07-25",
      items: [
        { src: ngodheVideo1, title: "Ngodhe Video 1" },
        { src: ngodheVideo2, title: "Ngodhe Video 2" },
        
      ],
    },
    {
      subtitle: "WHESS Kabianga 04-08-25",
      items: [
        { src: "/videos/1.mp4", title: "Kabianga Video 1" },
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
