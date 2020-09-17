import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import Hotel from "./hotel";

const Cards = ({ rests }) => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    if (rests) {
      setHotels(rests.data);
    }
  }, [hotels, rests]);

  return (
    <Container>
      <Row>
        {hotels !== [] ? (
          hotels.map((hotel, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Link to={`/ratings/${index}`}>
                <Hotel hotel={hotel} />
              </Link>
            </Col>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { rests: state.rests };
};

export default connect(mapStateToProps)(Cards);
