import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsHeadphones } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { AiOutlineShopping, AiOutlineUserAdd } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/T-gear-noBg.png';
import Navbar from './Navbar';
import Login from './Login';
const Header = () => {
  return (
    <>
      <header className="py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Header Left */}
            <div className="w-[150px]">
              <img src={Logo} alt="" />
            </div>
            {/* Header Search Main */}
            <div className="flex px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg ">
              <input
                type="text"
                placeholder="Bạn cần tìm gì ?"
                className="border-transparent header__search-input focus:border-transparent focus:ring-0"
              />
              <button className="ml-2">
                <BiSearch size={24} />
              </button>
            </div>
            {/* Header Right */}
            <div className="flex gap-2 items-center ml-2 group">
              <div className="header-action-item gap-x-2 text-main">
                <span>
                  <BsHeadphones size={30} />
                </span>
                <div className="flex">
                  <span>So sánh</span>
                </div>
              </div>
              <div className="header-action-item gap-x-2 text-main">
                <span>
                  <TiLocation size={30} />
                </span>
                <div className="flex ">
                  <span>Hệ Thống</span>
                </div>
              </div>{' '}
              <div className="header-action-item gap-x-2 text-main">
                <div className="flex items-center">
                  <span>
                    <AiOutlineUserAdd size={30} />
                  </span>
                  <Login className="">Dang nhap</Login>
                </div>
              </div>
              <Link to="/cart" className="header-action-item gap-x-2 text-main">
                <span>
                  <AiOutlineShopping size={30} />
                </span>
                <div className="flex relative">
                  <span>Giỏ hàng</span>
                </div>
              </Link>
           
              <div className="cursor-pointer header-action-item text-main">{/* <ToolTip /> */}</div>
            </div>
          </div>
        </div>
      </header>
      <header className="">
        <Navbar />
      </header>
    </>
  );
};

export default Header;
