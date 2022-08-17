import React from 'react';
import Modal from './Modal'
function SignUp(props) {
  const { setIsOpenPropName } = props

  return (
    
    
      <div className='relative w-[520px] h-[423px] py-[20px] px-[30px] bg-white mt-2.5 mx-auto'>
        <form className='flex flex-col gap-5 items-center '>
          <div className='text-4xl text-[#252525] text-medium leading-[32px] tracking-[0.36px]'>Đăng kí</div>
          <div className='border border-[e1e1e1] w-[100%]'>
            <input className='text-sm leading-[1.3333] py-[11px] px-[20px]' type='text' placeholder='Họ tên' />
          </div>
          <div className='border border-[e1e1e1] w-[100%]'>
            <input className='text-sm leading-[1.3333] py-[11px] px-[20px]' type='email' placeholder='Email' />
          </div>
          <div className='border border-[e1e1e1] w-[100%]'>
            <input className='text-sm leading-[1.3333] py-[11px] px-[20px]' type='text' placeholder='Điện thoại' />
          </div>
          <div className='border border-[e1e1e1] w-[100%]'>
            <input className='text-sm leading-[1.3333] py-[11px] px-[20px]' type='password' placeholder='Mật khẩu' />
          </div>
          <div>
            <button className="text-[21px] leading-[10px] text-white bg-red-600 p-2.5 mr-[10px] hover:text-black hover:bg-white hover:border border-[e1e1e1]">Đăng nhập</button>
            <button className="text-[21px] leading-[10px] p-2.5 min-w-[100px] text-black bg-white border border-[e1e1e1] hover:text-white hover:bg-red-600">Hủy</button>
          </div>
        
        </form>
      </div>
   
    
  );
}

export default SignUp;