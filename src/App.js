import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BmiCalculator from './Components/BmiCalculator/BmiCalculator'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <BmiCalculator />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
