import React from 'react';
import Modal from './Modal';

function Login(props) {
  const { setIsOpenPropName } = props

  return (

    <Modal handleClose={setIsOpenPropName}>
      <div className='relative w-[520px] h-[324px] py-[20px] px-[30px] bg-white mt-7 mx-auto'>
        <form className='flex flex-col gap-5 items-center '>
          <div className='text-4xl text-[#252525] text-medium uppercase leading-[32px] tracking-[0.36px]'>Đăng nhập</div>
            <input className='border border-[e1e1e1] focus:outline-none w-[100%] text-sm text-[#55595c] leading-[1.3333] py-[11px] px-[20px]' type='text' placeholder='Điện thoại' />
            <input className='border border-[e1e1e1] focus:outline-none w-[100%] text-sm text-[#55595c] leading-[1.3333] py-[11px] px-[20px]' type='password' placeholder='Mật khẩu' />
          <div>
            <button className="text-[21px] leading-[10px] text-white bg-red-600 p-2.5 mr-[10px] hover:text-black hover:bg-white hover:border border-[e1e1e1]">Đăng nhập</button>
            <button className="text-[21px] leading-[10px] p-2.5 min-w-[100px] text-black bg-white border border-[e1e1e1] hover:text-white hover:bg-red-600"
              onClick={() => { setIsOpenPropName(false) }}>Hủy</button>
          </div>
          <div className="text-sm text-[#333333] ">
            <a className="text-red-600" href="#">Quên mật khẩu </a>
            ? Gửi lại mật khẩu
          </div>
        </form>
      </div>
    </Modal>

  );
}

export default Login;
