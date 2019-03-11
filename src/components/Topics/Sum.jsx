import React, { Component } from 'react';

export default class Sum extends Component {
  constructor(props){
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick(){
    const {number1, number2} = this.state;
    let sum = number1*1 + number2*1;
    this.setState({sum})
  }

  render(){
    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine' type="text" name='number1' onChange={this.handleChange}/>
        <input className='inputLine' type="text" name='number2' onChange={this.handleChange}/>
        <button className='confirmationButton' onClick={this.handleClick}>Add</button>
        <span className='resultsBox'>Sum: {JSON.stringify(this.state.sum)}</span>
      </div>
    )
  }
}