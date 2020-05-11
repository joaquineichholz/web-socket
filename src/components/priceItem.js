import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PriceItem extends Component {

   
    render() {
    
        
        const transaction = this.props.transaction;
        return (
            <tr>
                <td> {transaction.ticker} </td>
                <td> {transaction.avg} </td>
                <td> {transaction.time} </td>
            </tr>
        )
    }
}

// Proptypes
/*StockItem.PropTypes = {
    StockItem: PropTypes.object.isRequired
}*/
export default PriceItem
