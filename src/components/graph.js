import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Graph extends Component {
    render() {
        const stock = this.props.stock;
        
        return (
            <div>

        <h1> {stock.ticker}</h1>
            
            <table className="table">
            <tr>
               <th> time </th>
               <th> price </th>
           </tr>
            
            {stock.graph.map((data) => (
                <tr>
                    <td> {data[0]} </td>
                    <td> {data[1]} </td>
                </tr>
            ) )
            
             }
            
            </table>

            </div>

            
        )

    }
}

//Graph.PropTypes = {
  //  data: PropTypes.array.isRequired
//}
export default Graph;
