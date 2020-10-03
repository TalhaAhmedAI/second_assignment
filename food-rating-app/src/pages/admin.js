import React, { useState, useEffect } from "react";
import cn from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getUsers } from "../api/index";

const AdminPanel = () => {
  // const [users, setUsers] = useState([]);
  // const getData = async () => {
  //   const result = await getUsers();
  //   setUsers(result.data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  // console.log(users);
  const users = [{ name: "Talha" }, { name: "Ali" }];
  return (
    <Container className="pt-5">
      <Row className="d-flex justify-content-around">
        <Col className="border border-primary col mx-5">
          {users.map((user) => (
            <Row className="py-2 px-2">{user.name}</Row>
          ))}
        </Col>
        <Col className="border border-primary vh-50 mx-5">
          <h1>
            list list list list list list list list list list list list list
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
