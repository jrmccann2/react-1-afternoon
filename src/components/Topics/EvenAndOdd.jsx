import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor(props){
    super(props);

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    this.setState({userInput: e.target.value})
  }

  handleClick(){
    let {userInput} = this.state;
    let oddArray = userInput.split(',').filter( char => (char/1)%2).map( char => Number(char))
    let evenArray = userInput.split(',').filter( char => !(char/1%2)).map( char => Number(char))
    this.setState({
      oddArray,
      evenArray
    })
  }

  render(){
    let {oddArray, evenArray} = this.state;
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' type="text" onChange={this.handleChange} />
        <button className='confirmationButton' onClick={this.handleClick} >Split</button>
        <span className='resultsBox'>Evens: {JSON.stringify(evenArray)}</span>
        <span className='resultsBox'>Odds: {JSON.stringify(oddArray)}</span>
      </div>
    )
  }
}