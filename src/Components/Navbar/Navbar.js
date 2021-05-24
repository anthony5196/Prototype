import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../logow.webp";
import SignUpButton from "../Buttons/SignUpButton";
import LoginButton from "../Buttons/LoginButton";

import "./Navbar.css";

const MyNavbar = () => {
  return (
    <div>
      <Container>
        <Navbar
          bg="lightdark"
          fixed="top"
          variant="lightdark"
          expand=""
          className="nav-theme animate-navbar justify-content-between "
        >
          <div>
            <Navbar.Brand href="https://anthony5196.github.io/">
              <img className="logo" src={Logo} alt="" />
              Joe Lepe
            </Navbar.Brand>
          </div>

          <Nav>
            <Form inline>
              <Form.Group>
                <LoginButton />
              </Form.Group>
              <SignUpButton />
            </Form>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default MyNavbar;
