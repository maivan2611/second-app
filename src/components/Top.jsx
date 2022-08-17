import React from 'react';
import { useState } from "react";
import Login from './Login';
import SignUp from './SignUp';


function TopHeader(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  function handleClickLogin(props) {
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
          <button className='text-[#fff] hover:text-[#f9a678]' onClick={() => setIsOpen2(true)}>Đăng kí</button>

        </li>
        <li>
          {/* <Person sx={{ fontSize: '14px' }} style={{padding: '3px 8px 0'}}/> */}
          <i className="fa fa-user"></i>
          <button className='text-[#fff] hover:text-[#f9a678]' onClick={handleClickLogin}>Đăng nhập</button>
          <span style={{ padding: '0 10px' }}>/</span>
        </li>
      </ul>
      {isOpen && <Login setIsOpenPropName={setIsOpen}   />}
      {isOpen2  && <SignUp setIsOpenPropName={setIsOpen2} />}
    </div>
  );
}

export default TopHeader;
