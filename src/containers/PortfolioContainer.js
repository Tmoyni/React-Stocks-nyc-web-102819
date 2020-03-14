import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let uniqueArr = Array.from(new Set(this.props.stocks))
    
    return (
      <div>
        <h2>My Portfolio</h2>
        { uniqueArr.map( stock => 
            <Stock stock={stock} key={stock.id} onClick={this.props.sellClick}/>)
        }
      </div>
    );
  }

}

export default PortfolioContainer;
