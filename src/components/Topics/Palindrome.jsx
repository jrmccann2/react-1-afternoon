import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      palindrome: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    this.setState({userInput: e.target.value})
  }

  handleClick(){
    let {userInput} = this.state;
    let palindrome = true
    for(let i=0; i<=(userInput.length/2); i++){
      if(userInput[i] !== userInput[userInput.length-(i+1)]){
        palindrome = false
      }
    }
    this.setState({palindrome})
  }

  render(){
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className='inputLine' type="text" onChange={this.handleChange}/>
        <button className='confirmationButton' onClick={this.handleClick}>Submit</button>
        <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
      </div>
    )
  }
}