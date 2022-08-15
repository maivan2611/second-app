import  { Component } from 'react' 
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import React from 'react';
import Tables from './Tables';
function Body(props) {
    return (
        <div className='body'>
            <div className="highlight-info">
                <div className="text-3xl bg- ">BẢNG GIÁ ĐIỆN THOẠI GIÁ SỈ</div>
                <h1 style={{color: '#cc00ff'}}>BAO ĐỔI 1 ĐỔI 1 TRONG VÒNG 7 NGÀY</h1>
                <div style={{color:'#0000ff', backgroundColor: '#f3e920', width:'100%'}}><h1 style={{textAlign: 'center'}}>CẬP NHẬT NGÀY 04/08/2022</h1></div>
                <div style={{color:'#0026ff'}}>GIÁ ÁP DỤNG KHÁCH HÀNG SỈ(LẼ CỘNG THÊM 300K)</div>
                <h4>GIAO HÀNG TẬN NƠI MIỄN PHÍ TOÀN QUỐC</h4>
                <p>Nhà phân phối IPHONE giá sỉ, điện thoại XÁCH TAY giá sỉ, điện thoại CHÍNH HÃNG giá sỉ</p>
                <p style={{color:'#de1e33'}}> <CallIcon/> 0908 773 474 - Anh Thắng <span style={{color:'#000'}}>(Zalo)</span></p>
                <p style={{color:'#de1e33'}}> <CallIcon/> 093 660 6660 - ĐẶT HÀNG & BÁO GIÁ <span style={{color:'#000'}}>(Zalo)</span></p>
                <p> <AccessTimeIcon/> Thời gian làm việc từ  <span style={{color:'#de1e33'}}> 9h - 19h (Chủ nhật từ 9h - 12h)</span></p>
                <p> <AccessTimeIcon/> Thời gian nhận trả bảo hành sau <span style={{color:'#de1e33'}}>12h mỗi ngày</span></p>
            </div>
            <div className="product-table">
                <Tables />
                
            </div>
            
        </div>
    );
}

export default Body;