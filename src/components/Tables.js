import { sizeHeight } from '@mui/system';
import React, { Component } from 'react';
class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceTables: [
        {
          image:
            'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
          name: 'Iphone 6',
          prices: '1700 USD',
          note: '',
        },
        {
          image:
            'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
          name: 'Iphone 7',
          prices: '2000 USD',
          note: '',
        },
        {
          image:
            'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
          name: 'Iphone 8 ',
          prices: '2300 USD',
          note: '',
        },
        {
          image:
            'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
          name: 'Iphone X',
          prices: '2500 USD',
          note: '',
        },
      ],
    };
  }

  renderTableData() {
    return this.state.priceTables.map((priceTable, index) => {
      const { image, name, prices, note } = priceTable;
      return (
        <tr>
          <td
            style={{
              border: '1px solid #eceeef',
              height: '49px',
              width: '157px',
            }}
          >
            <img src={image} style={{ height: '49px', width: '49px' }}></img>
          </td>
          <td
            style={{
              border: '1px solid #eceeef',
              height: '49px',
              width: '481px',
            }}
          >
            {name}
          </td>
          <td
            style={{
              border: '1px solid #eceeef',
              height: '49px',
              width: '181px',
            }}
          >
            {prices}
          </td>
          <td
            style={{
              border: '1px solid #eceeef',
              height: '49px',
              width: '202px',
            }}
          >
            {note}
          </td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    const header = Object.keys(this.state.priceTables[0]);
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
    // return (
    //   <thead>
    //     <tr>
    //       <th style={{ height: '49px', width: '157px' }}>Hình ảnh</th>
    //       <th style={{ height: '49px', width: '481px' }}>Sản phẩm</th>
    //       <th style={{ height: '49px', width: '49px' }}>Giá sỉ</th>
    //       <th style={{ height: '49px', width: '49px' }}>Ghi chu</th>
    //     </tr>
    //   </thead>
    // );
  }

  render() {
    return (
      <div className='table-bordered'>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </div>
    );
  }
}
export default Tables;
