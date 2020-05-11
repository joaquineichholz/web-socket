import React, { Component } from 'react';
import PriceItem from './priceItem';
import PropTypes from 'prop-types';

export class  Prices extends Component {
    render() {
        return (
            <div>
                <h1> Prices </h1>
                <table id="customers">
                <tr>
                    <th> Ticker </th>
                    <th> price </th>
                    <th> Time </th>
                </tr>
                {this.props.prices.map((transaction) => (
                    <PriceItem key={transaction.ticker} transaction={transaction} />
                 ))
                 };
                 </table>
            </div>
        )
    }
}
// Proptypes
//Prices.PropTypes = {
  //  Prices: PropTypes.array.isRequired
//}

export default Prices
