import React, { Component } from 'react';

// Custom CSS
import './App.css';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BmiCalculator from './Components/BmiCalculator/BmiCalculator'

class App extends Component {
  render() {
    return(
      <Container>
        <Row>
          <Col>
            <BmiCalculator />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
