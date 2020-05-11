import React, { Component } from 'react';
import StockItem from './stockItem';
import PropTypes from 'prop-types';
import Graph from './graph'

export class Stock extends Component {
    render() {
        return (
            <div>
                <h1> STOCK </h1>
                <table className="table">

                <tr>
                    <th> Ticker </th>
                    <th> Volume </th>
                    <th> High </th>
                    <th> Low </th>
                    <th> Last Price </th>
                    <th> Delta Price </th>
                </tr>
                {this.props.stock.map((stock) => (
                    <StockItem key={stock.ticker} stock={stock} />
                ))
                 };
                 </table>
                 

                 {this.props.stock.map((stock) => (
                    <Graph key={stock.ticker} stock={stock} />
                
                    ))
                 };

                 

            </div>
        );
    }
}

// Proptypes
StockItem.PropTypes = {
    StockItem: PropTypes.array.isRequired
}

export default Stock
