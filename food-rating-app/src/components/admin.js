import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getUsers } from "../api/index";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const result = await getUsers();
    setUsers(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(users);
  return (
    <Container>
      <Row>
        <Col className="text-center">
          {users.map((user) => (
            <Row>{user.name}</Row>
          ))}
        </Col>
        <Col>
          <h1>
            list list list list list list list list list list list list list
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
