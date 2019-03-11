import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor(props){
    super(props);

    this.state = {
      unfilteredArray: ['job', 'josh', 'join', 'joy', 'joyful', 'joyfully'],
      filteredArray: [],
      userInput: ""
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    // this.setState({userInput: e.target.value})
    let {unfilteredArray} = this.state;
    let filteredArray = unfilteredArray.filter( word => word.startsWith(e.target.value))
    this.setState({filteredArray})
  }

  // handleClick(){
  //   let {userInput, unfilteredArray} = this.state;
  //   let filteredArray = unfilteredArray.filter( word => word === userInput)
  //   this.setState({filteredArray})
  // }

  render(){
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Unfiltered String: {JSON.stringify(this.state.unfilteredArray)}</span>
        <input type="text" className='inputLine' onChange={this.handleChange}/>
        <button className='confirmationButton' onClick={this.handleClick}>Filter</button>
        <span className='resultsBox filterStringRB'>Filtered String: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}