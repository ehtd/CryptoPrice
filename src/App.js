import React, { Component } from 'react';
import './App.css';
import getSamples from './sample';
import Coin from './components/Coin';

class App extends Component {
  render() {

    const samples = getSamples();
    return (
      <div>
        {
          samples.map((coin) => {
            const utc = Number(coin.last_updated);
            const date = new Date(0);
            date.setUTCSeconds(utc);

            const coinInfo = {
              name: coin.name,
              symbol: coin.symbol,
              price: Number(coin.price_usd),
              lastUpdated: date
            }
            
            return <Coin key={coin.id} info={coinInfo}/>
          })
        }
      </div>
    );
  }
}

export default App;
