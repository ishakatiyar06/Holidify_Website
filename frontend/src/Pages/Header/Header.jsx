import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./Header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assats/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const HandleLogInbutton = () => {
    if (token) {
      sessionStorage.removeItem("token");
      location.reload();
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar
        expand="lg"
        // className={style.bgBodyTertiary}
        style={{ backgroundColor: "#F2F4FF", padding: "0px", width: "100%" }}
        fixed="top"
      >
        <Navbar.Brand href="/" className={style.landingExoad}>
          <img style={{ width: "80px" }} src={Logo} alt="" />
          {/* EXOAD */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse
          id="basic-navbar-nav"
          // style={{ visibility: "visible" }}
        > */}
        <Nav className={`${"me-auto"} ${style.navitems}`}>
          <div
            style={{
              alignItems: "center",
              flexWrap: "wrap",
              gap: "30px",
              // justifyContent: "space-between",
              display: "flex",
              flexGrow: "1",
            }}
          >
            <Link to="home">Home</Link>
            <Link to="features">Features</Link>
            {/* <Link to="/landingpage/aiad">AI AD</Link> */}
            <Link to="aboutus">About Us</Link>
          </div>
          <div className={style.landingpageHeader}>
            {/* <button className={style.tryFreeBtn}>Try Exoad Free</button> */}
            <button
              onClick={HandleLogInbutton}
              className={style.landingLoginBtn}
              style={token ? { background: "green" } : {}}
            >
              {!token ? "Log In" : "Log out"}
            </button>
          </div>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </>
  );
};

export default Header;
