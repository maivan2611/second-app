import React from 'react';
import { useState } from "react";
import Login from './Login';
import SignUp from './SignUp';


function TopHeader(props) {
  const [isOpen, setIsOpen] = useState(false)
  function handleClickLogin() {
    setIsOpen(true)
  }
  function handleOffModal() {
    setIsOpen(false)
  }
  return (
    <div className="top-header">
      <div className='time-open'>
        <div>
          <i className="fa fa-clock-o"></i>
          Giờ mở cửa: 8:00 - 20:00
        </div>
      </div>
      <ul className='top-login'>
        <li>
          <i className="fa fa-unlock-alt"></i>
          <button >Đăng kí</button>
          
        </li>
        <li>
          {/* <Person sx={{ fontSize: '14px' }} style={{padding: '3px 8px 0'}}/> */}
          <i className="fa fa-user"></i>
          <button onClick={handleClickLogin}>Đăng nhập</button>
          <span style={{ padding: '0 10px' }}>/</span>
        </li>
      </ul>
      {isOpen && <Login setIsOpenPropName={setIsOpen} />}
      
    </div>
  );
}

export default TopHeader;
