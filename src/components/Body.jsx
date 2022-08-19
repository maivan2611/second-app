import { Component } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import React from 'react';
import Tables from './Tables';
function Body(props) {
    return (
        <div className='body text-2xl'>
            <div className="highlight-info">
                <div className="text-4xl font-arial text-[#de1e33] font-semibold tracking-[0.36px] pb-2 pt-2.5 leading-[1.4] ">BẢNG GIÁ ĐIỆN THOẠI GIÁ SỈ</div>
                <div className="text-[32px] text-[#cc00ff] font-semibold leading-[54.4px]">BAO ĐỔI 1 ĐỔI 1 TRONG VÒNG 7 NGÀY</div>
                <div className="text-4xl font-arial text-[#0026ff] bg-[#f3e920] block w-[100%] font-semibold text-center leading-[60.2px]">CẬP NHẬT NGÀY 04/08/2022</div>
                <div className=" text-[#0026ff] font-semibold leading-[27.2px] ">GIÁ ÁP DỤNG KHÁCH HÀNG SỈ(LẼ CỘNG THÊM 300K)</div>
                <div className="text-2xl text-[#333333] font-semibold "> GIAO HÀNG TẬN NƠI MIỄN PHÍ TOÀN QUỐC</div>
                <p className="text-[14px] text-[#333333] leading[1.7] my-[5px]" >Nhà phân phối IPHONE giá sỉ, điện thoại XÁCH TAY giá sỉ, điện thoại CHÍNH HÃNG giá sỉ</p>
                <p className="text-xl text-[#de1e33] leading[1.7] my-[5px]" > <i className="fa fa-phone-square text-bluePrimary text-xl"></i> 0908 773 474 - Anh Thắng <span className='text-[14px] text-[#333333] '>(Zalo)</span></p>
                <p className="text-xl text-[#de1e33] leading[1.7] my-[5px]" > <i className="fa fa-phone-square text-[#0000ff] text-xl"></i> 093 660 6660 - ĐẶT HÀNG & BÁO GIÁ <span className='text-[14px] text-[#333333]'>(Zalo)</span></p>
                <p className='text-[14px] text-[#333333] leading[1.7] my-[5px]'> <i className="fa fa-clock-o text-sm text-[#0000ff]"></i> Thời gian làm việc từ  <span className='text-lg text-[#de1e33] '> 9h - 19h (Chủ nhật từ 9h - 12h)</span></p>
                <p className='text-[14px] text-[#333333] leading[1.7] my-[5px]'> <i className="fa fa-clock-o text-sm text-[#0000ff]"></i> Thời gian nhận trả bảo hành sau <span className='text-lg text-[#de1e33] '>12h mỗi ngày</span></p>
            </div>
            
            <div className="product-table">
                <Tables />
            </div>

        </div>
    );
}

export default Body;