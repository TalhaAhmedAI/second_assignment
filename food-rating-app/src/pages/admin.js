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
    <Container
      // style={{ paddingTop: "2rem" }}
      className="d-flex justify-content-around"
    >
      <Row className="border border-primary">
        <Col className={cn("text-center", "border border-primary")} spacing={3}>
          {" "}
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
