import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import Rating from '../../Helmet/Rating/Rating';
import SelectDropDown from '../../Helmet/Select/Select';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineBars } from 'react-icons/ai';
import './styles.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import BannerProduct from '../../components/BannerProduct/BannerProduct';
const OurStore = () => {
  const [grid, setGrid] = useState(3);
  const [activeTab, setActiveTab] = useState('');
  const [toggle, setToggle] = useState(true);
  const [secondToggle, setSecondToggle] = useState(false);
  const handleActive = (tabName) => {
    setActiveTab(tabName);
  };
  const gridSetter = (i) => {
    if (i === 3) {
      handleActive('tab1');
      setToggle(true);
      setSecondToggle(false);
    } else if (i === 1) {
      handleActive('tab2');
      setToggle(false);
      setSecondToggle(true);
    }
    setGrid(i);
  };
  const imageCarousel = [
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690452351/t-gear-ecom/638252265551520212_F-C1_1200x300iP13_20EVO_uytqce.png',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690452345/t-gear-ecom/638257810585217123_F-C1_1200x30014PRM_20580_ymiyfr.png',
  ];
  return (
    <>
      <Meta title={'Cửa Hàng'} />
      <BreadCrumb title="Cửa Hàng" />
      <BannerProduct imageCarousel={imageCarousel}/>
      <div className="container grid grid-cols-12 gap-4 mx-auto">
        <div className="col-span-3">
          <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
            <h3 className="mb-5 text-base font-semibold text-primary">Danh mục</h3>
            <div>
              <ul className="text-sm leading-7 ">
                <li className=" text-[#777] cursor-pointer w-fit">Đồng Hồ</li>
                <li className=" text-[#777] cursor-pointer w-fit">TV</li>
                <li className=" text-[#777] cursor-pointer w-fit">Camera</li>
                <li className=" text-[#777] cursor-pointer w-fit">Laptop</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
            <h3 className="mb-5 text-base font-semibold text-primary">Lọc</h3>
            <div>
              <div className="flex mb-2">
                <input type="checkbox" className="mr-2 accent-red-500" value="" />
                <label htmlFor="" className="text-sm text-[#777]">
                  Trong kho (1)
                </label>
              </div>
              <div className="flex mb-2">
                <input type="checkbox" className="mr-2 accent-red-500" value="" />
                <label htmlFor="" className="text-sm text-[#777]">
                  Trong kho (1)
                </label>
              </div>
            </div>
            <h3 className="my-5 text-base font-semibold text-primary">Giá</h3>
            <div className="grid grid-cols-2 gap-x-2">
              <div className="p-1 mb-2 overflow-hidden border bg-whitelight">
                <input type="email" className="p-1 mr-2 overflow-hidden text-sm" placeholder="Từ" />
                <label htmlFor="floatingInput" className="text-sm text-[#777]"></label>
              </div>
              <div className="p-1 mb-2 overflow-hidden border bg-whitelight">
                <input type="email" className="mr-2 text-sm" placeholder="Đến" />
                <label htmlFor="floatingInput1" className="text-sm text-[#777]"></label>
              </div>
            </div>
            <h3 className="my-5 text-base font-semibold text-primary">Màu sắc</h3>
            <div className="">
              <ul className="flex flex-wrap gap-2">
                <li className="w-5 h-5 bg-red-500 rounded-full"></li>
                <li className="w-5 h-5 bg-red-500 rounded-full"></li>
                <li className="w-5 h-5 bg-red-500 rounded-full"></li>
                <li className="w-5 h-5 bg-red-500 rounded-full"></li>
                <li className="w-5 h-5 bg-red-500 rounded-full"></li>
                <li className="w-5 h-5 bg-red-500 rounded-full"></li>
                <li className="w-5 h-5 bg-red-500 rounded-full"></li>
                <li className="w-5 h-5 bg-red-500 rounded-full"></li>
              </ul>
            </div>
            <h3 className="my-5 text-base font-semibold text-primary">Kích thước</h3>
            <div>
              <div className="form-check">
                <input type="checkbox" className="mr-2 text-sm" id="color-1" />
                <label htmlFor="color-1" className="text-sm text-[#777]">
                  S (2)
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="mr-2 text-sm" id="color-2" />
                <label htmlFor="color-2" className="text-sm text-[#777]">
                  M (2)
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
            <h3 className="mb-5 text-base font-semibold text-primary">Sản phẩm Tags</h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-whitelight py-1 px-2 bg-[#8294C4] cursor-pointer rounded-sm">Tai nghe</span>
              <span className="text-sm text-white py-1 px-2 bg-[#5C469C] cursor-pointer rounded-sm">Laptop</span>
              <span className="text-sm text-whitelight py-1 px-2 bg-[#025464] cursor-pointer rounded-sm">Mobile</span>
              <span className="text-sm text-whitelight py-1 px-2 bg-[#27374D] cursor-pointer rounded-sm">Oppa</span>
              <span className="text-sm text-whitelight py-1 px-2 bg-[#B70404] cursor-pointer rounded-sm">Apple</span>
            </div>
          </div>
          <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
            <h3 className="mb-5 text-base font-semibold text-primary">Sản phẩm ngẫu nhiên</h3>
            <div className="grid items-center grid-cols-2 pb-2 border-underline">
              <div className="w-20 mx-auto">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689852577/t-gear-ecom/638161092136822060_xiaomi-redmi-10-2022-dd-docquyen_t3fz1s.webp"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="product-random__info">
                <h1 className="mb-2 text-sm font-semibold text-primary">Tai nghe AirPods 3 2022 Hộp sạc dây</h1>
                <Rating customSize={15} />
                <p className="mt-2 text-sm font-semibold text-redcb">4.250.000₫</p>
              </div>
            </div>
            <div className="grid items-center grid-cols-2 pb-2 mt-2">
              <div className="w-20 mx-auto">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689925283/t-gear-ecom/637986015090330798_apple-watch-se-2-gps-cellular-40mm-trang-dd_zisi4b.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="product-random__info">
                <h1 className="mb-2 text-sm font-semibold text-primary">Apple Watch SE 2 GPS </h1>
                <Rating customSize={15} />
                <p className="mt-2 text-sm font-semibold text-redcb">7.490.000₫</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <div className="bg-white rounded-md py-[10px] px-[15px] flex justify-between mb-4">
            <div>
              <span className="mr-2 text-sm">Ưu tiên xem: </span>
              <SelectDropDown />
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-sm">21 Sản phẩm</p>
              <div className="flex items-center gap-x-2">
                <div className="flex items-center">
                  <CgMenuGridR size={30} onClick={() => gridSetter(3)} className={`${toggle ? 'text-red-500' : ''}`} />
                  <AiOutlineBars
                    size={30}
                    onClick={() => gridSetter(1)}
                    className={`${secondToggle ? 'text-red-500' : ''} `}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md py-[10px] px-[15px] ">
            <ProductCard grid={grid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
