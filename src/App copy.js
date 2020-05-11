import React, { Component } from "react";
import socketIOClient from "socket.io-client";


var socket = socketIOClient('ws://le-18262636.bitzonte.com', {
      path: '/stocks'
    });

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      updates: []
    };
    this.startSocket = this.startSocket.bind(this);
    
  }

  componentDidMount(){
    console.log('Página montada')
    
    socket.emit('EXCHANGES', (data) => {
      console.log(data);
    });

    console.log('emitido')

  }
  
  render(){

  return (
    <div className="App">
    <p>
      HELLO
      <input type='checkbox' onChange={this.startSocket} ></input>
      {this.state.updates}
    </p>
    </div>
  );
}}

export default App;