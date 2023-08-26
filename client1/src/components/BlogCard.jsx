import React from 'react';

const BlogCard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-5">
        {/* Left */}
        <div className="bg-white rounded-md flex p-5 gap-4 col-span-9">
          <div className="flex flex-col flex-[60%]">
            <img
              src="https://images.fpt.shop/unsafe/fit-in/490x326/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/24/638258249821300210_fstudio-cover.jpg"
              alt=""
              className="mb-2"
            />
            <div>
              <h1 className="text-xl font-sans font-semibold text-[#3d3d3d]">
                Mua điện thoại iPhone 15 đến 25 triệu chính hãng, giá tốt ở đâu?
              </h1>
              <p className="text-[13px] text-[#9b9b9b]">0 - 6 giờ trước</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 flex-[40%]">
            <div className="flex items-center">
              <img
                src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/24/638258091467356140_chatgpt-tren-zalo.jpg"
                alt=""
                className="mr-2"
              />
              <div>
                <h3 className="text-[#3d3d3d] font-sans text-[15px] font-medium">
                  Mẹo sử dụng ChatGPT ngay trên ứng dụng Zalo vô cùng thú vị mà ít ai biết
                </h3>
                <p className="text-[13px] text-[#9b9b9b]">0 - 6 giờ trước</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/19/638254071634605068_cac-loai-quat-suoi.jpg"
                alt=""
                className="mr-2"
              />
              <div>
                <h3 className="text-[#3d3d3d] font-sans text-[15px] font-medium">
                  Phân biệt các loại quạt sưởi phổ biến nhất hiện nay, ưu và nhược điểm chi tiết
                </h3>
                <p className="text-[13px] text-[#9b9b9b]">0 - 6 giờ trước</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/24/638257984265601280_co-nen-uong-nuoc-truc-tiep-tu-may-loc-nuoc-thumb.jpg"
                alt=""
                className="mr-2"
              />
              <div>
                <h3 className="text-[#3d3d3d] font-sans text-[15px] font-medium">
                  Giải đáp thắc mắc có nên uống nước trực tiếp từ máy lọc nước không?
                </h3>
                <p className="text-[13px] text-[#9b9b9b]">0 - 6 giờ trước</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/22/638256207506646632_vi-tri-lap-den-suoi-nha-tam-thumb.jpg"
                alt=""
                className="mr-2"
              />
              <div>
                <h3 className="text-[#3d3d3d] font-sans text-[15px] font-medium">
                  Vị trí lắp đèn sưởi nhà tắm an toàn và một vài lưu ý bạn cần biết
                </h3>
                <p className="text-[13px] text-[#9b9b9b]">0 - 6 giờ trước</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div class="bg-white rounded-md py-[10px] px-[15px] shadow-sm col-span-3">
          <div class="border-b-[1px]">
            <h3 class="text-primary font-medium font-sans pb-2 text-lg">Xem nhiều</h3>
          </div>
          <div class="mt-4">
            <ul class="text-sm flex gap-7 flex-col">
              <li class="flex items-center">
                <span class="w-10 h-10 bg-redcb rounded-full text-white mr-2 border-circle">1</span>
                <a class="line-clamp-2" href="/blog/:id">
                  Tổng hợp 5 cách tra cứu điểm thi tốt nghiệp THPT Quốc gia 2023 cực nhanh và chính xác
                </a>
              </li>
              <li class="flex items-center">
                <span class="w-10 h-10 bg-[#99a2aa] rounded-full text-white mr-2 border-circle">2</span>
                <a class="line-clamp-2" href="/blog/:id">
                  Nokia C32: Siêu phẩm giá rẻ với camera 50MP, chống nước tốt, pin “trâu” đến 3 ngày
                </a>
              </li>
              <li class="flex items-center">
                <span class="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">3</span>
                <a class="line-clamp-2" href="/blog/:id">
                  Honor Play 40C ra mắt: Màn hình 90Hz, chip Snapdragon 480 Plus
                </a>
              </li>
              <li class="flex items-center">
                <span class="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">4</span>
                <a class="line-clamp-2" href="/blog/:id">
                  Trên tay OPPO A78: Sạc nhanh 67W, bộ nhớ “khủng” 256GB, thiết kế đẹp, giá “mềm”
                </a>
              </li>
              <li class="flex items-center">
                <span class="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">5</span>
                <a class="line-clamp-2" href="/blog/:id">
                  Top 5 laptop cho giáo viên tốt nhất 2023: Đẹp, gọn nhẹ, pin trâu, giá rẻ
                </a>
              </li>
              <li class="flex items-center">
                <span class="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">6</span>
                <a class="line-clamp-2" href="/blog/:id">
                  Mong chờ gì từ sự kiện Galaxy Unpacked ngày 26/7 của Samsung?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
