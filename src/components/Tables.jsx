
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
//     };
//   }

//   renderTableData() {
//     return this.state.priceTables.map((priceTable, index) => {
//       const { image, name, prices, note } = priceTable;
//       return (
//         <tr>
//           <td
//             style={{
//               border: '1px solid #eceeef',
//               height: '49px',
//               width: '157px',
//             }}
//           >
//             <img src={image} style={{ height: '49px', width: '49px' }}></img>
//           </td>
//           <td
//             style={{
//               border: '1px solid #eceeef',
//               height: '49px',
//               width: '481px',
//             }}
//           >
//             {name}
//           </td>
//           <td
//             style={{
//               border: '1px solid #eceeef',
//               height: '49px',
//               width: '181px',
//             }}
//           >
//             {prices}
//           </td>
//           <td
//             style={{
//               border: '1px solid #eceeef',
//               height: '49px',
//               width: '202px',
//             }}
//           >
//             {note}
//           </td>
//         </tr>
//       );
//     });
//   }

//   renderTableHeader() {
//     const header = Object.keys(this.state.priceTables[0]);
//     return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);

// //   render() {
//     return (
//       <div className='table-bordered'>
//         <tbody>
//           <tr>{this.renderTableHeader()}</tr>
//           {this.renderTableData()}
//         </tbody>
//       </div>
//     );
//   }
// }
export default Tables;



    // return (
    //   <thead>
    //     <tr>
    //       <th style={{ height: '49px', width: '157px' }}>Hình ảnh</th>
    //       <th style={{ height: '49px', width: '481px' }}>Sản phẩm</th>
    //       <th style={{ height: '49px', width: '49px' }}>Giá sỉ</th>
    //       <th style={{ height: '49px', width: '49px' }}>Ghi chu</th>
    //     </tr>
    //   </thead>
    // // );         
