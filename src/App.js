import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CatchForm from './components/CatchForm';
import Dashboard from './components/Dashboard';
import HeatmapPage from './components/HeatmapPage'; // Import the HeatmapPage component
import { Container, Row, Col } from 'react-bootstrap';  // Add this import

function App() {
  return (
    <Router>
      <div className="App mb-2">
        <header className="App-header">
          <nav>
            {/* Simple navigation bar */}
            <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/heatmap">Heatmap</Link>
          </nav>
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
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <Container>
                  <Row>
                    <Col>
                      <CatchForm />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Dashboard />
                    </Col>
                  </Row>
                </Container>
              }
            />
            {/* Dashboard Route */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Heatmap Route */}
            <Route path="/heatmap" element={<HeatmapPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
