import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <Row className="">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Bycatch Statistics</Card.Title>
              <Card.Text>Visualization of bycatch data will go here.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Fishing Patterns</Card.Title>
              <Card.Text>Data visualization on fishing trends.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
