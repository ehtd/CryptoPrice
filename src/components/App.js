import React, { Component } from 'react';
import '../css/App.css';
import Coin from './Coin';
import { formatPrice, formatDate } from '../helpers';

class App extends Component {

  constructor() {
    super();

    this.state = {
      coins: []
    }

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=50')
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
      <div className="container-horizontal">
        {
          this.state.coins.map((coin) => {
            const coinInfo = {
              name: coin.name,
              symbol: coin.symbol,
              price: formatPrice(coin.price_usd),
              lastUpdated: formatDate(coin.last_updated),
              percent24h: Number(coin.percent_change_24h),
              percent7d: Number(coin.percent_change_7d)
            }
            
            return <Coin key={coin.id} info={coinInfo}/>
          })
        }
      </div>
    );
  }
}

export default App;
