import React, { useState } from "react";
import { Progress, Table, Statistic } from "antd";
import { Column } from "@ant-design/plots";
import { BsCurrencyDollar, BsBoxSeam, BsShield, BsChatLeft } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { FiBarChart, FiCreditCard, FiShoppingCart, FiStar } from "react-icons/fi";
// import { GoPrimitiveDot } from 'react-icons/go';
import { HiOutlineRefresh } from "react-icons/hi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { IoIosMore } from "react-icons/io";
import { Stacked, Pie, LineChart, SparkLine } from "../components";
import { SparklineAreaData } from "../data/dummy";
import SimpleCharts from "./BarChart";
import BasicLineChart from "../components/Charts/LineChart";
import CustomLineChart from "../components/Charts/CustomLineChart";
const Dashboard = () => {
  const data = [
    {
      type: "Tháng 1",
      sales: 38,
    },
    {
      type: "Tháng 2",
      sales: 52,
    },
    {
      type: "Tháng 3",
      sales: 61,
    },
    {
      type: "Tháng 4",
      sales: 145,
    },
    {
      type: "Tháng 5",
      sales: 48,
    },
    {
      type: "Tháng 6",
      sales: 38,
    },
    {
      type: "Tháng 7",
      sales: 38,
    },
    {
      type: "Tháng 8",
      sales: 38,
    },
    {
      type: "Tháng 9",
      sales: 38,
    },
    {
      type: "Tháng 10",
      sales: 38,
    },
    {
      type: "Tháng 11",
      sales: 38,
    },
    {
      type: "Tháng 12",
      sales: 38,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#435ebe";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
        fontSize: 16,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Tháng",
      },
      sales: {
        alias: "Thu nhập",
      },
    },
  };
  //    Table
  const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Tên",
      dataIndex: "name",
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
  // const data1 = [];
  // for (let i = 0; i < 46; i++) {
  //     data1.push({
  //         key: i,
  //         name: `Edward King ${i}`,
  //         age: 32,
  //         address: `London, Park Lane no. ${i}`,
  //         product: "Macbook M1 16 inch 512GB ",
  //     });
  // }
  const { currentColor, currentMode } = useStateContext();
  const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: "39,354",
      percentage: "-4%",
      title: "Khách Hàng",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red",
    },
    {
      icon: <BsBoxSeam />,
      amount: "4,396",
      percentage: "+23%",
      title: "Sản Phẩm",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green",
    },
    {
      icon: <FiBarChart />,
      amount: "423,39",
      percentage: "+38%",
      title: "Bán Hàng",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
      pcColor: "green",
    },
    {
      icon: <HiOutlineRefresh />,
      amount: "39,354",
      percentage: "-12%",
      title: "Hoàn Đơn",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red",
    },
  ];
  const recentTransactions = [
    {
      icon: <BsCurrencyDollar />,
      amount: "+$350",
      title: "Paypal Transfer",
      desc: "Money Added",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "green-600",
    },
    {
      icon: <BsShield />,
      amount: "-$560",
      desc: "Bill Payment",
      title: "Wallet",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
    },
    {
      icon: <FiCreditCard />,
      amount: "+$350",
      title: "Credit Card",
      desc: "Money reversed",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",

      pcColor: "green-600",
    },
    {
      icon: <TiTick />,
      amount: "+$350",
      title: "Bank Transfer",
      desc: "Money Added",

      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
      pcColor: "green-600",
    },
    {
      icon: <BsCurrencyDollar />,
      amount: "-$50",
      percentage: "+38%",
      title: "Refund",
      desc: "Payment Sent",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
    },
  ];
  const weeklyStats = [
    {
      icon: <FiShoppingCart />,
      amount: "-$560",
      title: "Top Sales",
      desc: "Johnathan Doe",
      iconBg: "#FB9678",
      pcColor: "red-600",
    },
    {
      icon: <FiStar />,
      amount: "-$560",
      title: "Best Seller",
      desc: "MaterialPro Admin",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "red-600",
    },
    {
      icon: <BsChatLeft />,
      amount: "+$560",
      title: "Most Commented",
      desc: "Ample Admin",
      iconBg: "#00C292",
      pcColor: "green-600",
    },
  ];
  const medicalproBranding = {
    data: [
      {
        title: "Due Date",
        desc: "Oct 23, 2021",
      },
      {
        title: "Budget",
        desc: "$98,500",
      },
      {
        title: "Expense",
        desc: "$63,000",
      },
    ],
    teams: [
      {
        name: "Bootstrap",
        color: "orange",
      },
      {
        name: "Angular",
        color: "#FB9678",
      },
    ],
    leaders: [
      {
        image: 1,
      },
      {
        image: 2,
      },
      {
        image: 3,
      },
      {
        image: 4,
      },
      {
        image: 5,
      },
    ],
  };
  return (
    <div>
      <div className="mt-24 container">
        {/* Doanh thu top */}
        <div className="flex flex-wrap justify-center lg:flex-nowrap">
          <div className="w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover cursor-pointer dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 pt-9 hover:drop-shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-black font-body">DOANH THU</p>
                <p className="text-2xl font-medium">
                  {(6344878).toLocaleString("it-IT", { style: "currency", currency: "VND" })}
                </p>
              </div>
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <BsCurrencyDollar />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1 m-3">
            {earningData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl"
                >
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <p className="mt-3">
                    <span className="mr-2 text-lg font-semibold">{item.amount}</span>
                    <span style={{ color: item.percentage.startsWith("+") ? "green" : "red" }} className="text-base">
                      {item.percentage}
                    </span>
                  </p>

                  <p className="mt-1 text-sm text-gray-400">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Doanh thu center */}
        <div className="flex gap-10 m-4 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Giao dịch gần đây</p>
              {/* <DropDown currentMode={currentMode} /> */}
            </div>
            <div className="mt-10 w-72 md:w-400">
              {recentTransactions.map((item) => (
                <div key={item.title} className="flex justify-between mt-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                {/* <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              /> */}
              </div>

              <p className="text-gray-400 text-sm mt-2">36 Giao dịch gần đây</p>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Biều đồ tổng quan</p>
              {/* <DropDown currentMode={currentMode} /> */}
            </div>
            <div className="md:w-full overflow-auto">
              <LineChart />
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-wrap justify-center">
          <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Weekly Stats</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>

            <div className="mt-10 ">
              {weeklyStats.map((item) => (
                <div key={item.title} className="flex justify-between mt-4 w-full">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{ background: item.iconBg }}
                      className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>

                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
              <div className="mt-4">
                {/* <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" /> */}
                <CustomLineChart/>
              </div>
            </div>
          </div>
          <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">MedicalPro Branding</p>
              <button type="button" className="text-xl font-semibold text-gray-400">
                <IoIosMore />
              </button>
            </div>
            <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
              16 APR, 2021
            </p>

            <div className="flex gap-4 border-b-1 border-color mt-6">
              {medicalproBranding.data.map((item) => (
                <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="border-b-1 border-color pb-4 mt-2">
              <p className="text-md font-semibold mb-2">Teams</p>

              <div className="flex gap-4">
                {medicalproBranding.teams.map((item) => (
                  <p
                    key={item.name}
                    style={{ background: item.color }}
                    className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <p className="text-md font-semibold mb-2">Leaders</p>
              <div className="flex gap-4">
                {medicalproBranding.leaders.map((item, index) => (
                  <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3"></div>

              <p className="text-gray-400 text-sm">36 Recent Transactions</p>
            </div>
          </div>
          <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Daily Activities</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              {/* <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            /> */}
              <div className="mt-8">
                <p className="font-semibold text-lg">React 18 coming soon!</p>
                <p className="text-gray-400 ">By Johnathan Doe</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the news you have shown here. There could be some great info.
                </p>
                <div className="mt-3">
                  {/* <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
