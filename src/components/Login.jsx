import React, { useEffect } from 'react';
import Modal from './Modal';
import { useState } from "react";

function Login(props) {
  const { setIsOpenPropName } = props
  // var phoneLogin = document.queryselector('.phone-login')
  // var passLogin = document.queryselector('.pass-login')
  // console.log(phoneLogin)
  // function info() {
  //  alert(`Điện thoại: ${phoneLogin} <br> Mật khẩu: ${passLogin}`)
  // const [isConslg, setIsConslg]= useState(false)
  //onClick={() => { setIsConslg(true) }}
  //  function test() {
  //   var u = document.formLogin.phonelogin.value;
  //   var p = document.formLogin.passlogin.value;
  //   console.log(u)
  //   console.log(p)
  //   }
  const [phoneNum, setPhoneNum] = useState('')
  const [password, setPassword] = useState('')
  function handlePhoneNum(event) {
    setPhoneNum(event.target.value)
  }
  function handlePassword(event) {
    setPassword(event.target.value)
  }
  useEffect(() => {console.log(phoneNum);}, [phoneNum])
  function myFunction(event) {
    console.log(phoneNum)
    console.log(password)
    event.preventDefault()

  }
  return (
    <Modal handleClose={setIsOpenPropName}>
      <div className='relative w-[520px] h-[324px] py-[20px] px-[30px] bg-white mt-7 mx-auto'>
        <form name='formLogin' className='flex flex-col gap-5 items-center'> 
          <div className='text-4xl text-[#252525] text-medium uppercase leading-[32px] tracking-[0.36px]'>Đăng nhập</div>
          <input name='phonelogin' className=' border border-[e1e1e1] focus:outline-none w-[100%] text-sm text-[#55595c] leading-[1.3333] py-[11px] px-[20px]' type='text' placeholder='Điện thoại' value={phoneNum} onChange={handlePhoneNum} />
          <input name='passlogin' className=' border border-[e1e1e1] focus:outline-none w-[100%] text-sm text-[#55595c] leading-[1.3333] py-[11px] px-[20px]' type='password' placeholder='Mật khẩu'  value={password} onChange={handlePassword} />
          <div>
            <button className="text-[21px] leading-[10px] text-white bg-red-600 p-2.5 mr-[10px] hover:text-black hover:bg-white hover:border border-[e1e1e1]" onClick={myFunction} >Đăng nhập</button>
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
