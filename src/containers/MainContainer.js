import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [], 
    myStocks: [],
    displayStocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocks => 
          this.setState({
            allStocks: stocks,
          })
        )
  }

  buyClick = (stock) => {
    this.setState({
      myStocks: [...this.state.myStocks, stock]
    })
  } 

  sellClick = (stock) => {
    this.setState({
      myStocks: this.state.myStocks.filter( s => s !== stock)
    })
  } 

  


  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.allStocks} buyClick={this.buyClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.myStocks} sellClick={this.sellClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
