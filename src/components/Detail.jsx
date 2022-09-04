import React, { useState } from 'react'
import TopHeader from './Top';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { priceTables } from'../fake-res/product-list';
import {
    useParams
  } from "react-router-dom";
function Detail(props) {
    const [count,setCount]=useState(1)
    const {id} = useParams()
    
    console.log(id);
    function decrease() {
        if (count>1) {
            setCount(count - 1)   
        }
    }
    let product = priceTables.find(function(product) {
        return product.id == id;
      });
    console.log(priceTables);
    console.log(product.view); // undefined
    return (
        <div >
            <TopHeader/>
            <Header/>
            <div >
                <div className="flex mx-[79px]">
                    <div className="w-[100%] flex-[40%]">
                        <img className='w-[458px] h-[458px]' src={product.image}/>
                        <img className='w-[100px] h-[100px]' src={product.image}/>
                    </div>
                    <div className="flex-[37%]">
                        <div className='text-2xl text-black46 font-medium tracking-[0.24px] leading-[30px] mb-2.5'>{product.name}</div>
                        <div className='text-sm text-black33 leading-[1.7]' >
                            <span className='text-redDe'>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            {product.numOfReview} đánh giá
                        </div>
                        <div className='text-sm text-black33 leading-[30px]'><span className='font-bold'>Lượt xem : </span>{product.view}</div>
                        <div className='text-sm text-black46 leading-[1.7]'>Giá sỉ : <span className='text-[18px] font-bold text-redDe mr-2.5'>{product.wholesalePrice} </span><a className='font-bold text-black33 hover:text-redDe cursor-pointer'><i class="fa fa-hand-o-right" aria-hidden="true"/> Chính sách giá sỉ</a></div>
                        <div className='text-sm text-blue35 leading-[1.7] font-bold'>Giá lẻ : <span className='text-[18px] font-bold text-redDe mr-2.5'>{product.retailPrice}</span>(DÀNH CHO KHÁCH MUA LẺ)</div>
                        <div className='text-sm leading-[1.7] text-black46'>Mã sản phẩm: <span className='font-bold'>{product.productCode}</span></div>
                        <div className='text-sm leading-[1.7] text-black46'>Màu sắc: <span className='font-bold'>Như hình</span></div>
                        <div className='text-sm leading-[1.7] text-black46'>Tình trạng: <span className='font-bold'>{product.statusProduct}</span></div>
                        <div>
                            Số lượng :
                            <button className='w-8 h-8 border border-coloborder' onClick={decrease}>-</button>
                            <button className='w-8 h-8 border border-coloborder'>{count}</button>
                            <button className='w-8 h-8 border border-coloborder' onClick={() => setCount((count) => count + 1)}>+</button>
                        </div>
                        <button className='text-sm text-white leading-[25px] py-2.5 px-[30px] bg-redDe border rounded hover:text-[#252525] hover:bg-white hover:border-[#e1e1e1] w-[100%]'><i className="fa fa-cart-plus " aria-hidden="true"></i> Thêm vào đơn hàng</button>
                        <button className='text-xs text-[#252525] leading-[25px] py-2.5 px-[30px] border-[#e1e1e1] bg-white  border rounded hover:text-white hover:bg-redDe block w-[100%]'><i className="fa fa-opencart"  aria-hidden="true"></i> Đặt hàng ngay</button>
                        <div className='text-sm text-black33 leading-[1.7]'><i className="fa fa-phone-square text-redDe" aria-hidden="true"></i><a className='text-blue35 font-bold' href=""> 0908773474</a>  (zalo, viber) để được tư vấn</div>
                        <div className=''>
                            <a href="" className=''><i className="fa fa-facebook text-[21px] text-[#3b5998] leading-[21px] m-[5px]"/><span className='text-[11.2px] text-[#3b5998] leading-[11.2px] '>Like</span></a>
                            <a href=""><i className="fa fa-google text-[21px] text-[#db4a38] leading-[21px] m-[5px]"/><span className='text-[11.2px] text-[#dd4b39] leading-[11.2px]'>+1</span></a>
                            <a href=""><i className="fa fa-twitter text-[21px] text-[#00aced] leading-[21px] m-[5px]"/><span className='text-[11.2px] text-[#0087ba] leading-[11.2px]'>Tweet</span></a>
                            <a href=""><i className="fa fa-linkedin text-[21px] first-letter:text-[#007bb6] leading-[21px] m-[5px]"/><span className='text-[11.2px] text-[#0079b3] leading-[11.2px]'>Share</span></a>
                            <a href=""><i className="fa fa-pinterest text-[21px] text-[#cb2027] leading-[21px] m-[5px]"/><span className='text-[11.2px] text-[#c51f26] leading-[11.2px]'>Pin it</span></a>
                        </div>
                    </div>
                    <div className="flex-[23%] border border-dashed rounded border-redDe p-2.5 my-[5px] mx-2.5 h-[100%]">
                        <div className='text-sm leading-[21px] text-black33'><i className="fa fa-angle-right text-redDe"/> Trong hộp có - <span className='text-blue35'>Hộp, sạc, tai nghe, sách hướng dẫn, cáp, cây lấy sim (Theo thực tế máy sỉ)</span></div>
                        <div className='text-sm leading-[21px] text-black33'><i className="fa fa-angle-right text-redDe"></i> Bảo hành tại Nguồn sỉ điện thoại - Địa điểm bảo hành <span className='text-blue35'>Gồm thân máy, pin, sạc -  <a className='text-blue35 curson:pointer hover:text-redDe' href="">Địa điểm bảo hành</a></span></div>
                        <div className='text-sm leading-[21px] text-black33'><i className="fa fa-angle-right text-redDe"></i> Giao hàng tận nơi tại HCM - <a className='text-blue35 curson:pointer hover:text-redDe' href="">Xem thêm</a></div>
                        <div className='text-sm leading-[21px] text-black33'><i className="fa fa-angle-right text-redDe"></i> Các lỗi được áp dụng bảo hành - <a className='text-blue35 curson:pointer hover:text-redDe' href="">Xem thêm</a></div>
                        <div className='text-sm leading-[21px] text-black33'><i className="fa fa-angle-right text-redDe"></i> Khiếu nại với NSDT - <a className='text-blue35 curson:pointer hover:text-redDe' href="">Xem thêm</a></div>
                        <div className='text-sm leading-[21px] text-black33'><i className="fa fa-angle-right text-redDe"></i> Hotline - <a className='text-blue35 curson:pointer hover:text-redDe' href=""><i className="fa fa-phone-square" aria-hidden="true"></i> 0908773474</a></div>
                    </div>
                </div>
                <div></div>
            </div>
            <Footer />
            <Button />
        </div>
    );
}

export default Detail;