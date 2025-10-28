import { Card, Container, Row } from "react-bootstrap";
import video1 from "../../assats/video1.mp4";

import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const citiesArray = [
    {
      name: "Delhi",
      img: "https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Delhi-Cover.jpg",
    },
    {
      name: "Mumbai",
      img: "https://www.holidify.com/images/bgImages/MUMBAI.jpg",
    },
    {
      name: "Dalhousie",
      img: "https://images.unsplash.com/photo-1591077872036-8b9fe12b3c84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpbml0YWwlMkMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Darjeeling",
      img: "https://images.unsplash.com/photo-1626082895617-2c6de34f6af3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Nainital",
      img: "https://images.unsplash.com/photo-1601622256416-d7f757f99eb2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TmFpbml0YWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Gangtok",
      img: "https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R2FuZ3Rva3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Mount Abu",
      img: "https://images.unsplash.com/photo-1518043610038-064362b44076?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1vdW50JTIwQWJ1fGVufDB8fDB8fHww",
    },
    {
      name: "Jaipur",
      img: "https://images.unsplash.com/photo-1578999935853-4ec5fa6c1f60?auto=format&fit=crop&q=80&w=1422&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chennai",
      img: "https://bing.com/th?id=OSGI.097C3057615DBCA4D4EABD03F833F829&h=1000&w=1920&c=1&rs=1&o=3",
    },
    {
      name: "Udaipur",
      img: "https://th.bing.com/th/id/OIP.gffR2c28-E2ki1Lc7Yc-ngHaFL?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      name: "Manali",
      img: "https://www.holidify.com/images/cmsuploads/compressed/15655691644_c0a92b03d7_z_20190305135005.jpg",
    },
    {
      name: "Goa",
      img: "https://www.holidify.com/images/bgImages/GOA.jpg",
    },
    {
      name: "Leh Ladakh",
      img: "https://www.holidify.com/images/cmsuploads/compressed/zanskar-river-3859214_1920_20190304123111.jpg",
    },
    {
      name: "Srinagar",
      img: "https://www.holidify.com/images/bgImages/SRINAGAR.jpg",
    },
    {
      name: "Varanasi",
      img: "https://www.holidify.com/images/bgImages/VARANASI.jpg",
    },
    {
      name: "Rishikesh",
      img: "https://www.holidify.com/images/bgImages/RISHIKESH.jpg",
    },
    {
      name: "Shimla",
      img: "https://www.holidify.com/images/bgImages/SHIMLA.jpg",
    },
    {
      name: "Bangalore",
      img: "https://www.holidify.com/images/bgImages/BANGALORE.jpg",
    },
    {
      name: "Agra",
      img: "https://www.holidify.com/images/bgImages/AGRA.jpg",
    },
    {
      name: "Amritsar",
      img: "https://www.holidify.com/images/bgImages/AMRITSAR.jpg",
    },
    {
      name: "Andaman",
      img: "https://www.holidify.com/images/bgImages/ANDAMAN-NICOBAR-ISLANDS.jpg",
    },
  ];
  const token = sessionStorage.getItem("token");

  const HandleCityCard = (city) => {
    const param = city.toLowerCase().split(" ").join("");
    navigate(`/${param}`);
  };

  return (
    <Container fluid style={{ padding: "0px" }}>
      {!token && (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        >
          <source src={video1} type="video/mp4" />
        </video>
      )}
      <Row
        style={{
          margin: "0px",
          // display: "flex",
          // // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className={style.HeadingH1}>Cities You can Explore</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {citiesArray.map((city, i) => (
              <Card
                key={i}
                className={style.card}
                style={{
                  width: "19rem",
                  alignItems: "center",
                  margin: "3rem",
                  padding: "0px",
                }}
                onClick={() => HandleCityCard(city.name)}
              >
                <Card.Img
                  className="card-img-top"
                  variant="top"
                  style={{ padding: "0px" }}
                  src={city.img}
                />
                <Card.Body>
                  <Card.Title className={style.CitiesLabel}>
                    {city.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* card */}
        </div>
      </Row>
    </Container>
  );
};

export default Home;
