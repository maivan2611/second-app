import CallIcon from '@mui/icons-material/Call';
import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
function Button(props) {
    return (
        <div className="button">
            <a href="tel:0936606660" className="btn-call-now"> <CallIcon /> <span class="hidden-lg-down">093 660 6660</span></a>
            <a href="/" className="return-to-top"> <KeyboardDoubleArrowUpIcon className='double-up' /> </a>

        </div>
    );
}
export default Button