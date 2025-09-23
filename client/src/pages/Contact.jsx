import React from "react";
import { MdLocationOn, MdEmail, MdPhone, MdInbox } from "react-icons/md";
import ImageCarousel from "../components/Carousel";

const contactImages = [
<<<<<<< HEAD
  { src: "/images/carousel/31.jpeg" },
  { src: "/images/carousel/32.jpeg"},
  { src: "/images/carousel/33.jpeg" },
  { src: "/images/carousel/34.jpeg" },
  { src: "/images/carousel/35.jpeg" },
  { src: "/images/carousel/36.jpeg" },
  { src: "/images/carousel/37.jpeg"},
  { src: "/images/carousel/38.jpeg"},
  { src: "/images/carousel/39.jpeg"},
  { src: "/images/carousel/40.jpeg" },
=======
  { src: "/images/carousel/31.jpeg", caption: "Reach Out to WHESS" },
  { src: "/images/carousel/32.jpeg", caption: "Join the Conversation" },
  { src: "/images/carousel/30.jpeg", caption: "We’re Here to Help" },
  { src: "/images/carousel/34.jpeg", caption: "Connect with Us" },
  { src: "/images/carousel/35.jpeg", caption: "Your Voice Matters" },
  { src: "/images/carousel/36.jpeg", caption: "Together We Can Make a Difference" },
  { src: "/images/carousel/37.jpeg", caption: "Empowering Communities" },
  { src: "/images/carousel/38.jpeg", caption: "Building Bridges" },
  { src: "/images/carousel/39.jpeg", caption: "Transforming Lives Together" },
  { src: "/images/carousel/40.jpeg", caption: "Contact WHESS Today" },
>>>>>>> f9b6c8ae3fa8909e84750c322093353bbd2b02a6
];

export default function Contact() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Carousel Section */}
      <section className="bg-green-600 bg-opacity-90">
        <ImageCarousel images={contactImages} />
      </section>

      {/* Hero Section */}
      <section className="w-full bg-green-600 bg-opacity-90 flex flex-col items-center justify-center text-white text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We'd love to hear from you</p>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-600">Our Headquarters</h2>
          <p><MdLocationOn className="inline text-green-600 mr-2" /> WHESS Headquarters, Nairobi, Kenya</p>
          <p><MdEmail className="inline text-green-600 mr-2" /> info@whesskenya.org</p>
          <p><MdPhone className="inline text-green-600 mr-2" /> +254 722 708 780 / +254 732 287 848</p>
          <p><MdInbox className="inline text-green-600 mr-2" /> P.O. Box 3920-00200, Nairobi</p>

          <iframe
            title="Google Map - Nairobi"
            className="w-full h-64 mt-4 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35869067154!2d36.682579007468966!3d-1.3028602786330847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1753563378963!5m2!1sen!2ske"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <h2 className="text-2xl font-semibold text-green-600">Social Media</h2>
          <p>Connect with us on Facebook | X | YouTube</p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold text-green-600">Send a Message</h2>

          <form
            action="https://formsubmit.co/frankodayo@whess.org" 
            method="POST"
            className="space-y-4"
          >
            {/* FormSubmit hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://whessorganization.netlify.app/thanks" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded p-2"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded p-2"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border rounded p-2"
                placeholder="Type your message..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>

            
          </form>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-brown-100 py-6 text-center text-lg text-green-600">
        <p>
          Join WHESS in transforming lives by empowering widowers, uplifting the elderly,
          and restoring dignity across Kenya.
        </p>
      </div>
    </div>
  );
}
