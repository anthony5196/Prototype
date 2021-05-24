import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Form } from "react-bootstrap";
import SignUpButton from "../../Buttons/SignUpButton";

import "./SignUp.css";

function SignUp() {
  return (
    <div>
      <header className="App-header">
        <Container>
          <Row className="description" id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">
              Trello helps teams move work forward
            </h1>
            <p className="pt-2 font-details-b ">
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trello.
            </p>
          </Row>

          <Form>
            <Row>
              <SignUpButton />
            </Row>
          </Form>
        </Container>
      </header>
    </div>
  );
}

export default SignUp;
