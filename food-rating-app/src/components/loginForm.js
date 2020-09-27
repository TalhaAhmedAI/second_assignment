import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from "../api";

const LoginForm = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(state);
    console.log(response);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setState({ ...state, [e.target.name]: value });
  };
  return (
    <div>
      <Container style={{ marginTop: "10rem" }}>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              value={state.email}
              autoFocus
              placeholder="Enter your username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              value={state.password}
              placeholder="Enter your password"
            />
            <Form.Text className="text-muted">
              Note: We'll never share your details with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
