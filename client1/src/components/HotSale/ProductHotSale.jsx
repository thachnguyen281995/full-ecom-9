import React from 'react';
import { FaHotjar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import Countdown from '../../Helmet/CountDown/CountDown';
import { Link, useLocation } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import './styles.css';
import Promo from '../../Helmet/Promo/Promo';
const ProductHotSale = () => {
  const targetDate = new Date('2023-07-25T23:59:59');
  const targetDate1 = new Date('2023-07-21T23:59:59');
  const targetDate2 = new Date('2023-07-20T23:59:59');
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col p-4">
      <div className="title flex items-center gap-x-2 mb-5">
        <FaHotjar className="text-red-600" size={30} />
        <h3 className="uppercase text-redcb font-semibold text-xl">Khuyến Mãi Hot</h3>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          clickable: true
        }}
        modules={[Navigation]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <div className="product-container flex flex-col gap-y-5">
            <div className="product-card-top relative p-10">
              <div className="product-image w-[168px] mx-auto">
                <Link to = '/product/:id'>
                  <img
                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>
              <div className="badge absolute left-0 bottom-4 flex flex-col gap-y-2">
                <span className="bg-yellow-500 text-white text-[13px] px-2 py-1 rounded-r-md text-start">
                  Trả góp 0%
                </span>
                <span className="bg-redcb text-white px-2 py-1 rounded-r-md text-[13px] ">Giảm 3.410.000đ</span>
              </div>
            </div>
            <div className="product-card-bottom">
              <div className="product-content">
                <Link to="/product/:id"><h3 className="product-title font-sans text-secondary font-semibold mb-2">iPhone 14 Pro Max</h3></Link>
                <div className="price flex justify-between">
                  <div className="progress basis-[130px] w-[130px] h-[28px] rounded-2xl bg-[#ef8573] text-center text-lg font-semibold overflow-hidden relative z-10 text-white">
                    26.580.000 ₫<div className="w-[89%] absolute -z-10 top-0 bottom-0 bg-redcb"></div>
                  </div>
                  <div>
                    <strike className="text-[#919191] text-sm">29.990.000 ₫</strike>
                    <Countdown targetDate={targetDate} />
                  </div>
                </div>
              </div>
              <Promo />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container flex flex-col gap-y-5">
            <div className="product-card-top relative p-10">
              <div className="product-image w-[168px] mx-auto">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689825246/t-gear-ecom/638158962810512367_ss-galaxy-s22-dd-icon_l9wvco.webp"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="badge absolute left-0 bottom-4 flex flex-col gap-y-2">
                <span className="bg-yellow-500 text-white text-[13px] px-2 py-1 rounded-r-md text-start">
                  Trả góp 0%
                </span>
                <span className="bg-redcb text-white px-2 py-1 rounded-r-md text-[13px] "> Giảm 9.500.000đ</span>
              </div>
            </div>
            <div className="product-card-bottom">
              <div className="product-content">
                <h3 className="product-title font-sans text-secondary font-semibold mb-2">
                  Samsung Galaxy S22 5G 128GB
                </h3>
                <div className="price flex justify-between">
                  <div className="progress basis-[130px] w-[130px] h-[28px] rounded-2xl bg-[#ef8573] text-center text-lg font-semibold overflow-hidden relative z-10 text-white">
                    12.490.000 ₫<div className="w-[67%] absolute -z-10 top-0 bottom-0 bg-redcb"></div>
                  </div>
                  <div>
                    <strike className="text-[#919191] text-sm">21.990.000 ₫</strike>
                    <Countdown targetDate={targetDate1} />
                  </div>
                </div>
              </div>
              <Promo />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container flex flex-col gap-y-5">
            <div className="product-card-top relative p-10">
              <div className="product-image w-[168px] mx-auto">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689827850/t-gear-ecom/638247668913448556_oppo-a78-den-dd-moi_med7cu.webp"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="badge absolute left-0 bottom-4 flex flex-col gap-y-2">
                <span className="bg-yellow-500 text-white text-[13px] px-2 py-1 rounded-r-md text-start">
                  Trả góp 0%
                </span>
                <span className="bg-redcb text-white px-2 py-1 rounded-r-md text-[13px] ">Giảm 500.000đ</span>
              </div>
            </div>
            <div className="product-card-bottom flex flex-col">
              <div className="product-content">
                <h3 className="product-title font-sans text-secondary font-semibold mb-2">OPPO A78 8GB-256GB</h3>
                <div className="price flex justify-between">
                  <div className="progress basis-[130px] w-[130px] h-[28px] rounded-2xl bg-[#ef8573] text-center text-lg font-semibold overflow-hidden relative z-10 text-white">
                    6.490.000 ₫<div className="w-[89%] absolute -z-10 top-0 bottom-0 bg-redcb"></div>
                  </div>
                  <div>
                    <strike className="text-[#919191] text-sm">6.990.000 ₫</strike>
                  </div>
                </div>
              </div>
              <Promo />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container flex flex-col gap-y-5">
            <div className="product-card-top relative p-10">
              <div className="product-image w-[168px] mx-auto">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689852147/t-gear-ecom/638175165816785780_asus-tuf-gaming-fx506hf-den-dd-moi_gj6w6i.webp"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="badge absolute left-0 bottom-4 flex flex-col gap-y-2">
                <span className="bg-yellow-500 text-white text-[13px] px-2 py-1 rounded-r-md text-start">
                  Trả góp 0%
                </span>
                <span className="bg-redcb text-white px-2 py-1 rounded-r-md text-[13px] ">Giảm 3.410.000đ</span>
              </div>
            </div>
            <div className="product-card-bottom">
              <div className="product-content">
                <h3 className="product-title font-sans text-secondary font-semibold mb-2">Laptop Asus TUF Gaming FX506HF-HN017W i5-11400H</h3>
                <div className="price flex justify-between">
                  <div className="progress basis-[130px] w-[130px] h-[28px] rounded-2xl bg-[#ef8573] text-center text-lg font-semibold overflow-hidden relative z-10 text-white">
                  17.990.000 ₫<div className="w-[89%] absolute -z-10 top-0 bottom-0 bg-redcb"></div>
                  </div>
                  <span>
                    <strike className="text-[#919191] text-sm">21.990.000 ₫</strike>
                    <Countdown targetDate={targetDate2}/>
                  </span>
                </div>
              </div>
              <Promo />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container flex flex-col gap-y-5">
            <div className="product-card-top relative p-10">
              <div className="product-image max-w-[168px] mx-auto">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689852577/t-gear-ecom/638161092136822060_xiaomi-redmi-10-2022-dd-docquyen_t3fz1s.webp"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="badge absolute left-0 bottom-4 flex flex-col gap-y-2">
                <span className="bg-yellow-500 text-white text-[13px] px-2 py-1 rounded-r-md text-start">
                  Trả góp 0%
                </span>
                <span className="bg-redcb text-white px-2 py-1 rounded-r-md text-[13px] ">Giảm 500.000đ</span>
              </div>
            </div>
            <div className="product-card-bottom">
              <div className="product-content">
                <h3 className="product-title font-sans text-secondary font-semibold mb-2">Xiaomi Redmi 10 2022 4GB-128GB</h3>
                <div className="price flex justify-between">
                  <div className="progress basis-[130px] w-[130px] h-[28px] rounded-2xl bg-[#ef8573] text-center text-lg font-semibold overflow-hidden relative z-10 text-white">
                  3.790.000 ₫<div className="w-[89%] absolute -z-10 top-0 bottom-0 bg-redcb"></div>
                  </div>
                  <span>
                    <strike className="text-[#919191] text-sm">4.290.000 ₫</strike>
                  </span>
                </div>
              </div>
              <Promo />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductHotSale;
