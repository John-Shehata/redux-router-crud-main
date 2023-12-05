import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "../components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Root;
