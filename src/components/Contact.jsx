import React from 'react';

function Contact(props) {
    return (
        <div className='grid grid-cols-5 mx-[79px]'>
            <div className='col-span-3 mx-[15px]' >
                <div className='text-[36px] text-[#1c1c1c] font-medium tracking-[0.36px] leading-[50.4px] '>Liên hệ với Nguồn Sỉ Điện Thoại</div>
                <span className='text-sm leading-[1.7] text-[#333333]'>Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được </span>
                <div>
                    <label htmlFor="" className='block mt-5 mb-2 text-sm leading-[1.7] text-[#333333]'>Tên:</label>
                    <input className='text-sm leading-[21px] py-[11px] px-5 text-[#55595c] border border-[#e1e1e1] block w-[100%] focus:outline-none ' type="text" name='name' placeholder='Họ và tên (*)'/>
                    <label htmlFor="" className='block mt-5 mb-2 text-sm leading-[1.7] text-[#333333]'>Điện thoại:</label>
                    <input className='text-sm leading-[21px] py-[11px] px-5 text-[#55595c] border border-[#e1e1e1] block w-[100%] focus:outline-none ' type="text" name='phone-number' placeholder='Điện thoại(*)'/>
                    <label htmlFor="" className='block mt-5 mb-2 text-sm leading-[1.7] text-[#333333]'>Email:</label>
                    <input className='text-sm leading-[21px] py-[11px] px-5 text-[#55595c] border border-[#e1e1e1] block w-[100%] focus:outline-none' type="email" name='email' placeholder='Email'/>
                    <label htmlFor="" className='block mt-5 mb-2 text-sm leading-[1.7] text-[#333333]'>Nội dung:</label>
                    <input className='text-sm leading-[21px] py-[11px] px-5 text-[#55595c] border border-[#e1e1e1] block w-[100%] focus:outline-none' type="text" name='content' placeholder='Nội dung(*)'/>

                </div>
            </div>
            <div className='mx-[15px]'>
                <a href="http://nguonsidienthoai.com" title="Công Ty TNHH Đầu Tư &amp; Phát Triển Phúc Khang" >
                    <img className='my-[13px]' alt="Logo Công Ty TNHH Đầu Tư &amp; Phát Triển Phúc Khang" src="http://nguonsidienthoai.com//file/logo-nguon-si-dien-thoai-860f.png" title="Công Ty TNHH Đầu Tư &amp; Phát Triển Phúc Khang"/>
                </a>
                <div className='text-[13px] text-[#959595] font-bold leading-[28px] mb-4 pl-5'>
                    <i className="fa fa-map-o text-[13px] leading-[13px] text-redDe pr-[6px]" aria-hidden="true" ></i>
                    Điện thoại giá sỉ
                </div>
                <div className='text-[13px] text-[#959595] leading-[28px] mb-4 pl-5'>
                    <i className="fa fa-map-marker color-x text-[13px] leading-[13px] text-redDe pr-3" aria-hidden="true"></i>
                    Q. 12, Tp.Hồ Chí Minh
                </div>
                <div className='text-[13px] text-[#959595] leading-[28px] mb-4 pl-5'>
                    <i className="fa fa-phone color-x text-[13px] leading-[13px] text-redDe pr-3" aria-hidden="true"></i>
                    0908 773 474 (zalo - viber)
                </div>
                <div className='text-[13px] text-[#959595] leading-[28px] mb-4 pl-5'>
                    <i className="fa fa-envelope-o text-[13px] leading-[13px] text-redDe pr-2" aria-hidden="true"></i>
                    <a href="mail:bosimobile@gmail.com"> bosimobile@gmail.com</a>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;