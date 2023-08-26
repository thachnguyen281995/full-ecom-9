import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineBgColors } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiCategoryAlt, BiLogoBlogger } from "react-icons/bi";
import {AiFillHome,AiFillPlusSquare} from 'react-icons/ai'
import {BsReverseListColumnsReverse} from 'react-icons/bs'
import { SiBrandfolder } from "react-icons/si";
import { FaClipboardList } from "react-icons/fa";
import {ImListNumbered} from 'react-icons/im'
import {AiFillFileAdd} from 'react-icons/ai'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const navigation = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={100}
        style={{ fontWeight: "500" }}
        width={350}
        
      >
        <div className="p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 items-center flex ">
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690554942/t-gear-ecom/logo-title_izlwdz.png"
            alt=""
            className="h-12 w-12 mr-3 sm-logo"
          />
          <div className="lg-logo text-white font-semibold text-2xl flex">
            <img
              src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690554942/t-gear-ecom/logo-title_izlwdz.png"
              alt=""
              className="h-12 w-12 mr-3"
            />
            <span className="self-end text-2xl">Gear</span>
          </div>
        </div>
        <Menu
          className="font-sans mt-4"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigation(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiFillHome />,
              label: "Bảng Điều Khiển",
            },
            {
              key: "khach-hang",
              icon: <GroupIcon />,
              label: "Khách Hàng",
            },
            {
              key: "danhmuc",
              icon: <DashboardIcon />,
              label: "Danh Mục",
              children: [
                { key: "themsanpham", icon: <AiOutlineShoppingCart />, label: "Thêm sản phẩm" },
                { key: "danhsachspham", icon: <AiOutlineShoppingCart />, label: "Danh sách sản phẩm" },
                { key: "thuonghieu", icon: <SiBrandfolder />, label: "Thương hiệu" },

                { key: "danhsach-thuonghieu", icon: <SiBrandfolder />, label: "Danh sách thương hiệu" },
                { key: "list-danhmuc", icon: <SiBrandfolder />, label: "Danh sách danh mục" },
                { key: "add-color", icon: <AiOutlineBgColors />, label: "Thêm Color" },
                { key: "list-color", icon: <AiOutlineBgColors />, label: "Danh sách Color" },
              ],
            },
            {
              key: "order",
              icon: <FaClipboardList />,
              label: "Đơn Đặt Hàng",
            },
            {
              key: "blog",
              icon: <EditNoteIcon />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <AiFillFileAdd />,
                  label: "Thêm Blog",
                },
                {
                  key: "blog-list",
                  icon: <BsReverseListColumnsReverse />,
                  label: "Danh sách blog",
                },
                {
                  key: "blog-category",
                  icon: <AiFillPlusSquare />,
                  label: "Thêm danh mục blog",
                },
                {
                  key: "blog-category-list",
                  icon: <ImListNumbered />,
                  label: "List danh mục blog",
                },
              ],
            },
            {
              key: "tracuu",
              icon: <EventNoteIcon />,
              label: "Tra Cứu",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="main-container"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 10,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
