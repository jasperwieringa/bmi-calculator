import React, { Component } from 'react';

// Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Custom component imports
import MinMaxField from '../InputFields/MinMaxField'
import Controller from '../../Controllers/BmiController';

class BmiForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inError: true,
      name: "",
      age: "",
      length: "",
      weight: "",
    };
    this.inError = this.inError.bind(this);
    this.onValue = this.onValue.bind(this);
    this.onClickBereken = this.onClickBereken.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  render() {
    return(
      <React.Fragment>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <MinMaxField type="text" min="1" max="130" name="name" label="Naam" inError={this.inError} onValue={this.onValue}/>
            <MinMaxField type="number" min="18" max="130" name="age" label="Leeftijd" inError={this.inError} onValue={this.onValue}/>
            <MinMaxField type="number" min="1.00" max="3.00" name="length" label="Lengte in (m)" inError={this.inError} onValue={this.onValue}/>
            <MinMaxField type="number" min="40" max="300" name="weight" label="Gewicht in (kg)" inError={this.inError} onValue={this.onValue}/>
          </Form.Group>
          <Button variant={this.state.inError ? "outline-primary" : "primary"} disabled={this.state.inError} onClick={this.onClickBereken}>Bereken BMI!</Button>
          <Button variant={this.state.inError ? "outline-success" : "success"} disabled={this.state.inError} onClick={this.onClickSave}>Sla gegevens op</Button>
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
    const controller = new Controller();
    const bmi = controller.calculateBmi(this.state.length, this.state.weight);
    console.log(bmi);
  }

  onClickSave() {
    var controller = new Controller();
    controller.saveToDatabase(this.state.name, this.state.age, this.state.length, this.state.weight)
  }
}

export default BmiForm;