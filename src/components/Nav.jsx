import React from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import "./nav.css";
import lg from "../images/log.png";

function Nav() {
  return (
    <div className="nv">
      <Navbar bg="dark" style={{ opacity: "0.6" }} expand="lg">
        <Container>
          <Navbar.Brand className="ml-auto" href="#home">
            <img
              src={lg}
              width="80"
              height="45"
              className="d-inline-block  align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Form id="sbox" inline className="mx-auto">
            <Form.Control
            
              size="sm"
              type="text"
             
              placeholder= "Photos, People, or groups"
            />
          </Form>

          <Button id="bt1" variant="outline-light">
            Log In
          </Button>

          <Button   id="bt2" variant="outline-light">
            Sign Up
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
