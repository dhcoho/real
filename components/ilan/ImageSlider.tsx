import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Image from "next/image";





interface ImageSliderProps {
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ className }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
    "https://swiperjs.com/demos/images/nature-10.jpg",
  ];

  return (
    <div
      className={`flex flex-col items-center w-full object-cover max-w-[600px] max-[750px]:max-w-[100%]  max-h-[575px] max-[750px]:max-h-[400px] ${className}`}
    >
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{ swiper: thumbsSwiper! }}
        className="img_slider max-w-full max-h-[500px] rounded-2xl max-[750px]:rounded-none text-[13px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt="image"
              width={600}
              height={500}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={6}
        slidesPerView={7}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper w-full max-h-[175px] mt-2 rounded-b-2xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="cursor-pointer overflow-hidden mt-2 mb-5">
            <Image src={image} alt="image" width={84} height={75} className="w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
