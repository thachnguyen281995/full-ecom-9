import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice";
const Customer = () => {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
    },
    {
      title: "Tên",
      dataIndex: "firstName",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Số điện thoại",
      dataIndex: "mobile",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const { customers } = useSelector((state) => state.customer);
  const data = [];
  for (let i = 0; i < customers.length; i++) { 
    if (customers[i].role !== 'admin') {
      data.push({
        key: i + 1,
        firstName: customers[i].lastName + " " + customers[i].firstName,
        email:customers[i].email,
        mobile: customers[i].mobile,
        address: customers[i].address,
      });
    }
  }
  return (
    <div className="font-sans">
      <h4 className="my-10 text-2xl font-sans font-medium uppercase">Khách Hàng</h4>
      <Table columns={columns} dataSource={data} className="font-sans" />
    </div>
  );
};

export default Customer;
