"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials({ heading, subheading, testimonials }) {
  const [mounted, setMounted] = useState(false);
  
  // Use provided testimonials or empty array if none provided
  const testimonialsToDisplay = testimonials || [];

  // Handle client-side mounting for Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with similar dimensions to avoid layout shift
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              {heading || "What Our Clients Say"}
            </h2>
            <p className="mx-auto mt-4 max-w-screen-md text-gray-600 md:text-lg">
              {subheading || "Don't just take our word for it - hear from some of our satisfied clients!"}
            </p>
          </div>
          <div className="h-64 md:h-80 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }

  // If no testimonials are available, show a message
  if (testimonialsToDisplay.length === 0) {
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              {heading || "What Our Clients Say"}
            </h2>
            <p className="mx-auto mt-4 max-w-screen-md text-gray-600 md:text-lg">
              {subheading || "Don't just take our word for it - hear from some of our satisfied clients!"}
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <p>No testimonials available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            {heading || "What Our Clients Say"}
          </h2>
          <p className="mx-auto mt-4 max-w-screen-md text-gray-600 md:text-lg">
            {subheading || "Don't just take our word for it - hear from some of our satisfied clients!"}
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonialsToDisplay.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="h-full flex flex-col bg-white rounded-lg shadow-md p-6">
                <div className="mb-4 flex-grow">
                  {/* Quote icon */}
                  <svg 
                    className="h-8 w-8 text-indigo-400 mb-2" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                      {testimonial.client && testimonial.client.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{testimonial.client}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation styles */}
        <style jsx global>{`
          .testimonials-swiper {
            padding-bottom: 50px !important;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: #4f46e5 !important;
            background: white;
            width: 40px !important;
            height: 40px !important;
            border-radius: 50%;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 18px !important;
          }
          .swiper-pagination-bullet {
            background: #4f46e5 !important;
          }
          .swiper-slide {
            height: auto !important;
            display: flex;
          }
          .swiper-slide > div {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </div>
    </div>
  );
}
