import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor(){
    super();

    this.state = {
      unfilteredArray: [
        {name: 'Josh', age: 27, employed: true, job: 'mentor'},
        {name: 'Steven', age: 94, employed: false},
        {name: 'Carter', age: 22, employed: true, job: 'mentor'}
      ],
      userInput: "",
      filteredArray: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    this.setState({userInput: e.target.value})
  }

  handleClick(){
    let {userInput, unfilteredArray} = this.state;
    let filteredArray = unfilteredArray.filter( obj => obj[userInput])
    this.setState({filteredArray})
  }

  render(){
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unfilteredArray)}</span>
        <input className='inputLine' type="text" onChange={this.handleChange} />
        <button className='confirmationButton' onClick={this.handleClick} >Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}