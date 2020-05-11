import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class StockItem extends Component {
    render() {
        const stock = this.props.stock;

        return (
            <tr>
                <td> {stock.ticker} </td>
                <td> {stock.volume} </td>
                <td> {stock.high} </td>
                <td> {stock.low} </td>
                <td> {stock.last_price} </td>
                <td> {stock.delta_price} </td>
            </tr>
        )
    }
}

// Proptypes
/*StockItem.PropTypes = {
    StockItem: PropTypes.object.isRequired
}*/
export default StockItem
