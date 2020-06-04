import React, { Component } from 'react';

// Bootstrap imports
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Alert from 'react-bootstrap/Alert';

class MinMaxField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      value: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return(
      <React.Fragment>
        <Form.Label>{this.props.label}</Form.Label>
        <FormControl type={this.props.type} name={this.props.name} onChange={this.handleChange} placeholder={this.props.label} />
        {this.state.error ? <Alert key={this.props.name} variant="danger">{this.state.error}</Alert> : null}
      </React.Fragment>
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.inError(this.checkBusinessRule(event.target));
    if (!this.checkBusinessRule(event.target)) {
      this.props.onValue(this.props.name, event.target.value);
    }
  }
  
  checkBusinessRule(event) {
    if (event.type === "number") {
      const intValue = parseInt(event.value);
      if (isNaN(intValue) || intValue < this.props.min || intValue > this.props.max) {
        this.setState({error: `Waarde moet een getal zijn tussen ${this.props.min} en ${this.props.max}`});
        return true;
      } else {
        this.setState({error: ""});
        return false; 
      }
    } else if (event === "string") {
      if (event.value.length < this.props.min || event.value.length > this.props.max) {
        this.setState({error: `Waarde moet tussen ${this.props.min} en ${this.props.max} karakters lang zijn`});
        return true;
      } else {
        this.setState({error: ""});
        return false; 
      }
    } else {
      this.setState({error: ""});
      return false; 
    }
  }
}

export default MinMaxField