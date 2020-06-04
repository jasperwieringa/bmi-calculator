import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import MinMaxField from '../InputFields/MinMaxField'

class BmiForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inError: true };
    this.inError = this.inError.bind(this);
    this.onValue = this.onValue.bind(this);
    this.onClickBereken = this.onClickBereken.bind(this);
  }

  render() {
    return(
      <React.Fragment>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <MinMaxField type="number" value="" min="18" max="130" name="age" label="Leeftijd" inError={this.inError} onValue={this.onValue}/>
            <MinMaxField type="number" value="" min="1.00" max="3.00" name="length" label="Lengte in (m)" inError={this.inError} onValue={this.onValue}/>
            <MinMaxField type="number" value="" min="40" max="300" name="weight" label="Gewicht in (kg)" inError={this.inError} onValue={this.onValue}/>
          </Form.Group>
          <Button variant={this.state.inError ? "outline-primary" : "primary"} disabled={this.state.inError} onClick={this.onClickBereken}>Bereken BMI!</Button>
        </Form>
      </React.Fragment>
    )
  }

  inError(value) {
    this.setState({inError:value});
  }
  
  onValue(name, value) {
    let state = {};
    state[name] = value;
    this.setState(state);
  }

  onClickBereken() {
    let controller = new Controller();
    console.log(controller.calculateBmi(this.state.length, this.state.weight));
  }
}

class Controller {
  saveToDatabase() {

  }

  calculateBmi(length, weight) {
    let model = new Model();
    return model.calculateBmi(length, weight);
  }
}

class Model {
  calculateBmi(length, weight) {
    const divideBy = length*length;
    return weight / divideBy;
  }
}

export default BmiForm;