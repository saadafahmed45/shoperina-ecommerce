"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update activeIndex on slide change
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <AnimatePresence>
                {activeIndex === index && (
                  <>
                    {/* Animated Background Image */}
                    <motion.div
                      key={`image-${index}`}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        layout="fill"
                        objectFit="cover"
                        className="select-none"
                        priority={index === 0}
                      />
                    </motion.div>

                    {/* Animated Text Content */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-center text-white px-4 sm:px-6 lg:px-8">
                        <motion.h2
                          key={`title-${index}`}
                          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                          variants={fadeInUp}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ duration: 1, delay: 0.4 }}
                        >
                          {slide.title}
                        </motion.h2>

                        <motion.p
                          key={`description-${index}`}
                          className="text-lg sm:text-xl md:text-2xl mb-8"
                          variants={fadeInUp}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ duration: 1, delay: 0.6 }}
                        >
                          {slide.description}
                        </motion.p>

                        <motion.button
                          key={`button-${index}`}
                          className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
                          variants={fadeInUp}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ duration: 1, delay: 0.8 }}
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
