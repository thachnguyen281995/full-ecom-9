import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsImageFill, BsInfoCircle, BsCpuFill, BsDeviceSsd } from 'react-icons/bs';
import { BsFillCheckCircleFill, BsCollectionPlayFill } from 'react-icons/bs';
import { AiFillCamera, AiOutlineDropbox, AiOutlineMobile, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { GiAchievement } from 'react-icons/gi';
import { Tooltip, Popover, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import {Divider} from 'antd'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import BannerProduct from '../BannerProduct/BannerProduct';
import BottomSale from './BottomSale';
export default function ProductDetail() {
  const items = [
    {
      id: 1,
      ram: '128 GB',
      price: 26.58,
      oldPrice: 29.58
    },
    {
      id: 2,
      ram: '256 GB',
      price: 29.48,
      oldPrice: 32.99
    },
    {
      id: 3,
      ram: '512 GB',
      price: 35.99,
      oldPrice: 37.99
    },
    {
      id: 4,
      ram: '1TB',
      price: 41.99,
      oldPrice: 43.99
    }
  ];
  const productImage = [
    {
      id: 1,
      image:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054218956629637_ip-14-pro-max-den-1.jpg',
      image1:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054220350691584_ip-14-pro-max-tim-1.jpg'
    },
    {
      id: 2,
      image:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/9/638139579497269864_iphone-14pro-den-5.jpg',
      image1:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/9/638139575856757694_iphone-14pro-tim-5.jpg'
    },
    {
      id: 3,
      image:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/9/638139579498434541_iphone-14pro-den-4.jpg',
      image1:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/9/638139575856281592_iphone-14pro-tim-4.jpg'
    },
    {
      id: 4,
      image:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/25/638129177601274543_iphone-14prm-den-1.jpg',
      image1:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/25/638129177601901651_iphone-14prm-tim-1.jpg'
    },
    {
      id: 5,
      image:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/25/638129176877496345_iphone-14promax-1.jpg',
      image1:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/25/638129176877496345_iphone-14promax-1.jpg'
    },
    {
      id: 6,
      image:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/25/638129176875910469_iphone-14pro-14prm-2.jpg',
      image1:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/25/638129176875910469_iphone-14pro-14prm-2.jpg'
    },
    {
      id: 7,
      image:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/25/638129177600949647_iphone-14prm-den-3.jpg',
      image1:
        'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/25/638129177601588518_iphone-14prm-tim-3.jpg'
    }
  ];
  const productColor = [
    {
      id: 1,
      img: 'https://images.fpt.shop/unsafe/fit-in/38x38/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054218956629637_ip-14-pro-max-den-1.jpg',
      name: 'Đen'
    },
    {
      id: 2,
      img: 'https://images.fpt.shop/unsafe/fit-in/38x38/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054220350691584_ip-14-pro-max-tim-1.jpg',
      name: 'Tím'
    },
    {
      id: 3,
      img: 'https://images.fpt.shop/unsafe/fit-in/38x38/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054222139728415_ip-14-pro-max-vang-1.jpg',
      name: 'Vàng'
    },
    {
      id: 4,
      img: 'https://images.fpt.shop/unsafe/fit-in/38x38/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054217303176240_ip-14-pro-max-bac-1.jpg',
      name: 'Bạc'
    }
  ];
  const promoProduct = [
    {
      id: 1,
      name: 'Củ sạc Apple Power Adapter 20W Type-C',
      price: (520000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      oldPrice: (549000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      image:
        'https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/20/637387863045167961_pk-apple-00720432-dd.png'
    },
    {
      id: 2,
      name: 'Ốp lưng iPhone 14 Pro Max Silicone Case with MagSafe',
      price: (1340000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      oldPrice: (1590000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      image:
        'https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/13/638065491421965102_op-lung-iphone-14-pro-max-silicone-case-with-magsafe-dd.jpg'
    },
    {
      id: 3,
      name: 'Tai nghe AirPods Pro 2022',
      price: (5990000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      oldPrice: (6990000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      image:
        'https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/8/637982433040096193_tai-nghe-airpods-pro-2022-dd.jpg'
    },
    {
      id: 4,
      name: 'Dây sạc Apple Magsafe Charger to USB-C Cable 1m',
      price: (990000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      oldPrice: null,
      image:
        'https://images.fpt.shop/unsafe/fit-in/68x68/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/21/637756950346589456_day-sac-magsafe-charger-to-usb-c-cable-1-m-trang-dd.jpg'
    }
  ];
  const [activeItem, setActiveItem] = useState(items[0].id);
  const [activeColor, setActiveColor] = useState(productColor[0].id);
  const [textColor, setTextColor] = useState(productColor[0].name);
  const [price, setPrice] = useState(items[0].price);
  const [oldPrice, setOldPrice] = useState(items[0].oldPrice);
  const [selectedOption, setSelectedOption] = useState('option1');
  const handleSelectColor = (idColor) => {
    setActiveColor(idColor);
    setTextColor(productColor.find((item) => item.id === idColor).name);
  };
  const handleClick = (id) => {
    setActiveItem(id);
    setPrice(items.find((item) => item.id === id).price);
    setOldPrice(items.find((item) => item.id === id).oldPrice);
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const buttonHover = () => {
    return (
      <div className="btn-loyalty tooltip tooltip-right">
        <span className="font-sans text-sm">
          Điểm thưởng nhận được khi mua hàng. Quý khách có thể sử dụng đổi thành Voucher khi thanh toán. Lưu ý, không áp
          dụng Trả góp.
        </span>
        <strong></strong>
      </div>
    );
  };
  
  return (
    <>
      <div className='container mx-auto'>
        <div className="pt-[10px] 1-pd-top flex justify-between">
            <h1 className="font-sans text-2xl font-medium text-primary">iPhone 14 Pro Max 128GB</h1>
            <div className="flex items-center text-sm text-blue-500 gap-x-2">
              <span>745 đánh giá</span>
              <span>1481 Hỏi & đáp</span>
              <span>So sánh</span>
            </div>
        </div>
          <Divider />
          <div className="grid grid-cols-2 gap-x-10 pd-header">
            {/* Left */}
            <div className="row-span-1 st-slider product-sale">
              <div className="st-slider__promo-box">
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x429/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/17/638252151175822366_frame-detail-585x428.png"
                  alt=""
                  className=""
                />
                <p className="relative text-center left-[50%] top-[-40px] translate-x-[-50%] text-white uppercase text-4xl">
                  Giảm
                  <span className="font-medium text-[#fbee35] text-4xl ml-2">3.410.000</span>
                </p>
              </div>
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper3 swiperCard"
              >
                {productImage.map((item) => {
                  return (
                    <SwiperSlide className="product-slider" key={item.id}>
                      {activeColor === 1 && <img src={item.image} alt="" className="" />}
                      {activeColor === 2 && <img src={item.image1} alt="" className="" />}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="flex justify-center my-5 mt-12 st-slider__feature gap-x-2">
                <Link className="px-5 text-center st-slider__feature__item">
                  <span>
                    <BsImageFill size={40} />
                  </span>
                  <p className="font-sans text-sm text-[#495057]">Xem thêm ảnh</p>
                </Link>
                <Link className="px-5 text-center st-slider__feature__item">
                  <span>
                    <BsCollectionPlayFill size={40} />
                  </span>
                  <p className="font-sans text-sm text-[#495057]">Video trên tay</p>
                </Link>
                <Link className="px-5 text-center st-slider__feature__item">
                  <span>
                    <AiOutlineDropbox size={40} />
                  </span>
                  <p className="font-sans text-sm text-[#495057]">Trong hộp có gì</p>
                </Link>
              </div>
              <div className="st-param">
                <ul className="">
                  <li className="flex items-center mb-2">
                    <span className="mr-2">
                      <AiOutlineMobile style={{ color: '#b6bfc7' }} size={20} />
                    </span>
                    <p className="text-[#495057]">6.7 inch, Super Retina XDR, 2796 x 1290 Pixels</p>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">
                      <AiFillCamera style={{ color: '#b6bfc7' }} size={20} />
                    </span>
                    <p className="text-[#495057]">48.0 MP + 12.0 MP + 12.0 MP </p>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">
                      <AiOutlineVideoCameraAdd style={{ color: '#b6bfc7' }} size={20} />
                    </span>
                    <p className="text-[#495057]">12.0 MP </p>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">
                      <BsCpuFill style={{ color: '#b6bfc7' }} size={20} />
                    </span>
                    <p className="text-[#495057]">Apple A16 Bionic</p>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">
                      <BsDeviceSsd style={{ color: '#b6bfc7' }} size={20} />
                    </span>
                    <p className="text-[#495057]">128 GB</p>
                  </li>
                </ul>
                <Link className="font-sans text-sm re-link">Xem chi tiết thông số kỹ thuật</Link>
              </div>
              <div className="st-policy">
                <div className="mr-5 st-policy__item">
                  <img
                    src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690446491/t-gear-ecom/quality.8529b3fec89f77c472ea_xefzbh.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <span className="text-sm text-[#444b52]">Hàng chính hãng - Bảo hành 12 Tháng</span>
                </div>
                <div className="st-policy__item">
                  <img
                    src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690446837/t-gear-ecom/delivery.fcff17afe667d3ab88c4_qiha2k.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <span className="text-sm text-[#444b52]">Giao hàng toàn quốc</span>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="row-span-3 product-info">
              <div className="flex justify-between st-price">
                <div className="flex items-center st-price-left">
                  <div className="mr-2 text-3xl font-medium st-price-main text-redcb">{price}0.000₫</div>
                  <div className="text-xl st-price-sub">
                    <strike className="text-[#99a2aa]">{oldPrice}0.000₫</strike>
                  </div>
                </div>
                <div className="st-price-right flex flex-col text-[#555]">
                  <span className="text-sm text-end">Trả góp chỉ từ </span>
                  <span>
                    <strong className="text-sm">1.960.500₫/</strong>
                    tháng
                  </span>
                </div>
              </div>
              <div className="mb-4 loyalty">
                <Tooltip title={buttonHover} placement="right">
                  <span className="items-center gap-x-1 bg-[#fefae8] inline-flex py-[3px] px-1 rounded-[100px] border-[1px] border-[#fdf1ba]">
                    <span className="w-4 h-4 rounded-full bg-[#f6c743] text-white flex justify-center items-center font-sans text-[11px] border-[#efb140] border-[1px]">
                      F
                    </span>
                    <span className="text-[#b7791f] text-sm font-sans font-semibold">+6607 điểm thưởng dự kiến</span>
                    <BsInfoCircle className="text-[#efb140] cursor-pointer" />
                  </span>
                </Tooltip>
              </div>
              <div className="flex w-full mb-4 wrapper-select ">
                {items.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`${
                        activeItem === item.id ? 'bg-[#edeeef] rounded-lg' : ''
                      } flex gap-x-2 p-2 text-[#444b52] flex-col w-[25%] cursor-pointer  hover:bg-[#edeeef]`}
                      onClick={() => handleClick(item.id)}
                    >
                      <div className="flex items-center text-sm font-medium gap-x-1">
                        <input
                          type="radio"
                          name="radio"
                          id={item.id}
                          value={item.id}
                          className="input-text"
                          checked={activeItem === item.id}
                          onChange={() => handleClick(item.id)}
                        />
                        {item.ram}
                      </div>
                      <p className="text-[15px]">{item.price}0.000₫</p>
                    </div>
                  );
                })}
              </div>
              <div className="mb-4 st-select-color">
                {productColor.map((item) => {
                  return (
                    <div className="st-select-color__item" onClick={() => handleSelectColor(item.id)} key={item.id}>
                      <div className={`${activeColor === item.id ? 'activeProductColor' : ''} img-color`}>
                        <img src={item.img} alt="" />
                      </div>
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="st-boxPromo">
                <div className="title">Chọn 1 trong 2 khuyến mãi sau</div>
                <ul className="st-boxPromo__list">
                  <li>
                    <div className="radio">
                      <input
                        type="radio"
                        name="promotion1"
                        id="promotion1_1"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="promotion1_1" className={`${selectedOption === 'option1' ? 'font-medium' : ''}`}>
                        Giảm ngay 3.410.000đ áp dụng khi mua màu {textColor} đến 27/07
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="radio">
                      <input
                        type="radio"
                        name="promotion2"
                        id="promotion1_2"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="promotion1_2" className={`${selectedOption === 'option2' ? 'font-medium' : ''}`}>
                        {' '}
                        Trả góp 0%
                      </label>
                    </div>
                  </li>
                </ul>
                <div className="title title--more">
                  <span>Ưu đãi thêm</span>
                </div>
                <ul className="st-boxPromo__list st st-boxPromo__list--more">
                  <li className="flex items-center mb-2">
                    <BsFillCheckCircleFill className="mr-1 text-green-500" size={16} />
                    <div>
                      <span className="mr-1">Giảm đến 30% hệ sinh thái Apple</span>
                      <Link to="/" className="text-blue-500 re-link">
                        {' '}
                        Xem chi tiết
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <BsFillCheckCircleFill className="mr-1 text-green-500 re-link" size={16} />
                    <div>
                      <span className="mr-1">Thu cũ đổi mới trợ giá ngay đến 2 triệu (SmartExchange)</span>
                      <Link to="/" className="text-blue-500 re-link">
                        Xem chi tiết
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-4 st-boxFeature">
                <ul>
                  <li className="flex items-center mb-2">
                    <label htmlFor="check2" className="img">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/48x48/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/4/637846629514363952_ic-tp-bank.jpg"
                        alt=""
                        className="w-12 h-12"
                      />
                      <div className="e-label-pos">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="promotion3"
                            className="w-4 h-4 form-check-input"
                            id="check2"
                            value="77096"
                          />
                        </div>
                      </div>
                    </label>
                    <div>
                      <p className="title text-sm font-sans text-[#444b52] font-medium">EVO</p>
                      <span className="text-sm font-sans text-[#444b52]">
                        Giảm ngay 20% tối đa 1.000.000đ khi mở thẻ đồng thương hiệu TPBANK EVO
                      </span>
                      <Link to="/" className="text-sm re-link">
                        Xem chi tiết
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <label htmlFor="check2" className="img">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/48x48/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/14/637828748513420662_Kredio.jpg"
                        alt=""
                        className="w-12 h-12"
                      />
                      <div className="e-label-pos">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="promotion3"
                            className="w-4 h-4 form-check-input"
                            id="check2"
                            value="77096"
                          />
                        </div>
                      </div>
                    </label>
                    <div>
                      <p className="title text-sm font-sans text-[#444b52] font-medium">Thanh toán Kredivo</p>
                      <span className="text-sm font-sans text-[#444b52]">
                        Giảm ngay 5% tối đa 500.000 đồng khi thanh toán trả góp 6/12 tháng qua Kredivo
                      </span>
                      <Link to="/" className="text-sm re-link">
                        Xem chi tiết
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mb-4 st-pd-btn">
                <button className="bg-red-600 hover:bg-red-800 w-full rounded-[4px] py-[10px] px-[32px] mb-1">
                  <div className="text-xl text-white uppercase">Mua Ngay</div>
                  <p className="text-white text-[13px]">Giao hàng miễn phí hoặc nhận tại shop</p>
                </button>
                <div className="flex gap-x-2">
                  <div className="bg-blue-600 cursor-pointer btn-half hover:bg-blue-800">
                    <div className="text-xl text-white uppercase">TRẢ GÓP 0%</div>
                    <p className="text-white text-[13px]">Duyệt nhanh qua điện thoại</p>
                  </div>
                  <div className="bg-blue-600 cursor-pointer btn-half hover:bg-blue-800">
                    <div className="text-xl text-white uppercase">TRẢ GÓP QUA THẺ</div>
                    <p className="text-white text-[13px]">Visa, Master Card, JCB, AMEX</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-4 st-pd-normal">
                <div className="hotline text-sm text-[#444b52] font-sans ">
                  Gọi
                  <Link to="#" className="text-sm font-medium text-redcb">
                    {' '}
                    1800-6601{' '}
                  </Link>
                  để được tư vấn mua hàng (Miễn phí)
                </div>
                <Link to="/" className="text-sm text-blue-500">
                  Tìm shop có hàng gần nhất
                </Link>
              </div>
              <div className="text-sm st-oldProduct">
                <p className="cursor-pointer hover:text-blue-500">Mua hàng cũ: iPhone 14 Pro Max 128GB</p>
                <p>
                  Giá từ:
                  <span className="text-sm text-redcb"> 23.612.000₫</span>
                </p>
              </div>
              <div className="st-promoProduct">
                <div className="mb-2 text-sm font-medium title">Gợi ý sản phẩm mua kèm</div>
                <div className="flex flex-col st-promoProduct__wrapper">
                  {promoProduct.map((item) => {
                    return (
                      <div className="flex items-center justify-between" key={item.id}>
                        <div className="flex gap-x-2">
                          <div className="flex mb-2 img" key={item.id}>
                            <span>
                              <Link>
                                <img src={item.image} alt="" className="object-cover mr-2 w-15 h-15" />
                              </Link>
                            </span>
                          </div>
                          <div className="flex-1 mt-2 info">
                            <div className="top text-sm mb-2 text-[#495057]">{item.name}</div>
                            <div className="flex gap-x-2">
                              <div className="text-sm font-medium re-price text-redcb">{item.price}</div>
  
                              <strike className="re-price-strike text-[#99a2aa] text-sm">
                                {`${item.oldPrice === null ? '' : item.oldPrice}`}
                              </strike>
                            </div>
                          </div>
                        </div>
                        <div className="addToCart text-xs border border-[#ccc] py-1 px-2 rounded-md text-[#495057] cursor-pointer hover:bg-[#e9ecef]">
                          Thêm vào giỏ hàng
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
      </div>
        <BottomSale/>
    </>
  );
}
