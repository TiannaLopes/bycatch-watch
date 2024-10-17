import React from 'react';
import './App.css';
import CatchForm from './components/CatchForm';
import Dashboard from './components/Dashboard';
import { Container, Row, Col } from 'react-bootstrap';  // Add this import

function App() {
  return (
    <div className="App mb-2">
      <header className="App-header">
        <div className="banner">
          <img
            src="/assets/fishing-nets.jpg"
            alt="Ocean Banner"
            className="banner-image"
          />
          <h1 className="banner-text">Bycatch Watch</h1>
        </div>
      </header>
      <main>
        <Container>
          <Row>
            <Col>
              <CatchForm />
            </Col>
          </Row>
          <Row > 
            <Col>
              <Dashboard />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
