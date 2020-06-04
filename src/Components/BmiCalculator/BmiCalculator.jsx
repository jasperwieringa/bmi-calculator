import React, { Component } from 'react';

import BmiForm from './BmiForm'

class BmiCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <React.Fragment>
        <h1>BMI Calculator</h1>
        <p>Vul de velden in om je BMI te berekenen</p>
        <BmiForm />
      </React.Fragment>
    )
  }
}

export default BmiCalculator;