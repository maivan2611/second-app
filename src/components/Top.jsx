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
          <i className="fa fa-clock-o mr-3"></i>
          Giờ mở cửa: 8:00 - 20:00
        </div>
      </div>
      <ul className='top-login'>
         <li>
          <i className="fa fa-user mr-2"></i>
          <button className='text-[#fff] hover:text-[#f9a678]' onClick={handleClickLogin}>Đăng nhập</button>
          <span style={{ padding: '0 10px' }}>/</span>
        </li>
        <li>
          <i className="fa fa-unlock-alt mr-2"></i>
          <button className='text-[#fff] hover:text-[#f9a678] ml-8px' onClick={() => {setIsOpen2(true)}}>Đăng ký</button>
        </li>
       
      </ul>
      {isOpen && <Login setIsOpenPropName={setIsOpen}   />}
      {isOpen2  && <SignUp setIsOpenPropName={setIsOpen2} />}
    </div>
  );
}

export default TopHeader;
