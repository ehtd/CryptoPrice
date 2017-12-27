import React, { Component } from 'react';
import './App.css';
import getSamples from './sample';
import Coin from './components/Coin';
import { formatPrice, formatDate } from './helpers';

class App extends Component {

  constructor() {
    super();

    this.updateCoins = this.updateCoins.bind(this);

    this.state = {
      coins: []
    }
  }

  updateCoins(coins) {
    this.setState({ coins });
  }

  render() {
    const samples = getSamples();
    return (
      <div>
        {
          samples.map((coin) => {
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
