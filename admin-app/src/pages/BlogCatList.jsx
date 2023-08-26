import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogCategory } from "../features/bcategory/bcategorySlice";
import { Link } from "react-router-dom";
const BlogCatList = () => {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "STT",
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
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  useEffect(() => {
    dispatch(getBlogCategory());
  }, []);
  const { blogcategory } = useSelector((state) => state.blogcategory);
  const data1 = [];
  for (let i = 0; i < blogcategory.length; i++) {
    data1.push({
      key: i + 1,
      title: blogcategory[i].title,
      action: (
        <>
          <div className="flex gap-x-2">
            <Link to="/" className="text-[#00c9db] border border-[#00c9db] p-1 rounded-[.25rem] hover:bg-[#00c9db] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </Link>
            <Link to="/" className="text-[#ed4c78] border border-[#ed4c78] p-1 rounded-[.25rem] hover:bg-[#ed4c78] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </Link>
          </div>
        </>
      ),
    });
  }
  return (
    <div>
      <h4 className="my-10 text-2xl font-sans font-medium uppercase">Danh mục Blog</h4>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default BlogCatList;
