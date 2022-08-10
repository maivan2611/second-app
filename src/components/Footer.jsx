import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-contener">
        <div className="footer-item">
          <button>
            <img alt={"Nguồn hàng điện thoại giá rẻ"} src={"http://nguonsidienthoai.com//image/logofooter-290j.jpg"} title={"Nguồn hàng điện thoại giá rẻ"} ></img>
          </button>
          <ul className="footer-menu">
            <span className="footer-menu-tilte">NGUỒN SỈ ĐIỆN THOẠI</span>
            <li><b>Hotline 1:</b> 093 660 6660 (Zalo)</li>
            <li><b>Hotline 2:</b> 0908 773 474 - A.Thắng (Zalo) </li> 
          </ul>
          
        </div>
        <div className="footer-item">
          <h4 className="footer-menu-tilte">HƯỚNG DẪN MUA SỈ</h4>
          <ul className="footer-menu">
            <li>Hướng dẫn đặt hàng sỉ online</li>
            <li>Chính sách bán sỉ</li>
            <li>Chính sách bảo hành hàng sỉ</li>
            <li>Vận chuyển & thanh toán</li>
            <li>Hướng dẫn khiếu nại</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-menu-tilte">DỊCH VỤ BỎ SỈ</h4>
          <ul className="footer-menu">
            <li>Tặng web bán hàng ONLINE</li>
            <li>Hỗ trợ kinh doanh ONLINE</li>
          
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-menu-tilte">TIN CÔNG NGHỆ</h4>
          <ul className="footer-menu">
            <li>Tin nguồn hàng sỉ</li>
            <li>Tin tức ĐIỆN THOẠI</li>
            <li>Kênh REVIEW & Đập hộp</li>
            <li>Lời đồn công nghệ</li>
            <li>Nhận định thị trường</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
