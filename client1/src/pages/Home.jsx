import React from 'react';
import { Helmet } from 'react-helmet';
import MainBanner from '../assets/gear/banner-1.png';
import Banner2 from '../assets/gear/banner-2.png';
import Banner3 from '../assets/gear/banner-3.png';
import Banner4 from '../assets/gear/banner-4.png';
import Banner5 from '../assets/gear/banner-5.png';

import { MdLocalShipping } from 'react-icons/md';
import { FaGift, FaHeadphonesAlt } from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai';
import { SiMoneygram } from 'react-icons/si';
import { categories } from '../assets/data';
import Marquee from 'react-fast-marquee';
import { brand } from '../assets/data';
import ProductFeature from '../components/ProductFeature/ProductFeature';
import FamousProduct from '../components/FamousProduct/FamousProduct';
import ProductHotSale from '../components/HotSale/ProductHotSale';
import Meta from '../components/Meta';
import BannerSwiper from '../components/BannerSwiper/BannerSwiper';
// import News from '../components/News';
const Home = () => {
  return (
    <>
      
      <Meta title={'Trang chủ'} />
      {/* Banner Main */}
      <section className="py-5 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-x-2">
            <div className="main-banner-content">
              {/* <img src={MainBanner} alt="" className="object-cover w-full h-full rounded-lg" /> */}
              <BannerSwiper />
            </div>
            <div className="main-banner-content">
              <div className="grid grid-cols-2 gap-4">
                <div className="cursor-pointer image-item">
                  <img src={Banner2} alt="" className="rounded-lg" />
                </div>
                <div className="cursor-pointer image-item">
                  <img src={Banner3} alt="" className="rounded-lg" />
                </div>
                <div className="cursor-pointer image-item">
                  <img src={Banner4} alt="" className="rounded-lg" />
                </div>
                <div className="cursor-pointer image-item">
                  <img src={Banner5} alt="" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Support */}
      <section className="py-5 mt-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 place-items-center">
            <div className="flex items-center gap-x-2">
              <MdLocalShipping size={24} />
              <div className="flex flex-col">
                <h6 className="font-semibold">Miễn Phí Giao Hàng</h6>
                <p className="text-sm text-gray-500">Đơn hàng từ 1 triệu trở lên</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <FaGift size={24} />
              <div className="flex flex-col">
                <h6 className="font-semibold">Ưu Đãi Hàng Ngày</h6>
                <p className="text-sm text-gray-500">Tiết kiệm tới 25%</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <FaHeadphonesAlt size={24} />
              <div className="flex flex-col">
                <h6 className="font-semibold">Hỗ trợ 24/7</h6>
                <p className="text-sm text-gray-500">Chuyên viên tư vấn</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <SiMoneygram size={24} />
              <div className="flex flex-col">
                <h6 className="font-semibold">Giá cả phải chăng</h6>
                <p className="text-sm text-gray-500">Niêm yết theo hãng</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <AiFillCreditCard size={24} />
              <div className="flex flex-col">
                <h6 className="font-semibold">Thanh toán an toàn</h6>
                <p className="text-sm text-gray-500">100% bảo mật</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Product */}
      <section className="py-5">
        <div className="container mx-auto">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h1 className="text-2xl font-semibold pb-5 border-b-[1px] border-color-ededed">Danh mục sản phẩm</h1>
            <div className="grid grid-cols-5 mt-4">
              {categories.map((category) => {
                return (
                  <div
                    className="grid items-center grid-cols-2 px-2 py-4 cursor-pointer place-items-center category-item"
                    key={category.id}
                  >
                    <div>
                      <h6 className="font-semibold">{category.title}</h6>
                    </div>
                    <div className="">
                      <img
                        src={category.image}
                        alt={category.image}
                        className="object-contain w-24 h-24 image-category"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Product Feature */}
      <section className="py-5">
        <div className="container mx-auto">
          <h1 className="p-4 text-2xl font-semibold">Sản phẩm nổi bật</h1>
          <ProductFeature />
        </div>
      </section>
      {/* Marquee */}
      {/* <section className="py-5 ">
        <div className="container mx-auto">
          <div className='p-3 bg-white rounded-lg shadow-lg'>
              <Marquee>
                {brand.map((item) => {
                  return (
                    <div className='w-[60%]'>
                      <img src={item.imageBrand} alt={item.id} />
                    </div>
                  );
                })}
              </Marquee>
          </div>
        </div>
      </section> */}
      {/* News */}
      {/* <News/>  */}
      <section className="py-5">
        <div className="container mx-auto">
          <div className="mb-5">
            <img
              src="https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/17/638252285402961781_H7_1200x100.png"
              alt=""
            />
          </div>
          <div className="">
            <ProductHotSale />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto">
          <div className="mb-5">
            <img
              src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690002578/t-gear-ecom/638254013559401153_H7_1200x100_qy0owh.webp"
              alt=""
            />
          </div>
          <FamousProduct />
        </div>
      </section>
    </>
  );
};

export default Home;
