import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Form, Modal } from "react-bootstrap";

const SignUpButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Form.Group controlId="formButton">
        <Col>
          <Button
            onClick={handleShow}
            className="setEmail"
            variant="primary"
            size={"lg"}
          >
            Sign Up-Its Free!
          </Button>
        </Col>
      </Form.Group>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col md>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUpButton;
