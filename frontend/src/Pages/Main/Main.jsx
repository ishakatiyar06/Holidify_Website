import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <Header />
      </header>

      <div style={{ flex: 1, backgroundColor: "#FFF", padding: "0px" }}>
        {/* Main Content */}
        <Container fluid>
          <Row>
            <Col xs={12}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
