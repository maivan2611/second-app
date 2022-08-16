import React from 'react';

function Login(props) {
  const { setIsOpenPropName } = props

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0' >
      <div className='overlay fixed top-0 left-0 right-0 bottom-0 bg-black opacity-8' onClick={() => { setIsOpenPropName(false) }}></div>
      <div className='relative w-[520px] h-[324px] py-[20px] px-[30px] bg-white mt-2.5 mx-auto'>
        <form className='flex flex-col gap-5 items-center '>
          <div className='text-4xl text-[#252525] text-medium leading-[32px] tracking-[0.36px]'>Đăng nhập</div>
          <div className='border border-[e1e1e1] w-[100%]'>
            <input className='text-sm leading-[1.3333] py-[11px] px-[20px]' type='number' placeholder='Điện thoại' />
          </div>
          <div className='border border-[e1e1e1] w-[100%]'>
            <input className='text-sm leading-[1.3333] py-[11px] px-[20px]' type='password' placeholder='Mật khẩu' />
          </div>
          <div>
            <button className="text-[21px] leading-[10px] text-white bg-red-600 p-2.5 mr-[10px] hover:text-black hover:bg-white hover:border border-[e1e1e1]">Đăng nhập</button>
            <button className="text-[21px] leading-[10px] p-2.5 min-w-[100px] text-black bg-white border border-[e1e1e1] hover:text-white hover:bg-red-600">Hủy</button>
          </div>
          <div className="text-sm text-[333333] ">
            <a className="text-red-600" href="#">Quên mật khẩu </a>
            ? Gửi lại mật khẩu
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
