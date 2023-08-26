import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, useLocation } from 'react-router-dom';

const Test = (props) => {
  const { grid } = props;
  let location = useLocation();
 

  return (
    <div>
      <div className="flex mb-2">
        <input type="checkbox" className="mr-2 accent-red-500" value="" />
        <label htmlFor="" className="text-sm text-[#777]">
          Samsung
        </label>
      </div>
      <div className="flex mb-2">
        <input type="checkbox" className="mr-2 accent-red-500" value="" />
        <label htmlFor="" className="text-sm text-[#777]">
          Iphone
        </label>
      </div>
      <div className={`${location.pathname === '/store' ? `grid grid-cols-${grid} gap-4` : 'grid-cols-3'}`}>
        <div className={`${grid === 1 ? 'grid grid-cols-2 gap-x-2' : ''} product-card rounded-sm m-0`}>
          <div className="">
            <div className="product-wrapper">
              <Link to="/product/:id">
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg"
                  alt=""
                  className={`${grid === 1 ? 'w-40 h-40' : 'w-40 h-40'} object-cover mx-auto`}
                />
              </Link>
            </div>
            <div className="product-card__content">
              <div className="product-card__top">
                <Link to="/product/:id" className="product-title">iPhone 14 Pro Max 128GB</Link>
                <div className="product-card-bottom">
                  <div className="product-mmr-box">
                    <div className="bg-black text-white rounded-md text-center font-semibold flex-1 p-1">256 GB</div>
                    <div className="bg-[#e9ecef] text-[#555] rounded-md text-center font-semibold flex-1 p-1">512 GB</div>
                  </div>
                  <div className="price">
                    <div className="progress">
                    26.580.000₫<div className="progress-bar"></div>
                    </div>
                    <div className="strike-price flex flex-col">
                      <strike className="text-[#919191] text-sm self-end">29.990.000</strike>
                      <span className="text-[#a7a7b1] text-[12px] self-end">10 ngày 01:51:42</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-card__config bg-[#f8f9fa] rounded-sm">
                <div className="product-card__lazyload">
                  <img
                    src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/1/638212059275222181_nganhangvib.png"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <img
                    src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/5/637847745475943329_637846629514363952_ic-tp-bank.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <span className="text-[12px] text-[#555] mb-5">Giảm ngay 600.000đ khi mở thẻ TPBANK EVO</span>
              </div>
            </div>
          </div>
          
        </div> 
       
      </div>
    </div>
  );
};

export default Test;
