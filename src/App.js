import React, { Component } from 'react';
import './App.css';
//import Graph from './components/graph';
import io from 'socket.io-client';
import './css/navbar.css'

import Disconnect from './components/disconnect';
import Connect from './components/connect';
import Stock from './components/stock';
import Price from './components/prices';


const protocolo = "wss://";
const servidor = "le-18262636.bitzonte.com";
const ruta = "/stocks";

const socket = io(protocolo + servidor , {
  path: ruta
  });



class App extends Component {

  state = {
      stock: [
      ],

      prices: [
      ], 

      exchange: [

      ],

      total_vol_exchange: 0,

  }
  update = (current) => {    
    console.log(this.state.prices)
    var new_ticker = true;

    this.setState({prices: this.state.prices.map( data => {  
        if (data.ticker === current.ticker) {
          data.value.push(current.value)
          data.time.push(current.time)
          var j = 1;
          var value = 0;
          var i = 0;
            for (i=0; i < data.value.length; i++) {
              //console.log(data.value[i])
                value += data.value[i]
                j += 1
            }
            //console.log(value)
            value = value
          data.avg = value

          new_ticker = false
        }
        return data
       }
        )
        
    })

  
  if (new_ticker) {
    var new_price = this.state.prices

    new_price.push({
      ticker: current.ticker,
      value: [current.value],
      avg: current.value,
      time: [current.time]
     })

    this.setState({prices: new_price})
    }

  }


  update_stock = (current) => {

    console.log(this.state.stock)
    var new_sell = true;
    
    this.setState({stocks: this.state.stock.map( data => {
          //console.log(data.ticker, '==', current.ticker)
          if (data.ticker === current.ticker) {
            if (data.high < current.value) {
              data.high = current.value;
            }
            if (data.low > current.value) {
              data.low = current.value;
            }
            data.delta_price = current.value / data.last_price - 1
            data.last_price = current.value;

            data.time_x.push(current.time)
            data.price_y.push(current.value)

            const tupla = [current.time, current.value]
            data.graph.push(tupla)
            new_sell = false
          }
          return data
        })
      
      })

      if (new_sell) {

        var new_stock = this.state.stock
        new_stock.push({
          ticker: current.ticker,
          volume: 0,
          time: current.time,
          high: 0,
          low: 99999999999999999999,
          last_price: 0,
          delta_price:0, 
          time_x: [],
          price_y: [], 
          graph: []
        })
        this.setState({stocks: new_stock})
        }


  }

  add_sell_stock = (current) => {
    var new_sell = true;
    
    this.setState({stocks: this.state.stock.map( data => {
          //console.log(data.ticker, '==', current.ticker)
          if (data.ticker === current.ticker) {
            data.volume += current.volume
            new_sell = false
          }
          return data
        })
      
      })

      if (new_sell) {

        var new_stock = this.state.stock
        new_stock.push({
          ticker: current.ticker,
          volume: current.volume,
          time: current.time,
          high: 0,
          low: 99999999999999999999,
          last_price: 0,
          delta_price:0, 
          time_x: [],
          price_y: [],
          graph: []
        })
        this.setState({stocks: new_stock})
        }
      }

    disconnect = (e) => {
      socket.disconnect();
      socket.emit("EXCHANGES", (data) => {
        console.log(data);
      })
          console.log('###############################################');
          console.log('################## DISCONNECT #################');
          console.log('###############################################');
    }

  connect = (e) => {
    socket.connect();
    console.log('###############################################');
    console.log('##################  CONNECT   #################');
    console.log('###############################################');
  }



  componentDidMount() {
    console.log('Página montada')
    console.log('Encendiendo socket')

    socket.emit("EXCHANGES", (data) => {
      console.log(data);
    })

    socket.on("UPDATE", (data) => {
      this.update(data)
      this.update_stock(data)
    });
       
    socket.on("BUY", (data) => {

    });

    socket.on("SELL", (data) => {
      this.add_sell_stock(data)
    });
    
  }

  render() {

    //console.log(this.state.data)
    return (
      <div className="App">

        <ul className="nav-ul">
          <li className="nav-li"> <Disconnect disconnect={this.disconnect} />  </li>
          <li className="nav-li"><Connect connect={this.connect} /></li>
        </ul>
         <h1> Mercado de acciones  </h1>

        <Stock className="customers" stock={this.state.stock}/>
        <Price  prices={this.state.prices}/> 
      </div>
      );
    }
}





export default App;
