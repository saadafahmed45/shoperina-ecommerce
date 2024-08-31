"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import the effect styles
import "swiper/css/pagination"; // Import Swiper pagination styles

import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules"; // Import Pagination module
import Image from "next/image";
// import QuickBooking from "./QuickBooking";
const HeroSlider = () => {
  return (
    <div>
      <div className="mt-18 flex flex-col">
        <section className="relative">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            // navigation={true}
            modules={[Navigation, EffectFade, Autoplay, Pagination]} // Include Pagination module
            effect="fade" // Set the effect to "fade"
            fadeEffect={{ crossFade: true }} // Optional: to smooth out the fade transition
            autoplay={{ delay: 4000, disableOnInteraction: false }} // Set delay to 4 seconds (4000 ms)
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  className="h-screen w-full select-none object-cover"
                  src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg"
                />
                <div className="absolute left-1/2 top-1/2 z-40 w-full -translate-x-1/2 -translate-y-1/2 transform">
                  <h2>Hero text</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="h-screen w-full select-none object-cover"
                  src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg"
                  alt="img"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="h-screen w-full select-none object-cover"
                  src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="h-screen w-full select-none object-cover"
                  src="https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default HeroSlider;
