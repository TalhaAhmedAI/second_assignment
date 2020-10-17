import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getUsers } from "../api/index";
import { deleteUser } from "../api/index";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const result = await getUsers();
    setUsers(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const onEdit = async (id) => {
    window.location = `/edit/${id}`
  }
  const onDelete = async (id) => {
    await deleteUser(id);
    window.location.reload()
  };
  return (
    <Container className="pt-5">
      <Row className="d-flex" style={{ height: "70vh" }}>
        <Col className="shadow-lg bg-white rounded mx-5">
          {users.map((user, id) => (
            <Row
              className="shadow my-3 mx-2 py-2 px-2 rounded font-weight-bold"
              style={{ height: "7vh" }}
              key={id}
            >
              {user.name}
              <div className="btn-group ml-auto">
                  <button className="btn btn-primary btn-sm  mx-2" onClick={() => onEdit(user._id)}>Edit</button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(user._id)}
                >
                  Delete
                </button>
              </div>
            </Row>
          ))}
        </Col>
        <Col className="shadow-lg bg-white rounded mx-5">
          <h1>
            list list list list list list list list list list list list list
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
