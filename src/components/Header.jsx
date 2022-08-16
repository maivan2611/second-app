import CallIcon from '@mui/icons-material/Call';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
function Header(props) {
  return (
    <div className="header">
      <div className="site-header-inner">
        <div className="header-left">
          <a
            title={'Logo Công Ty TNHH Đầu Tư &amp; Phát Triển Phúc Khang'}
            href={'/'}
            target={'_self'}
          >
            <img
              alt={'Logo Công Ty TNHH Đầu Tư &amp; Phát Triển Phúc Khang'}
              src={
                'http://nguonsidienthoai.com//file/logo-nguon-si-dien-thoai-860f.png'
              }
              title={'Công Ty TNHH Đầu Tư &amp; Phát Triển Phúc Khang'}
            // display= {'flex'} float={'left'} width={'263px'}
            ></img>
          </a>
        </div>
        <div className="header-center">
          <input className="search-text"
            type="search"
            name="querry"
            value=""
            placeholder="Tìm kiếm sản phẩm... "
            autocomplete="off"
            style={{ paddingLeft: "10px" }} >
          </input>
          <button className='btn-search'>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="bot-header">
        <div className="contener" >
          <div className="bot-header-left">
            <a href={"/"}> <MenuIcon className='menu-icon' /> BẢNG GIÁ SẢN PHẨM SỈ</a>
          </div>
          <div className="bot-header-center">
            <ul className="nav">
              <li>
                <a href="/chinh-sach-si">
                  <img src="http://nguonsidienthoai.com//image//chinh-sach-si-94c.html-291j.jpg" alt="" />
                  Chính sách sỉ
                </a>
              </li>
              <li >
                <a href="http://nguonsidienthoai.com/bang-gia-si-95p.html?view=1">
                  <img src="http://nguonsidienthoai.com//image//chinh-sach-si-94c.html-291j.jpg" alt="" />
                  Bảng giá sỉ
                </a>
              </li>
              <li>
                <a href="http://nguonsidienthoai.com/thanh-toan-amp-van-chuyen-96c.html?view=1">Thanh toán & vận chuyển</a>
              </li>
              <li>
                <a href="http://nguonsidienthoai.com/tin-cong-nghe-97n.html?view=1">Tin công nghệ</a>
              </li>
              <li>
                <a href="http://nguonsidienthoai.com/lien-he.html?view=1">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="bot-header-right">
            <p><i className="fa fa-phone-square text-[#de1e33] text-base"></i> Hotline: </p>
            <b><a className='hotline' href="tel:0936606660" > 0936606660</a></b>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
