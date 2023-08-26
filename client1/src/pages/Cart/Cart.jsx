import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import QuantityButton from '../../components/QuantityButton';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import './styles.css';
const Cart = () => {
  const [discount, setDiscount] = useState(0);
  const value1 = 52749000 ;
  const value2 = 7190000;
  const subtotal = (value1 + value2).toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  const total = value1 + value2 - (value1 + value2) * (discount / 100);
  const formattedTotal = total.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  const handleApplyDiscount = () => {
    setDiscount(10);
  };
  
  return (
    <>
      <Meta title={'Giỏ hàng'} />
      <BreadCrumb title="Giỏ hàng" />
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-x-5 py-5">
          {/* Left */}
          <div className="col-span-7">
            <h3 className="uppercase font-sans mb-4">Thông tin giao hàng</h3>
            <div className="wrapper-info bg-white rounded-md p-4">
              <form action="" className="grid grid-cols-2 gap-x-3">
                <div className="flex flex-col">
                  <label htmlFor="name1" className="mb-2 text-sm font-medium">
                    Họ và tên
                  </label>
                  <input id="name1" type="text" placeholder="Nguyễn Ngọc Thạch" className="border py-2 px-2 mb-2" />

                  <label htmlFor="email1" className="mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input id="email1" type="email" className="border p-2 mb-2" placeholder="email@gmail.com" />

                  <label htmlFor="address" className="mb-2 text-sm font-medium">
                    Địa chỉ
                  </label>
                  <input id="name1" type="text" placeholder="108 Lê Thánh Tôn" className="border py-2 px-2 mb-2" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name2" className="mb-2 text-sm font-medium">
                    Phone
                  </label>
                  <input type="text" id="name2" placeholder="09*****2549" className="border py-2 px-2 mb-2" />
                </div>
              </form>
            </div>
            <h3 className="uppercase font-sans my-4">Phương thức thanh toán</h3>
            <div className="bg-white rounded-md p-4 method-payment">
              <form action="" className="flex items-center justify-between">
                <div className='flex items-center gap-x-2'>
                  <input type="radio" id="pay1" name="pay" value="pay1" />
                  <label htmlFor="pay1">Thanh toán online</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input type="radio" id="pay2" name="pay" value="pay2" />
                  <label htmlFor="pay2">Thanh toán COD</label>
                </div>
                <div className='flex items-center gap-x-2'>
                  <input type="radio" id="pay3" name="pay" value="pay3" />
                  <label htmlFor="pay3">Phương thức thanh toán khác</label>
                </div>
              </form>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-5">
            <h3 className="uppercase font-sans mb-4">Đơn hàng</h3>
            <div className="wrapper-info bg-white rounded-md">
              <div className="cart-item flex items-center px-4">
                <div className="flex gap-x-2 mt-4">
                  <img
                    src="https://cdn.tgdd.vn/Products/Images/44/253636/apple-macbook-pro-16-m1-pro-2021-10-core-cpu-600x600.jpg"
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="font-medium font-sans text-sm">
                      MacBook Pro 14 inch M2 Pro 2023 10CPU 16GPU 32GB/512GB
                    </h3>
                    <span className="text-secondary text-[11px]">(No.00857496)</span>
                    <p className="font-medium">
                      {value1.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </p>
                  </div>
                </div>
                <div className="button-quantity">
                  <QuantityButton />
                </div>
              </div>
              <Divider className="" />
              <div className="cart-item flex items-center px-4">
                <div className="flex gap-x-2">
                  <img
                    src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689925283/t-gear-ecom/637986015090330798_apple-watch-se-2-gps-cellular-40mm-trang-dd_zisi4b.jpg"
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="font-medium font-sans text-sm">
                      Apple Watch SE 2 GPS + Cellular 40mm viền nhôm dây cao su
                    </h3>
                    <span className="text-secondary text-[11px]">(No.00832931)</span>
                    <p className="font-medium">
                      {value2.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </p>
                  </div>
                </div>
                <div className="button-quantity">
                  <QuantityButton />
                </div>
              </div>
              <Divider />
              <div className="subtotal">
                <div className="px-4 flex justify-between">
                  <h3 className="font-sans text-base text-grayf5">Tạm tính</h3>
                  <p className="font-medium">{subtotal}</p>
                </div>
                <div className="px-4 flex justify-between items-center">
                  <div>
                    <button
                      onClick={handleApplyDiscount}
                      className="font-sans text-sm text-white px-2 py-1 bg-red-700 hover:bg-red-800"
                    >
                      Phiếu giảm giá
                    </button>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm mr-2 text-red-400">Giảm thêm</p>
                    <p className="font-medium">{discount}%</p>
                  </div>
                </div>
              </div>
              <Divider className="" />
              <div className="totalPrice pb-4">
                <div className="px-4 flex justify-between">
                  <h3 className="font-sans text-base text-grayf5">Tổng tiền</h3>
                  <p className="font-medium">{formattedTotal}</p>
                </div>
                <div className="px-4 flex justify-center mt-4">
                      <Link to="/checkout" className="px-4 py-2 bg-redcb text-white rounded-sm w-full uppercase hover:bg-red-700 text-center">
                        Đặt Hàng
                      </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
