import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Footer.module.css";
// import { Xactlane, XactlaneWhite } from "../../../../../public/Svgs/Svg";
import { Link } from "react-router-dom";
import Logo from "../../assats/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const HandleFooterNAvigation = () => {
    scrollToTop();
  };

  return (
    <Container fluid className={style.FooterMain}>
      <Row className={style.FooterMainRow}>
        <Col md={3} className={style.FooterLogo}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Logo} style={{ width: "80px" }} alt="" />
            <h1
              style={{ fontFamily: "nunito", fontSize: "30px", color: "#fff" }}
            >
              
            </h1>
          </div>

          <p>
          With the aim of making a travel discovery platform- a product that would help users find the best travel destinations across the world. 
          </p>
          <h5>©2024 Explore the World. All right reserved</h5>
        </Col>
        <Col>
          <Row className={`${style.FooterColumnAlign} `}>
            <Col className={style.FooterList}>
              <label>Explore Cities</label>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0px",
                  textDecoration: "none",
                }}
              >
                <Link to={"/"} onClick={HandleFooterNAvigation}>
                  Home
                </Link>
                <Link to={"/Aboutus"} onClick={HandleFooterNAvigation}>
                  About us
                </Link>
                <Link to={"/features"} onClick={HandleFooterNAvigation}>
                  Features
                </Link>
                <Link to={"/login"} onClick={HandleFooterNAvigation}>
                  Login/signup
                </Link>
              </ul>
            </Col>

            {/* <Col className={style.FooterList}>
              <label>Discover</label>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <Link
                  onClick={HandleFooterNAvigation}
                  to={"/services2/airporttransfer"}
                >
                  Transfers
                </Link>
                <Link
                  onClick={HandleFooterNAvigation}
                  to={"/services2/Hourlybooking"}
                >
                  Hourly Booking
                </Link>
                <Link
                  onClick={HandleFooterNAvigation}
                  to={"/services2/CityToCity"}
                >
                  City to City
                </Link>
                <Link
                  onClick={HandleFooterNAvigation}
                  to={"/services2/ShuttleService"}
                >
                  Shuttle Service
                </Link>
              </ul>
            </Col>
            <Col className={style.FooterList}>
              <label>Legal</label>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <Link onClick={HandleFooterNAvigation}>Imprint</Link>
                <Link onClick={HandleFooterNAvigation} to={"/terms&condition"}>
                  Terms and Conditions
                </Link>
                <Link onClick={HandleFooterNAvigation} to={"/policy"}>
                  Privacy Policy
                </Link>
                <Link onClick={HandleFooterNAvigation} to={"/influencer"}>
                  Partner Terms and Conditions
                </Link>
                <Link onClick={HandleFooterNAvigation} to={"/questions"}>
                  FAQ/Help+
                </Link>
                <Link onClick={HandleFooterNAvigation} to={"/disclaimer"}>
                  Disclaimer
                </Link>
              </ul>
            </Col> */}
            <Col className={style.FooterList}>
              <label>Social Media</label>
              <ul style={{ listStyle: "none", padding: "0px" }}>
                <Link>Facebook</Link>
                <Link>Twitter</Link>
                <Link>Instagram</Link>
                <Link>TikTok</Link>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={style.FooterBottom}>
        <p>© Explore World Travels Pvt Ltd.- All Right Reserved Terms Privacy</p>
      </Row>
    </Container>
  );
};

export default Footer;
