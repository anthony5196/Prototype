import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Form, Modal } from "react-bootstrap";

const LoginButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");

  const getEmail = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };
  return (
    <Col>
      <Button
        variant="outline-primary"
        size={"lg"}
        onClick={handleShow}
        className="login"
      >
        Login
      </Button>
      <Modal show={show} onHide={handleClose} type="text" onChange>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                onChange={getEmail}
                value={email}
              />
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
          <Button
            variant="primary"
            type="submit"
            onClick={setEmail && handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default LoginButton;
