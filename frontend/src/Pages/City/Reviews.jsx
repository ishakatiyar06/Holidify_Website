import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { cityname } = useParams();
  const [userRating, setUserRating] = useState("");
  const [description, setDescription] = useState("");

  const [reviewData, setReviewData] = useState();
  const id = sessionStorage.getItem("id");

  useEffect(() => {
    getReviews();
  }, []);

  const handleReviewSubmit = async () => {
    if (userRating && description && id && cityname) {
      try {
        const res = await axios.post("https://holidifywebsitebackend-z6ojo.sevalla.app/api/v1/review", {
          cityname: cityname,
          userid: id,
          rating: userRating,
          description: description,
        });

        console.log(res);
        setDescription("");
        setUserRating(1);
        getReviews();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("please enter details in review box");
    }
  };

  const getReviews = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/review?cityname=${cityname}`
      );

      setReviewData(res.data.data.data);
      console.log(res.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const convertToDate = () => {
    const dateTime = "2023-11-12T08:21:19.624Z";
    const date = new Date(dateTime);
    const justDate = date.toISOString().split("T")[0]; // Extracts the date part

    return justDate;
  };

  return (
    <Container
      style={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "column",
        paddingLeft: "60px",
        gap: "4px",
      }}
    >
      <Row style={{ width: "100%", display: "flex", gap: "10px" }}>
        <Col
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            //   alignItems: "center",
            flexDirection: "column",
            paddingLeft: "60px",
            gap: "0px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "nunito",
                fontSize: "24px",
                fontWeight: "700",
                //   textAlign: "center",
              }}
            >
              {`User Ratings & Reviews`}
            </h3>
            <p
              style={{
                fontSize: "14px",
                fontFamily: "nunito",
                fontWeight: "500",
                color: "#9b9b9b",
                //   textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {"Important information that you need to know before you book!"}
            </p>
          </div>

          {reviewData?.map((item) => (
            <div key={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: "4px",
                }}
                className="reviewbox"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "4px",
                      alignItems: "end",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "16px",
                        fontFamily: "lato,sans-serif",
                        fontWeight: "700",
                      }}
                    >
                      {item.username}
                    </h5>
                    .
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "lato,sans-serif",
                      }}
                    >
                      {convertToDate(item.createdAt)}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontFamily: "lato,sans-serif",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Rated
                    <p
                      style={{
                        background: "#247c2a",
                        padding: "1px 10px",
                        borderRadius: "10px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {item.rating}.0
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "16px",
                    fontFamily: "",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </Col>

        <Col>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "nunito",
                  fontSize: "24px",
                  fontWeight: "700",
                  //   textAlign: "center",
                }}
              >
                {`Post your Review.`}
              </h3>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <ReactStars
                count={5}
                onChange={setUserRating}
                size={30}
                activeColor="#ffd700"
                value={userRating}
              />

              <input
                type="text"
                placeholder="Your Review...!"
                style={{
                  padding: "20px",
                  border: "2px solid #9b9b9b",
                  borderRadius: "10px",
                  outline: "none",
                }}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />

              <button
                style={{
                  background: "#0056B3 ",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  fontFamily: "nunito",
                }}
                onClick={handleReviewSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const UserReview = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "4px",
        }}
        className="reviewbox"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "4px",
              alignItems: "end",
            }}
          >
            <h5
              style={{
                fontSize: "16px",
                fontFamily: "lato,sans-serif",
                fontWeight: "700",
              }}
            >
              Abhihsek Verma
            </h5>
            .
            <span style={{ fontSize: "12px", fontFamily: "lato,sans-serif" }}>
              13/june/1999
            </span>
          </div>
          <div
            style={{
              fontSize: "14px",
              fontFamily: "lato,sans-serif",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Rated
            <p
              style={{
                background: "#247c2a",
                padding: "1px 10px",
                borderRadius: "10px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {5}.0
            </p>
          </div>
        </div>

        <div
          style={{
            fontSize: "16px",
            fontFamily: "",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          Its a beautiful place to visit.
        </div>
      </div>
    </div>
  );
};

export default Reviews;
