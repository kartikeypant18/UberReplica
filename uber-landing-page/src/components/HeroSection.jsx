import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import heroImage from "../assets/Ride-with-Uber.webp";
import "../styles.css";

const HeroSection = () => {
  return (
    <Container
      fluid
      className="hero-section d-flex align-items-center justify-content-center"
    >
      <Row className="w-100">
        <Col
          md={6}
          className="text-white d-flex flex-column justify-content-center align-items-start ps-5"
        >
          <div className="text-container">
            <h1>Go anywhere with Uber</h1>
            <p>Request a ride, hop in, and go.</p>
          </div>
          <Form className="mt-4 d-flex flex-column align-items-start w-100">
            <Form.Group className="mb-3 form-group">
              <Form.Control
                type="text"
                placeholder="Enter location"
                className="bg-light text-dark"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Control
                type="text"
                placeholder="Enter destination"
                className="bg-light text-dark"
              />
            </Form.Group>
            <Button variant="light">See prices</Button>
          </Form>
        </Col>
        <Col md={6} className="text-center">
          <img src={heroImage} alt="Uber Hero" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
