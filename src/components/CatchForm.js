import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const CatchForm = () => {
  const [formData, setFormData] = useState({
    species: '',
    quantity: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="catch-form-card">
            <Card.Body>
              <h2 className="text-center">Log Your Catch</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="species">
                  <Form.Label>Species</Form.Label>
                  <Form.Control
                    type="text"
                    name="species"
                    value={formData.species}
                    onChange={handleChange}
                    placeholder="Enter species"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="quantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Enter quantity"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    required
                  />
                </Form.Group>

                <Button variant="primary my-1" type="submit" block>
                  Submit Catch
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CatchForm;
