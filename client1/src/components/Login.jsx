import React, { useState } from 'react';
import { Button, Modal, Form } from 'antd';

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsModal2Open(false);
    setIsModal3Open(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModal2Open(false);
    setIsModal3Open(false);
  };

  const showNestedModal = () => {
    setIsModalOpen(false); // Close Modal 1
    setIsModal2Open(true); // Open Modal 2
  };

  const handleNestedOk = () => {
    setIsModal2Open(false); // Close Modal 2
    setIsModalOpen(true); // Open Modal 1
  };

  const handleNestedCancel = () => {
    setIsModal2Open(false); // Close Modal 2
    setIsModalOpen(true); // Open Modal 1
  };

  const showThirdModal = () => {
    setIsModal2Open(false); // Close Modal 2
    setIsModal3Open(true); // Open Modal 3
  };

  const handleThirdOk = () => {
    setIsModal3Open(false); // Close Modal 3
    setIsModal2Open(true); // Open Modal 2
  };

  const handleThirdCancel = () => {
    setIsModal3Open(false); // Close Modal 3
    setIsModal2Open(true); // Open Modal 2
  };
  const handleFourCancel = () => {
    setIsModal3Open(false);
    setIsModalOpen(true)
  }
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <span type="primary" onClick={showModal}>
        Đăng nhập
      </span>
      <Modal title="Đăng Nhập" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="py-4 ">
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690012930/t-gear-ecom/img-login_qgiill.png"
            alt=""
            className="max-w-[156px] mx-auto"
          />
        </div>
        <Form form={form} onFinish={handleSubmit} className="max-w-[414px] mx-auto">
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md mb-4">
            <input type="email" name="email" placeholder="Email" className="form-control text-base w-full" />
          </div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
            <input type="password" name="password" placeholder="Mật khẩu" className="form-control text-base w-full" />
          </div>
        </Form>
        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className=" text-white bg-red-700 rounded-md py-2 px-4 font-sans text-xl hover:bg-red-800"
          >
            Tiếp tục
          </button>
        </div>
        <div className="text-end font-sans">
          <span className="text-grayf5 hover:text-blue-400 cursor-pointer text-sm" onClick={showNestedModal}>
            Quên mật khẩu
          </span>
        </div>
      </Modal>
      <Modal title="Quên Mật Khẩu" open={isModal2Open} onOk={handleOk} onCancel={handleCancel}>
        <div className="py-4">
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690078699/t-gear-ecom/reset-password_tj9zxe.svg"
            alt=""
            className="max-w-[156px] mx-auto"
          />
        </div>
        <Form form={form} onFinish={handleSubmit} className="max-w-[414px] mx-auto">
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md mb-4">
            <input type="email" name="email" placeholder="Email" className="form-control text-base w-full" />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className=" text-white bg-red-700 rounded-md py-2 px-4 font-sans text-xl hover:bg-red-800"
            >
              Khôi phục
            </button>
          </div>
          <div className="text-end font-sans"></div>
        </Form>
        <div className="text-end font-sans">
          <span className="text-grayf5 hover:text-blue-400 cursor-pointer mr-2" onClick={handleNestedCancel}>
            Đăng nhập
          </span>
          <span className="text-grayf5 hover:text-blue-400 cursor-pointer" onClick={showThirdModal}>
            Đăng ký
          </span>
        </div>
      </Modal>
      <Modal title="Tạo Tài Khoản" open={isModal3Open} onOk={handleOk} onCancel={handleCancel}>
        <div className="py-4 ">
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690020246/t-gear-ecom/undraw_forgot_password_gi2d_b5s1tk.png"
            alt=""
            className="max-w-[156px] mx-auto"
          />
        </div>
        <Form form={form} onFinish={handleSubmit} className="max-w-[414px] mx-auto">
        <div className="border-[#cbd1d6] border py-2 px-4 rounded-md mb-4">
            <input type="text" name="name" placeholder="Tên" className="form-control text-base w-full" />
          </div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md mb-4">
            <input type="email" name="email" placeholder="Email" className="form-control text-base w-full" />
          </div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md mb-4">
            <input type="phone" name="phone" placeholder="Số điện thoại" className="form-control text-base w-full" />
          </div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
            <input type="password" name="password" placeholder="Mật khẩu" className="form-control text-base w-full" />
          </div>
        </Form>
        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className=" text-white bg-red-700 rounded-md py-2 px-4 font-sans text-xl hover:bg-red-800"
          >
            Tiếp tục
          </button>
        </div>
        <div className="text-end font-sans">
        <span className="text-grayf5 hover:text-blue-400 cursor-pointer" onClick={handleFourCancel}>
            Đăng nhập
          </span>
        </div>
      </Modal>
    </>
  );
};

export default Login;
