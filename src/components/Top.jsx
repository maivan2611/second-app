import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Person from '@mui/icons-material/Person';
import LockOpen from '@mui/icons-material/LockOpen';
import SearchIcon from '@mui/icons-material/Search';
function TopHeader(props) {
  return (
    <div className="top-header">
      <div className='time-open'>
        <div>
          
          <AccessTimeIcon className= "text-sm color-" /> Giờ mở cửa: 8:00 - 20:00
        </div>
      </div>
      <ul className='top-login'>
        <li>
          <LockOpen />
          <a href="" style={{paddingRight: '15px'}}>Đăng kí</a>
        </li>
        <li>
          {/* <Person sx={{ fontSize: '14px' }} style={{padding: '3px 8px 0'}}/> */}
          <Person />
          <a href="">Đăng nhập</a>
          <span style={{  padding: '0 10px'}}>/</span>
        </li>

        
      </ul>
    </div>
  );
}

export default TopHeader;
