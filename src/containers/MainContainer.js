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
            displayStocks: stocks
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

  handleSort = (value) => {
    let arr = []
    switch(value){
      case "Alphabetically":
        arr = this.state.displayStocks.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case "Price":
          arr = this.state.displayStocks.sort((a,b) => a.price > b.price ? 1 : -1)
        break;
      default:
        console.log("Wrong choice")
    }
    this.setState({ displayStocks: arr })
  }

  filterStocks = (value) => {
    if(value !== "All"){
      this.setState({ 
        displayStocks: this.state.allStocks.filter( stock => stock.type === value) 
      })
    } else {
      this.setState({
        displayStocks: this.state.allStocks
      })
    }
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar handleSort={this.handleSort} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} buyClick={this.buyClick}/>

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
