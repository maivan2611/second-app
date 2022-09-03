
import React, { Component } from 'react';
import { sizeHeight } from '@mui/system';
import Tbody from './Tbody'
// class Tables extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
function Tables(props) {
    const priceTables = [
        {
            image:
                'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
            name: 'Iphone 6',
            prices: '1700 USD',
            note: 'Đẹp keng',
        },
        {
            image:
                'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
            name: 'Iphone 7',
            prices: '2000 USD',
            note: 'Đẹp keng',
        },
        {
            image:
                'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
            name: 'Iphone 8 ',
            prices: '2300 USD',
            note: 'Đẹp keng',
        },
        {
            image:
                'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
            name: 'Iphone X',
            prices: '2500 USD',
            note: 'Đẹp keng',
        },
    ]

    return (
        <div>
            <table className=" w-[100%]">
                <thead className='bg-[#898989] '>
                    <tr >
                        <th className='text-xs font-bold text-[white] heading-[30px] py-[3px] px-[8px] border border-[#eceeef]'>Hình ảnh</th>
                        <th className='text-xs font-bold text-[white] heading-[30px] py-[3px] px-[8px] border border-[#eceeef]'>Sản phẩm</th>
                        <th className='text-xs font-bold text-[white] heading-[30px] py-[3px] px-[8px] border border-[#eceeef]'>Giá sỉ</th>
                        <th className='text-xs font-bold text-[white] heading-[30px] py-[3px] px-[8px] border border-[#eceeef]'>Ghi chú</th>
                    </tr>
                </thead>
                <tbody>
                    {priceTables.map(priceTable => (
                        <Tbody
                            image={priceTable.image}
                            name={priceTable.name}
                            price={priceTable.prices}
                            note={priceTable.note}
                        />
                    ))}
                </tbody>
            </table>
        </div>

    );

}
export default Tables;


