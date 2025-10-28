import { Carousel, Col, Container, Navbar, Row } from "react-bootstrap";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "./Dalhousie.css";
import { LocationSvg } from "../../assats/Svg";
import star from "../../assats/star.png";
import { useEffect, useState } from "react";
import axios from "axios";

// import { AiFillStar } from "react-icons";

const CityHome = () => {
  const { cityname } = useParams();

  const [cityData, setCitydata] = useState([]);

  useEffect(() => {
    getCityDetails();
  }, []);

  const getCityDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/getcityDeatils?cityname=${cityname}`
      );

      setCitydata(res.data.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // const CityData = [
  //   {
  //     name: "delhi",
  //     images: [
  //       "https://www.holidify.com/images/bgImages/DELHI.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/Redfortdelhi1_20190731143243.jpg",
  //       "https://www.holidify.com/images/compressed/34.jpg?v=1.1",
  //     ],
  //     stars: 4.1,
  //     price: 489,
  //     votes: 303,
  //     placesTovisit: 5,
  //     state: "NCR",
  //   },
  //   {
  //     name: "dalhousie",
  //     images: [
  //       "https://images.unsplash.com/photo-1655090955797-02e35c8d608f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhbGhvdXNpZXxlbnwwfHwwfHx8MA%3D%3D",
  //       "https://images.unsplash.com/photo-1580633261718-ae9ee621500e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFsaG91c2llfGVufDB8fDB8fHww",
  //       "https://images.unsplash.com/photo-1615555199911-7e6be103ded8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFsaG91c2llfGVufDB8fDB8fHww",
  //     ],
  //     stars: 4.2,
  //     price: 1499,
  //     votes: 499,
  //     placesTovisit: 4,
  //     state: "Himachal Pradesh",
  //   },
  //   {
  //     name: "nainital",
  //     images: [
  //       "https://www.holidify.com/images/bgImages/NAINITAL.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/16369885366_603a44b8c2_b_20190207131016jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/18514027699_5719e8d0e1_b_20190207131101jpg",
  //     ],
  //     stars: 4.3,
  //     price: 4899,
  //     votes: 235,
  //     placesTovisit: 1,
  //     state: "Uttarakhand",
  //   },
  //   {
  //     name: "mumbai",
  //     images: [
  //       "https://www.holidify.com/images/compressed/4742.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/Bandra_Worli_Seal_Link_20190801114332.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/PDD_6763_12X_8webnew.232115134_20180214130404.jpg",
  //     ],
  //     stars: 4.2,
  //     price: 1499,
  //     votes: 302,
  //     placesTovisit: 8,
  //     state: "Maharashtra",
  //   },
  //   {
  //     name: "darjeeling",
  //     images: [
  //       "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_512356807_20200218162340_20200218162403.jpg",
  //       "https://www.holidify.com/images/cmsuploads/square/2384_20190314133754.jpg",
  //       "https://www.holidify.com/images/cmsuploads/square/2382_20190320140540.jpg",
  //     ],
  //     stars: 4.3,
  //     price: 1499,
  //     votes: 280,
  //     placesTovisit: 10,
  //     state: "West Bengal",
  //   },
  //   {
  //     name: "gangtok",
  //     images: [
  //       "https://www.holidify.com/images/cmsuploads/compressed/26606917608_abe0130450_z_20190307114953.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/14143024316_a6090e7945_z_20190306182159.jpg",
  //       "https://www.holidify.com/images/compressed/3221.jpg?v=1.1",
  //     ],
  //     stars: 4.4,
  //     price: 1499,
  //     votes: 267,
  //     placesTovisit: 10,
  //     state: "Sikkim",
  //   },
  //   {
  //     name: "mountabu",
  //     images: [
  //       "https://www.holidify.com/images/bgImages/MOUNT-ABU.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/Mount_abu_scenery_20190207160659jpg",
  //       "https://www.holidify.com/images/compressed/dest_wiki_10620.jpg",
  //     ],
  //     stars: 5.2,
  //     price: 1499,
  //     votes: 499,
  //     placesTovisit: 10,
  //     state: "Himachal Pradesh",
  //   },
  //   {
  //     name: "jaipur",
  //     images: [
  //       "https://www.holidify.com/images/cmsuploads/compressed/Weekend-getaways-near-Delhi-9_20190710180433.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/Nahargarh-Fort1_20190710175756.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_569522815_20190715095208.jpg",
  //     ],
  //     stars: 4.3,
  //     price: 1499,
  //     votes: 108,
  //     placesTovisit: 10,
  //     state: "Rajasthan",
  //   },
  //   {
  //     name: "chennai",
  //     images: [
  //       "https://www.holidify.com/images/compressed/dest_wiki_2985.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/MGR_Memorial_9_December_2007_20190802111445.jpg",
  //       "https://www.holidify.com/images/compressed/3162.jpg?v=1.1",
  //     ],
  //     stars: 3.9,
  //     price: 1499,
  //     votes: 161,
  //     placesTovisit: 10,
  //     state: "Tamil Nadu",
  //   },
  //   {
  //     name: "udaipur",
  //     images: [
  //       "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1349545253_20190715095335.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_536597029_20190715095333.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/640px-Badi_Mahal(1)_20190318184639.jpg",
  //     ],
  //     stars: 4.4,
  //     price: 1499,
  //     votes: 263,
  //     placesTovisit: 10,
  //     state: "Rajasthan",
  //   },
  //   {
  //     name: "manali",
  //     images: [
  //       "https://www.holidify.com/images/bgImages/MANALI.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/28022192021_b8e82eb874_b_20190320141704.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/manali-1941788_960_720_20190313162556.jpg",
  //     ],
  //     stars: 4.5,
  //     price: 1499,
  //     votes: 466,
  //     placesTovisit: 10,
  //     state: "Himachal Pradesh",
  //   },
  //   {
  //     name: "goa",
  //     images: [
  //       "https://www.holidify.com/images/cmsuploads/compressed/A2_20170923154029.PNG",
  //       "https://www.holidify.com/images/cmsuploads/compressed/ClubCubanaGoa_20190708185522.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/2516166057_d8389cb454_b_20190708174430.jpg",
  //     ],
  //     stars: 4.5,
  //     price: 1499,
  //     votes: 601,
  //     placesTovisit: 10,
  //     state: "",
  //   },
  //   {
  //     name: "lehladakh",
  //     images: [
  //       "https://www.holidify.com/images/bgImages/LADAKH.jpg",
  //       "https://www.holidify.com/images/compressed/3007.jpg?v=1.1",
  //       "https://www.holidify.com/images/cmsuploads/compressed/8213533086_d60a422a89_z_20190304110547.jpg",
  //     ],
  //     stars: 4.6,
  //     price: 1499,
  //     votes: 139,
  //     placesTovisit: 10,
  //     state: "Union Territory",
  //   },
  //   {
  //     name: "srinagar",
  //     images: [
  //       "https://www.holidify.com/images/compressed/1815.jpg?v=1.1",
  //       "https://www.holidify.com/images/compressed/1825.jpg?v=1.1",
  //       "https://www.holidify.com/images/compressed/1817.jpg?v=1.1",
  //     ],
  //     stars: 4.5,
  //     price: 1499,
  //     votes: 126,
  //     placesTovisit: 10,
  //     state: "Jammu Kashmir",
  //   },
  //   {
  //     name: "varanasi",
  //     images: [
  //       "https://www.holidify.com/images/cmsuploads/compressed/Dashawamedha_Ghat_in_Varanasi_2_20190806135418.jpg",
  //       "https://www.holidify.com/images/compressed/3861.jpg?v=1.1",
  //       "https://www.holidify.com/images/cmsuploads/compressed/1457720_683384285029832_148806331_n_20170503162300.jpg",
  //     ],
  //     stars: 4.5,
  //     price: 1499,
  //     votes: 166,
  //     placesTovisit: 10,
  //     state: "Uttar Pradesh",
  //   },
  //   {
  //     name: "rishikesh",
  //     images: [
  //       "https://www.holidify.com/images/compressed/3754.jpg",
  //       "https://www.holidify.com/images/cmsuploads/compressed/541954932_d9a3b67806_o_20190408175523_20190408175539_20190803125513.jpg",
  //       "https://www.holidify.com/images/compressed/3765.jpg?v=1.1",
  //     ],
  //     stars: 4.3,
  //     price: 1499,
  //     votes: 239,
  //     placesTovisit: 10,
  //     state: "Uttarakhand",
  //   },
  //   {
  //     name: "shimla",
  //     images: [
  //       "https://www.holidify.com/images/compressed/686.jpg?v=1.1",
  //       "https://www.holidify.com/images/compressed/1908.jpg",
  //       "https://www.holidify.com/images/compressed/1910.jpg?v=1.1",
  //     ],
  //     stars: 4.3,
  //     price: 1499,
  //     votes: 382,
  //     placesTovisit: 10,
  //     state: "Himachal Pradesh",
  //   },
  //   {
  //     name: "bangalore",
  //     images: [
  //       "https://holidify.com/images/attr_wiki/compressed/attr_wiki_2838.jpg",
  //       "https://www.holidify.com/images/compressed/4130.JPG",
  //       "https://www.holidify.com/images/compressed/dest_pixa_1887.jpg",
  //     ],
  //     stars: 4.1,
  //     price: 1499,
  //     votes: 382,
  //     placesTovisit: 10,
  //     state: "Karnataka",
  //   },
  //   {
  //     name: "agra",
  //     images: [
  //       "https://www.holidify.com/images/compressed/3664.jpg?v=1.1",
  //       "https://www.holidify.com/images/compressed/3663.jpg?v=1.1",
  //       "https://www.holidify.com/images/compressed/3661.jpg?v=1.1",
  //     ],
  //     stars: 4.2,
  //     price: 1499,
  //     votes: 352,
  //     placesTovisit: 10,
  //     state: "Uttar Pradesh",
  //   },
  //   {
  //     name: "andaman",
  //     images: [
  //       "https://www.holidify.com/images/cmsuploads/compressed/30519582556_242d729acf_b_20190416151538.jpg",
  //       "https://www.holidify.com/images/compressed/3618.jpg?v=1.1",
  //       "https://www.holidify.com/images/cmsuploads/compressed/4976286928_721865c146_z_20190315142954.jpg",
  //     ],
  //     stars: 4.5,
  //     price: 1499,
  //     votes: 135,
  //     placesTovisit: 10,
  //     state: "Union Territory",
  //   },
  //   {
  //     name: "amritsar",
  //     images: [
  //       "https://www.holidify.com/images/compressed/1255.jpg",
  //       "https://www.holidify.com/images/compressed/dest_wiki_815.jpg",
  //       "https://www.holidify.com/images/compressed/1259.jpg?v=1.1w",
  //     ],
  //     stars: 4.4,
  //     price: 1499,
  //     votes: 212,
  //     placesTovisit: 10,
  //     state: "Punjab",
  //   },
  //   // Add more cities with their data
  // ];

  return (
    <Container
      fluid
      style={{ padding: "0px", position: "relative", marginTop: "77px" }}
    >
      <Row style={{ margin: "0px" }}>
        <Navbar
          style={{
            padding: "0px",
            position: "fixed",
            zIndex: 100,
          }}
          className="Cities-Navigation-Bar "
        >
          <ul className="Cities-Navigation-Bar-ul" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
            <NavLink to={"overview"} className="Cities-Navigation-Bar-li">
              {cityname.toUpperCase()}
            </NavLink>
            <NavLink to={"placestovisit"} className="Cities-Navigation-Bar-li">
              Places To visit
            </NavLink>

            <NavLink to={"besttime"} className="Cities-Navigation-Bar-li">
              Best Time to Visit
            </NavLink>

            <NavLink to={"food"} className="Cities-Navigation-Bar-li">
              Food
            </NavLink>

            <NavLink to={"review"} className="Cities-Navigation-Bar-li">
              User Reviews
            </NavLink>
          </ul>
        </Navbar>
        <Row
          style={{
            margin: "40px 0px 0px 0px",
            padding: "30px 60px",
            alignItems: "right",
          }}
        >
          <Col lg={7} style={{ padding: "0px", marginTop: "10px" }}>
            <Carousel>
              {cityData?.images?.map((img, i) => (
                <Carousel.Item key={i}>
                  <img
                    style={{ width: "700px", height: "400px" }}
                    src={img}
                    alt=""
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col lg={4} style={{}}>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {/* heading and rating div */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Manrope ",
                    fontWeight: "600",
                    fontSize: "32px",
                  }}
                >
                  {cityname.toUpperCase()}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <p
                    style={{
                      background: "#247c2a",
                      padding: "3px 6px",
                      borderRadius: "10px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {cityData?.stars}
                    <span style={{ color: "#BEBEBE", fontSize: "12px" }}>
                      /5
                    </span>
                  </p>
                  <span
                    style={{
                      fontSize: "12px",
                      fontFamily: "nunito",
                      fontWeight: "600",
                      color: "#0056b3",
                    }}
                  >
                    {cityData?.votes} Votes
                  </span>
                </div>
              </div>
              {/* location  */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    color: "#3d81bb",
                    fontWeight: "600",
                  }}
                >
                  {LocationSvg} {cityData?.state}, India
                </div>
                <div
                  style={{
                    padding: "0px 0px 0px 6px",
                    color: "#3d81bb",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <img
                    style={{ width: "16px", height: "16px" }}
                    src={star}
                    alt=""
                  />
                  <span
                    style={{
                      color: "#000",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    {cityData?.placesToVisit} out of{" "}
                    {cityData?.TotalplacesToVisit}
                  </span>
                  Places to visit in {cityData?.state}
                </div>
              </div>
              {/* 7499 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "500px",
                    fontFamily: "nunito",
                  }}
                >
                  <span
                    style={{
                      color: "#237c74",
                      fontSize: "32px",
                      fontWeight: "700",
                      fontFamily: "nunito",
                    }}
                  >
                    {cityData?.price}
                  </span>
                
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "500px",
                      fontFamily: "nunito",
                      color: "#0056b3",
                    }}
                  >
                   Planning a Trip?
                  </span>
                </p>
                <button
                  style={{
                    background: "#0056b3",
                    padding: "20px 25px",
                    color: "white",
                    fontFamily: "nunito",
                    borderRadius: "10px",
                    fontSize: "22px",
                  }}
                >
                  See Customized Packages
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Outlet />
        </Row>
      </Row>
    </Container>
  );
};

export default CityHome;
