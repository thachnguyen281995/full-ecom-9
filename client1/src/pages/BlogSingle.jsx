import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FloatButton } from 'antd';
const BlogSingle = () => {
  
  return (
    <div className="bg-blogsingle">
      <div className="container grid grid-cols-12 gap-4 mx-auto p-5">
        <div className="col-span-4">
          <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
            <div className="border-b-[1px]">
              <h3 className="text-primary font-medium font-sans pb-2 text-lg">Xem nhiều</h3>
            </div>
            <div className="mt-4">
              <ul className="text-sm flex gap-y-4 flex-col">
                <li className="flex items-center">
                  <span className="w-10 h-10 bg-redcb rounded-full text-white mr-2 border-circle">1</span>
                  <Link className="line-clamp-2">
                    Tổng hợp 5 cách tra cứu điểm thi tốt nghiệp THPT Quốc gia 2023 cực nhanh và chính xác
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-10 h-10 bg-[#99a2aa] rounded-full text-white mr-2 border-circle">2</span>
                  <Link className="line-clamp-2">
                    Nokia C32: Siêu phẩm giá rẻ với camera 50MP, chống nước tốt, pin “trâu” đến 3 ngày
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">3</span>
                  <Link className="line-clamp-2">Honor Play 40C ra mắt: Màn hình 90Hz, chip Snapdragon 480 Plus</Link>
                </li>
                <li className="flex items-center">
                  <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">4</span>
                  <Link className="line-clamp-2">
                    Trên tay OPPO A78: Sạc nhanh 67W, bộ nhớ “khủng” 256GB, thiết kế đẹp, giá “mềm”
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">5</span>
                  <Link className="line-clamp-2">
                    Top 5 laptop cho giáo viên tốt nhất 2023: Đẹp, gọn nhẹ, pin trâu, giá rẻ
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">6</span>
                  <Link className="line-clamp-2">Mong chờ gì từ sự kiện Galaxy Unpacked ngày 26/7 của Samsung?</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
            <div className="blogsingle-top font-merri">
              <h1 className="text-3xl mb-4 font-semibold">Trào lưu 'tự chụp ảnh bằng AI'</h1>
              <p className="text-[#222] leading-8 py-2">
                Thay vì bỏ tiền thuê hoặc nhờ ai đó chụp ảnh, nhiều người tìm đến ứng dụng AI cho phép họ "tự chụp" từ
                ảnh chân dung đến du lịch. Theo Petapixel, giới trẻ đang dùng Remini - ứng dụng chỉnh sửa AI để biến ảnh
                selfie sẵn có của mình thành những tấm hình chân dung chuyên nghiệp. Một số thậm chí đặt câu hỏi tại sao
                họ phải trả tiền cho nhiếp ảnh gia khi đã có một "thợ chụp ảnh trong túi". Ảnh chụp từ smartphone được
                AI biến thành ảnh chuyên nghiệp đang lan truyền khắp mạng xã hội. Hashtag #Remini hiện có hơn 1,4 tỷ
                lượt xem trên TikTok với hàng nghìn người dùng.
              </p>
              <div className="mt-4">
                <img
                  src="https://i1-sohoa.vnecdn.net/2023/07/22/Remini3-7141-1690001353.png?w=680&h=0&q=100&dpr=1&fit=crop&s=_vKD0vbveKgk0W_LATf0Ew"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-sm py-2 font-sans">
                  Ứng dụng Remini cho phép tạo ảnh chuyên nghiệp bằng AI hoặc khôi phục ảnh cũ mờ trở nên sắc nét. Ảnh:{' '}
                  <span className="italic">Khương Nha</span>
                </p>
              </div>
              <p className="text-[#222] leading-8 py-2">
                Remini hoạt động tương tự Lensa AI từng làm mưa làm gió năm 2022. Ứng dụng bắt đầu thu hút sự chú ý sau
                khi tài khoản TikTok Graces Place chia sẻ cách tạo ra loạt ảnh chân dung cho hồ sơ Linkedin chỉ với vài
                thao tác trên điện thoại. Video thu hút 42,2 triệu lượt xem sau 6 ngày đăng.
              </p>
              <p className="text-[#222] leading-8 py-2">
                Những ngày qua, Remini trở nên phổ biến khắp mạng xã hội. Tại Mỹ, ứng dụng vượt qua sức hút của mạng xã
                hội Threads để vươn lên vị trí số một trên bảng xếp hạng App Store. Tại Việt Nam, Remini cũng leo lên
                top 6 ứng dụng chỉnh sửa ảnh được tải nhiều nhất.
              </p>
              <p className="text-[#222] leading-8 py-2">
                So với Lensa AI, Remni yêu cầu ít thông tin riêng tư của người dùng hơn. Trong phần cài đặt, ứng dụng
                cam kết xóa vĩnh viễn ảnh của người dùng khỏi máy chủ trong vòng 24 giờ và không sử dụng cho mục đích
                khác. Nhà phát triển cho phép tùy chọn nhiều mức độ chia sẻ quyền riêng tư.
              </p>
              <div className="mt-4">
                <img
                  src="https://i1-sohoa.vnecdn.net/2023/07/22/AI-8918-1690004002.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=Z2wTopduIdNexqKuZ-8Rog"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-sm py-2 font-sans">
                  Từ ảnh selfie (giữa), Remini có thể tạo ảnh chân dung chuyên nghiệp. Nguồn:{' '}
                  <span className="italic">Graces Place</span>
                </p>
              </div>
              <p className="text-[#222] leading-8 py-2">
                Giao diện của Remini đơn giản, dễ dùng với ba tính năng: Tạo ảnh AI, Tạo ảnh đại diện AI và Nâng cao.
                Trong phần Tạo ảnh AI, người dùng cần tải lên 7 ảnh chân dung, không cần rõ mặt, chất lượng ảnh có thể
                mờ hoặc thiếu sáng. Sau đó tùy vào lựa chọn giới tính, ứng dụng sẽ gợi ý hàng trăm khung hình mẫu với đủ
                kiểu dáng từ trẻ đến già, đa dạng ngành nghề, quốc gia, màu da... và trả về 6 kết quả. Đây là điểm nổi
                bật của Remini so với các ứng dụng ảnh AI khác. Người dùng có thể chọn bản ưng ý nhất với thay đổi về
                kiểu dáng, quần áo, phong cách...
              </p>
              <p className="text-[#222] leading-8 py-2">
                Tương tự với mục Tạo ảnh đại diện, người dùng có thể tải lên ảnh tự chụp với nhiều góc mặt, biểu cảm,
                khung nền. Ứng dụng cũng nhận ảnh nhóm, ảnh đeo kính râm, không rõ mặt, thậm chí ảnh động vật. Sau vài
                chục giây xử lý, Remini cho ra bộ ảnh chân dung chuyên nghiệp giống như trong studio.
              </p>
              <p className="text-[#222] leading-8 py-2">
                Phần tùy chọn nâng cao hỗ trợ tạo ảnh hoặc video AI theo tùy chọn riêng, khó phân biệt được thật giả.
                Một số TikToker cho biết họ dùng AI để cải thiện chất lượng video của mình, như chỉnh sửa bố cục, ánh
                sáng, làm đẹp, thay đổi phông nền.
              </p>
              <div className="mt-4">
                <img
                  src="https://i1-sohoa.vnecdn.net/2023/07/22/remini2-1690000421-7659-1690001354.png?w=680&h=0&q=100&dpr=1&fit=crop&s=xTvbGCRLntfH0qG9EIWVCw"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-sm py-2 font-sans">
                  Remini cho phép dùng thử trong ba ngày, sau đó tính phí 239 nghìn đồng mỗi tuần. Ảnh:{' '}
                  <span className="italic">Khương Nha</span>
                </p>
              </div>
              <p className="text-[#222] leading-8 py-2">
                Nhiều người cho rằng máy móc không thể thay thế được những giá trị riêng của nhiếp ảnh gia, tuy nhiên sự
                xuất hiện của AI cũng sẽ khiến các thợ ảnh phải xem xét lại mức giá quá cao cho những bộ chân dung của
                họ.
              </p>
              <p className="text-[#222] leading-8 py-2">
                Mollie Danielle, tài khoản có 9,7 triệu lượt xem trên TikTok, nói với Insider: "AI thực sự khiến một
                người bất kỳ trông như người Tây Ban Nha. Tôi đã phát cuồng về ứng dụng nhưng thi thoảng, ảnh tạo ra
                không thật, nhiều chi tiết bị bóp méo. Sau ít ngày dùng thử, tôi đã xóa ứng dụng".
              </p>
              <p className="text-[#222] leading-8 py-2">
                Một trong những phản hồi nhiều nhất của người dùng về Remini là AI có xu hướng khiến họ trông gầy hơn.
                Một số cho rằng các tác phẩm này không thật, nịnh mắt trong khi số khác nói họ có thêm động lực giảm cân
                vì thấy mình trở nên xinh đẹp khi thon gọn.
              </p>
              <p className="text-[#222] leading-8 py-2">
                Remini được công ty công nghệ Bending Spoons có trụ sở tại Milan ra mắt năm 2019. Ban đầu, công ty cung
                cấp dịch vụ làm rõ nét ảnh độ phân giải thấp, phục hồi ảnh cũ. Đến 2022, họ tích hợp thêm AI vào ứng
                dụng. Công ty thu hút chú ý với ứng dụng tạo ảnh thời thơ ấu. Ứng dụng cho dùng thử miễn phí, sau đó thu
                phí theo tuần hoặc theo năm. Tại Việt Nam, người dùng có thể trả 249 nghìn đồng để dùng trong một tuần
                hoặc 1,9 triệu đồng cho một năm.
              </p>
              <p className="text-end font-bold text-lg">Khương Nha</p>
            </div>
          </div>
          <div className="footer-content flex justify-start">
            <div className="border p-2 rounded-md bg-white">
              <Link to="/blog">
                <BsArrowLeft size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FloatButton.BackTop />
    </div>
  );
};

export default BlogSingle;
