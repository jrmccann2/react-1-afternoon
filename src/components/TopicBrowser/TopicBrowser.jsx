import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd.jsx'
import FilterObject from '../Topics/FilterObject.jsx';
import FilterString from '../Topics/FilterString.jsx';
import Palindrome from '../Topics/Palindrome.jsx';
import Sum from '../Topics/Sum.jsx';

export default class TopicBrowser extends Component {
  render(){
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}