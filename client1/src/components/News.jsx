import React from 'react';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="max-w-6xl mx-auto py-5">
      <div className="mx-auto max-w-2xl text-center"></div>
      <Tabs
        defaultActiveKey="1"
        tabBarStyle={{
          color: 'black'
        }}
        size="large"
      >
        <Tabs.TabPane tab="Mới nhất" key="tab1">
          <div className="grid grid-cols-2 w-full py-5 border-underline">
            {/* Left */}
            <div className="podcast-left mr-5 border-right ">
              <article className="item-news">
                <div className="image max-w-[250px] h-[140px] flex-2">
                  <Link to="/blog/:id">
                    <img
                      src="https://i1-sohoa.vnecdn.net/2023/07/22/Remini3-7141-1690001353.png?w=680&h=0&q=100&dpr=1&fit=crop&s=_vKD0vbveKgk0W_LATf0Ew"
                      alt=""
                      className="rounded-md object-cover h-full w-full"
                    />
                  </Link>
                </div>
                <div className="title-news flex flex-col flex-1">
                  <Link
                    to="/blog/:id"
                    className="text-base font-merri font-semibold text-primary hover:text-[#1677ff] cursor-pointer mb-4"
                  >
                    Trào lưu 'tự chụp ảnh bằng AI
                  </Link>
                  <p className="text-sm text-[#4f4f4f] font-merri">
                    Thay vì bỏ tiền thuê hoặc nhờ ai đó chụp ảnh, nhiều người tìm đến ứng dụng AI cho phép họ "tự chụp"
                    từ ảnh chân dung đến du lịch.
                  </p>
                </div>
              </article>
            </div>
            {/* Right */}
            <div className="podcast-right">
              <article className="item-news">
                <div className="image max-w-[250px] h-[140px] flex-2">
                  <Link to="/blog/:id">
                    <img
                      src="https://cdn.tgdd.vn/Files/2023/07/15/1538354/th-150723-141905-300x200.jpg"
                      alt=""
                      className="rounded-md object-cover h-full w-full"
                    />
                  </Link>
                </div>
                <div className="title-news flex flex-col flex-1">
                  <Link
                    to="/blog/:id"
                    className="text-base font-merri font-semibold text-primary hover:text-[#1677ff] cursor-pointer mb-4"
                  >
                    Cấu hình và giá bán dự kiến ZWatch Z6, smartwatch 'ngon, bổ, rẻ' sắp bán tại TGDĐ
                  </Link>
                  <p className="text-sm text-[#4f4f4f] font-merri">
                    Đồng hồ thông minh Zwatch Z6 sở hữu ngoại hình thời thượng, đa dạng tiện ích, có khả năng nghe gọi
                    trực tiếp trên đồng hồ.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full py-5 border-underline">
            {/* first */}
            <div className="mr-5 border-right pr-5 flex flex-col">
              <Link className="text-base font-merri font-semibold text-primary flex-1 hover:text-[#1677ff] cursor-pointer mb-2">
                Tiêu chuẩn không dây mới ra mắt, nhanh gấp 100 lần Wi-Fi
              </Link>
              <p className="text-sm text-[#4f4f4f] font-merri mt-auto">
                Theo Hiệp hội Các Kỹ sư Điện và Điện tử (IEEE), 802.11bb đã chính thức được công nhận là chuẩn truyền
                thông không dây mới. Tin này được các công ty Li-Fi trên toàn cầu chào đón
              </p>
            </div>
            {/* second */}
            <div className="mr-5 border-right pr-5 flex flex-col">
              <Link className="text-base font-merri font-semibold text-primary flex-1 hover:text-[#1677ff] cursor-pointer mb-2">
                Chiêu đãi tín đồ thời trang với loạt đồng hồ Thuỵ Sỹ Certina, đồng giảm 15%
              </Link>
              <p className="text-sm text-[#4f4f4f] font-merri mt-auto">
                Certina là một thương hiệu đến từ Thụy Sĩ có bề dày lịch sử trăm năm được nhiều người ưa chuộng với các
                mẫu đồng hồ cao cấp, thiết kế đẹp và khả năng chống nước tốt
              </p>
            </div>
            {/* third */}
            <div className="mr-5 border-right pr-5 flex flex-col">
              <Link className="text-base font-merri font-semibold text-primary flex-1 hover:text-[#1677ff] cursor-pointer mb-2">
                Samsung đăng ký bản quyền thương hiệu cho 6 cái tên Galaxy mới, điều gì sắp đến?
              </Link>
              <p className="text-sm text-[#4f4f4f] font-merri mt-auto">
                Từ trước tới nay, Galaxy là cái tên gắn liền với Samsung khi nói về lĩnh vực công nghệ, từ điện thoại,
                tablet, laptop, TV, đồng hồ thông minh...
              </p>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="VnExpress Hôm nay" key="tab2">
          <div>This is a content of Tab2</div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default News;
