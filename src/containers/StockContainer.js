import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        { this.props.stocks.map( stock => 
            <Stock stock={stock} key={stock.id} onClick={this.props.buyClick}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
