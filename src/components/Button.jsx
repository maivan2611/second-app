import CallIcon from '@mui/icons-material/Call';
import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
function Button(props) {
    return (
        <div className="button">
            <a href="tel:0936606660" className="btn-call-now !flex gap-2">
                <div className="rounded-[50%] bg-white w-10 h-10 flex justify-center items-center">
                    <i className="fa fa-phone text-red-500"></i>
                </div>

                <span class="text-white-500">093 660 6660</span>
            </a>
            <a href="/" className="return-to-top"> <KeyboardDoubleArrowUpIcon className='double-up' /> </a>
            <a href="https://zalo.me/0936606660" class="phone-zalo ">
                <img src="https://caohungphat.com/wp-content/uploads/2019/07/icon_zalomessage.png" alt="" className="w-9 h-9 m-auto"/>
            </a>

        </div>
    );
}
export default Button