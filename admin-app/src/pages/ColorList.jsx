import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getColor } from "../features/color/colorSlice";
const ColorList = () => {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Tên",
      dataIndex: "title",
    },
    {
      title: "Sản phẩm",
      dataIndex: "product",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
  ];
  const { color } = useSelector((state) => state.color);
  console.log("colorState", color);
  useEffect(() => {
    dispatch(getColor());
  }, []);
  const data1 = [];
  for (let i = 0; i < color.length; i++) {
    data1.push({
      key: i + 1,
      title: color[i].title,
    });
  }
  return (
    <div>
      <h4 className="my-10 text-2xl font-sans font-medium uppercase">Danh sách màu</h4>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default ColorList;
