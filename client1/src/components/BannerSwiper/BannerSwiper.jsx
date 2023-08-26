import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles.css';

// import required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default function BannerSwiper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiperBanner">
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690000333/t-gear-ecom/banner_web_slider_800x400_110c98f84f544a3d8e68fde49944d1a8_zpgokt.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690000378/t-gear-ecom/lenovo-week-800x400_5bf304a1e91a48459b3d7a04c5e9f6b6_opk3g2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690000394/t-gear-ecom/5._web_slider_800x400_edd4b02147da4aff829018c10acdf92e_ellu9h.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690000403/t-gear-ecom/slideshow_5_n7wqgm.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690000411/t-gear-ecom/web_slider_800x400_ba1a2ee395dd4ce7a0ed804cfb19fe44_qf3fzn.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690000437/t-gear-ecom/1_web_slider_800x400__1__0edbd2524b1142b3906d76d1922d52c9_a7uv1x.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690000448/t-gear-ecom/slideshow_8_pwdmxz.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690000459/t-gear-ecom/20230712-resize-800x400_5a82536163be47df8e57241198f47e3d_h7bd3s.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
