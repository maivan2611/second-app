import Header from './Header';
import React from 'react'
import TopHeader from './Top';
import SubwebStyle from './SubwebStyle.css'
import Footer from './Footer';
import Button from './Button';
function Subweb(props) {
    return (
        <div className='subweb'>
            <TopHeader />
            <Header />
            <div className='box-contener'>
                <div className='main-content'>
                    <h1 class="article-title">Chính sách lấy điện thoại bán sỉ - Nguồn điện thoại giá sỉ</h1>
                    <div className="article-content">
                        <p className="margin" style={{ fontWeight: '700' }}>I. Điều kiện để trở thành khách sỉ</p>
                        <p className="margin">- Lấy hàng lần đầu tin với hóa đơn <span style={{ fontWeight: '700' }}>5 sản phẩm</span>, những lần sau không bắt buộc số lượng</p>
                        <p className="margin">- Lấy hàng lần đầu tin với hóa đơn <span style={{ fontWeight: '700' }}>5 sản phẩm</span>, những lần sau không bắt buộc số lượng</p>
                        <p className="margin">- Đối với khách tại thành phố: Khách sẽ được giao hàng trong ngày và nhận tiền ngay khi giao hàng</p>
                        <p className="margin">- Đối với khách ngoại tỉnh: Khách hàng tạo bill qua website, zalo, điện thoại, nhân viên
                            <a href="Nguonsidienthoai.com" style={{ fontWeight: '700', color: '#000', textDecoration: 'none' }} > Nguonsidienthoai.com </a>
                            sẽ liên hệ xác nhận đơn hàng.
                        </p>
                        <p className="margin">- Khách hàng chuyển khoản qua các tài khoản và nhận hàng qua chuyển phát nhanh Viettel, Chuyển phát nhanh, Phương Trang …</p>
                        <img className="margin" src="http://nguonsidienthoai.com//image/chinh-sach-lay-si-dien-thoai-811j.jpg" alt="" style={{ display: 'block' }} />
                        <p className="margin" style={{ fontWeight: '700' }}>II. Quyền lợi của khách sỉ</p>
                        <p className="margin">- Khách hàng được cung cấp và cập nhật các sản phẩm điện thoại giá sỉ mới nhất liên tục thông qua website
                            <a href="Nguonsidienthoai.com" style={{ fontWeight: '700', color: '#000', textDecoration: 'none' }} > Nguonsidienthoai.com </a>
                            hoặc điện thoại
                            <span style={{ color: 'rgb(255, 0, 0)', fontFamily: 'Arial, serif', fontWeight: 'bold', textAlign: 'start' }}> 0906 84 85 85 </span>
                            (Zalo, Viber)
                        </p>
                        <p className="margin" >- Chính sách bảo hành chuyên nghiệp, thuận tiện, đổi mới ngay sản phẩm trong 1 tháng đầu</p>
                        <p className="margin">- Là khách hàng thân thiết của
                            <a href="Nguonsidienthoai.com" style={{ fontWeight: '700', color: '#000', textDecoration: 'none' }} > Nguonsidienthoai.com </a>
                            các bạn được cung cấp 1 website free
                            <span style={{ color: 'rgb(255, 0, 0)', fontFamily: 'Arial, serif', fontWeight: 'bold', textAlign: 'start' }}> (1 năm trị giá 15.000.000đ) </span>
                            và hướng dẫn các bạn bán hàng online
                        </p>
                        <p className="margin" style={{ fontSize: '20px', fontWeight: '700' }}>Cám ơn các bạn đã quan tâm !</p>
                    </div>
                </div>
                <dir className="banner">
                    <img src="http://nguonsidienthoai.com//file/nokia-gia-si-817f.png" alt="" />
                    <img src="http://nguonsidienthoai.com//file/iphone-gia-si-818f.png" alt="" />

                </dir>
            </div>
            <Footer />
            <Button />
        </div>
    );
}
export default Subweb