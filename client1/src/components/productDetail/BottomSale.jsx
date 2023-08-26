import React from 'react';
import BannerProduct from '../BannerProduct/BannerProduct';
import TableInfo from './TableInfo';
import { Link } from 'react-router-dom';
import { Input,Divider } from 'antd';
const { TextArea } = Input;
const BottomSale = () => {
  const productCarousel = [
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453170/t-gear-ecom/638042909463089113_iphone-14-pro-max-mau-sac_giesri.webp',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453176/t-gear-ecom/638042909463089113_iphone-14-pro-max-thiet-ke_zfivvc.webp',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453187/t-gear-ecom/638042909462047462_iphone-14-pro-max-man-hinh_qauyw8.webp',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453202/t-gear-ecom/638042909460977569_iphone-14-pro-max-always-on_qnktrf.webp',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453209/t-gear-ecom/638042909462142908_iphone-14-pro-max-camera_vzjib2.webp',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453220/t-gear-ecom/638042909463714072_iphone-14-pro-max-quay-dien-anh_ej3gik.webp',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453231/t-gear-ecom/638042909463714072_iphone-14-pro-max-2x_qlmnwx.webp',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453242/t-gear-ecom/638042909462307320_iphone-14-pro-max-chip_lsufd1.jpg',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690453249/t-gear-ecom/638042909462620337_iphone-14-pro-max-pin_jv5yju.webp'
  ];
  const newsInfo = [
    {
      id: 1,
      title: 'Cảm ơn 18 triệu khách hàng, iPhone 14 Pro Max giá chạm đáy tại FPT Shop',
      image:
        'https://images.fpt.shop/unsafe/fit-in/105x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/16/638225012888439267_1920x1080.png'
    },
    {
      id: 2,
      title: 'Thử nghiệm thả rơi Samsung Galaxy S23 Ultra và iPhone 14 Pro Max: Smartphone nào bền bỉ hơn?',
      image:
        'https://images.fpt.shop/unsafe/fit-in/105x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140776361545349_drop-test-galaxy-s23-ultra-vs-iphone-14-pro-max-cover.jpeg'
    },
    {
      id: 3,
      title: 'Apple bổ sung màu sắc mới cho ốp silicon iPhone 14 series và dây đeo Apple Watch',
      image:
        'https://images.fpt.shop/unsafe/fit-in/105x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/7/638138253896404141_op-lung-iphone-14-cover.jpeg'
    },
    {
      id: 4,
      title: ' iPhone 14 Pro giành giải thưởng smartphone tốt nhất năm 2023 của GLOMO',
      image:
        'https://images.fpt.shop/unsafe/fit-in/105x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/4/638135265567156708_iphone-14-pro-giai-thuong-cover.jpeg'
    },
    {
      id: 5,
      title: 'Đọ tốc độ Samsung Galaxy S23 Ultra và Apple iPhone 14 Pro Max',
      image:
        'https://images.fpt.shop/unsafe/fit-in/105x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/26/638130426049697323_galaxy-s23-ultra-vs-iphone-14-pro-max-cover.jpeg'
    }
  ];
  return (
    <div className="bg-white">
      <div className="container pb-5 mx-auto">
        <div className="grid grid-cols-12 mx-auto pd-bottom gap-x-5">
          {/* Left */}
          <div className="col-span-7 mt-5 pd-bottom__left">
            <div className="px-5 pt-4 card re-card">
              <h2 className="title">Đặc điểm nổi bật của iPhone 14 Pro Max</h2>
              <div className="card-body">
                <BannerProduct imageCarousel={productCarousel} />
              </div>
              <h2 className="mt-4 text-center st-pd-contentTitle title">Đánh giá chi tiết iPhone 14 Pro Max</h2>
              <p className="mb-3 font-medium">
                iPhone 14 Pro Max đem đến những trải nghiệm không thể tìm thấy trên mọi thế hệ iPhone trước đó với màu
                Tím Deep Purple sang trọng, camera 48MP lần đầu xuất hiện, chip A16 Bionic và màn hình “viên thuốc”
                Dynamic Island linh hoạt, nịnh mắt.
              </p>
              <div>
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690454530/t-gear-ecom/Mo-ta-san-pham-iphone-14-pro-max-1_dm6xay.jpg"
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Right Table */}
          <div className="col-span-5 mt-5 pd-bottom__right">
            <div className="px-5 pt-4 card re-card">
              <h2 className="title">Thông số kỹ thuật</h2>
              <table className="st-pd-table">
                <TableInfo />
              </table>
            </div>
            <div className="px-5 pt-4 card re-card">
              <h2 className="title">Tin tức về iPhone 14 Pro Max</h2>
              <div className="card-body-news">
                {newsInfo.map((item) => {
                  return (
                    <div className="mb-5 c-news" key={item.id}>
                      <div className="flex-[20%]">
                        <img src={item.image} alt="" className="object-cover" />
                      </div>
                      <div className="flex-[80%] c-news-info">
                        <Link className="font-sans text-[15px] text-textInfo hover:text-blue-500">{item.title}</Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Comment */}
        <div className="mt-5 card user-feedback">
          <h2 className="title">Hỏi & Đáp</h2>
          <Divider />
          <div className='relative'>
            <TextArea rows={4} className='text-base'/>
            <button className='absolute right-5 top-[50%] translate-y-[-50%] uppercase bg-red-700 px-3 py-2 rounded-md text-white hover:bg-red-800'>Gửi Bình Luận</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSale;
