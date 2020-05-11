import React, { Component } from 'react'

var color = true;

export class Disconnect extends Component {

    getStyle = () => {

        console.log(color);

        if (color) {
            color = false;
            return {
                backgroundColor: '#f4f4f4',
            }
        }
        else {
            color = true;
            return {
                backgroundColor: 'red',
            }
        }
    }

    
    
    render() {
        return (
            <div >
                <button type="button" onClick={this.props.disconnect} > Disconnect</button>
            </div>
        )
    }
}


export default Disconnect
