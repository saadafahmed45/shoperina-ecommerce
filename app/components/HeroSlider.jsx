"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg",
    title: "Explore Nature's Beauty",
    description: "Discover breathtaking landscapes and serene environments.",
  },
  {
    image: "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg",
    title: "Urban Adventures Await",
    description: "Experience the vibrant energy of city life and culture.",
  },
  {
    image: "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg",
    title: "Relax in Luxury",
    description: "Indulge in world-class amenities and unparalleled comfort.",
  },
  {
    image: "https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg",
    title: "Culinary Delights",
    description: "Savor exquisite flavors from around the world.",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="select-none"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
                    {slide.description}
                  </p>
                  <button className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 animate-fade-in-up animation-delay-600">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
