import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-contener">
        <div>
          <button style={{marginTop:'22px', marginBottom:'31px'}}>
            <img alt={"Nguồn hàng điện thoại giá rẻ"} src={"http://nguonsidienthoai.com//image/logofooter-290j.jpg"} title={"Nguồn hàng điện thoại giá rẻ"} ></img>
          </button>
          <ul >
            <span className="footer-tilte">NGUỒN SỈ ĐIỆN THOẠI</span>
            <li><strong>Hotline 1:</strong> 093 660 6660 (Zalo)</li>
            <li><strong>Hotline 2:</strong> 0908 773 474 -  A.Thắng (Zalo) </li> 
          </ul>
          
        </div>
        <div className="footer-item">
          <h4 className="footer-menu-tilte">Hướng dẫn mua sỉ</h4>
          <ul className="footer-menu">
            <li><a href='/'>Hướng dẫn đặt hàng sỉ online</a></li>
            <li><a href='/'>Chính sách bán sỉ </a></li>
            <li><a href='/'>Chính sách bảo hành hàng sỉ</a></li>
            <li><a href='/'>Vận chuyển & thanh toán</a></li>
            <li><a href='/'>Hướng dẫn khiếu nại</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-menu-tilte">Dịch vụ bỏ sỉ</h4>
          <ul className="footer-menu">
            <li><a href='/'>Tặng web bán hàng ONLINE </a></li>
            <li><a href='/'>Hỗ trợ kinh doanh ONLINE </a></li>
          
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-menu-tilte">Tin công nghệ</h4>
          <ul className="footer-menu">
            <li><a href='/'>Tin nguồn hàng sỉ</a></li>
            <li><a href='/'>Tin tức ĐIỆN THOẠI</a></li>
            <li><a href='/'>Kênh REVIEW & Đập hộp</a></li>
            <li><a href='/'>Lời đồn công nghệ</a></li>
            <li><a href='/'>Nhận định thị trường</a></li>
          </ul>
        </div>
      </div>
      <div className="info-web">© Bản quyền thuộc về Công Ty TNHH Đầu Tư & Phát Triển Phúc</div>
    </div>
  );
}

export default Footer;
