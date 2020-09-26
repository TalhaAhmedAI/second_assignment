import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { register } from "../api";

const RegisterForm = () => {
  const [state, setState] = useState({ name: "", email: "", password: "" });
  const handleSubmit = async (e) => {
    const response = await register(state);
    console.log(response);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  console.log(state);
  return (
    <div>
      <Container style={{ marginTop: "7rem" }}>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              value={state.name}
              autoFocus
              placeholder="Enter your name..."
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              value={state.email}
              placeholder="Enter your username..."
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              value={state.password}
              placeholder="Enter your password..."
            />
            <Form.Text className="text-muted">
              Note: We'll never share your details with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterForm;
