import React, { Component } from 'react';
import './App.css';
import Coin from './components/Coin';
import { formatPrice, formatDate } from './helpers';

class App extends Component {

  constructor() {
    super();

    this.state = {
      coins: []
    }

    fetch('https://api.coinmarketcap.com/v1/ticker/')
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({ coins: data });
    })
    .catch( (error) => {
      console.log('API request failed:', error);
    }) 
  }

  render() {
    return (
      <div>
        {
          this.state.coins.map((coin) => {
            const coinInfo = {
              name: coin.name,
              symbol: coin.symbol,
              price: formatPrice(coin.price_usd),
              lastUpdated: formatDate(coin.last_updated)
            }
            
            return <Coin key={coin.id} info={coinInfo}/>
          })
        }
      </div>
    );
  }
}

export default App;
