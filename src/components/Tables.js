import { sizeHeight } from '@mui/system';
import React, { Component } from 'react';
class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceTables: [
        {
          id: 1,
          image:
            'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
          name: 'Iphone 6',
          prices: '1700 USD',
          note: '',
        },
        {
          id: 2,
          image:
            'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
          name: 'Iphone 7',
          prices: '2000 USD',
          note: '',
        },
        {
          id: 3,
          image:
            'http://nguonsidienthoai.com//image/iphone-7-32gb-2924j430x480.jpg',
          name: 'Iphone 8 ',
          prices: '2300 USD',
          note: '',
        },
        {
          id: 4,
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
      const { id, image, name, prices, note } = priceTable;
      return (
        <tr key={id}>
          <td style={{display: 'none'}}>{id}</td>
          <td>
            <img src={image} style= {{height: '70px', width:'70px'}} ></img>
          </td>
          <td>{name}</td>
          <td>{prices}</td>
          <td>{note}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    const header = Object.keys(this.state.priceTables[0]);
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    );
  }
}
export default Tables;
