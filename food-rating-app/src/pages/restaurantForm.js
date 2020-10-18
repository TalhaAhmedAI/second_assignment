import React, { useState } from "react";
import Joi from "joi-browser";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { registerRestaurant } from '../api/restaurants';

const RestaurantForm = () => {
    const [input, setInput] = useState({ name: "", dish_1: "", dish_2: "", dish_3: "", dish_4: "" });
  const [warnings, setWarnings] = useState({});

  const joiSchema = {
    name: Joi.string().required().label("Name"),
    dish_1: Joi.string().required().label("dish 1"),
    dish_2: Joi.string().required().label("dish 2"),
    dish_3: Joi.string().required().label("dish 3"),
    dish_4: Joi.string().required().label("dish 4"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(input, joiSchema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: joiSchema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setWarnings({ ...warnings, ...errors });
    if (errors) return;
    const response = await registerRestaurant(input);
    console.log(response)
  };

  const handleChange = ({ currentTarget: field }) => {
    const errors = {};
    const errorMessage = validateProperty(field);
    const { name, value } = field;
    if (errorMessage) {
      errors[name] = errorMessage;
    } else errors[name] = "";
    setInput({ ...input, [name]: value });
    setWarnings({ ...warnings, ...errors });
  };
  return (
    <div>
      <Container style={{ marginTop: "7rem" }}>
        <h1>Add New Restaurant</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              value={input.name}
              autoFocus
              placeholder="Enter your name..."
            />
            {warnings.name && (
              <div className="alert alert-danger">{warnings.name}</div>
            )}
          </Form.Group>
          <Row>
              <Col>
              <Form.Label>First dish</Form.Label>
              <Form.Control onChange={handleChange} name="dish_1" value={input.dish_1} placeholder="First dish"/>
              {warnings.dish_1 && (
              <div className="alert alert-danger">{warnings.dish_1}</div>
            )}
              </Col>
              <Col>
              <Form.Label>Second dish</Form.Label>
              <Form.Control onChange={handleChange} name="dish_2" value={input.dish_2} placeholder="Second dish"/>
              {warnings.dish_2 && (
              <div className="alert alert-danger">{warnings.dish_2}</div>
            )}
              </Col>
          </Row>
          <Row className="my-2">
              <Col>
              <Form.Label>Third dish</Form.Label>
              <Form.Control onChange={handleChange} name="dish_3" value={input.dish_3} placeholder="Third dish"/>
              {warnings.dish_3 && (
              <div className="alert alert-danger">{warnings.dish_3}</div>
            )}
              </Col>
              <Col>
              <Form.Label>Fourth dish</Form.Label>
              <Form.Control onChange={handleChange} name="dish_4" value={input.dish_4} placeholder="Fourth dish"/>
              {warnings.dish_4 && (
              <div className="alert alert-danger">{warnings.dish_4}</div>
            )}
              </Col>
          </Row>
          <Button className="my-2" disabled={validate()} variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}
 
export default RestaurantForm;