// components/ImageCarousel.jsx
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel({ images }) {
  if (!images || !images.length) {
    return <p className="text-center text-gray-500">No images to display.</p>;
  }

  return (
    <div className="w-full px-4 md:px-0 max-w-6xl mx-auto py-8">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
        showStatus={false}
        showArrows
        transitionTime={700}
        emulateTouch
      >
        {images.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.src}
              alt={`carousel-img-${idx}`}
              className="w-full h-[300px] sm:h-[500px] md:h-[650px] lg:h-[850px] object-cover transition-all duration-500"
            />
            {item.caption && (
              <p className="legend text-base font-semibold">{item.caption}</p>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
