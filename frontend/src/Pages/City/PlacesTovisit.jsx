import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PlacesTovisit = () => {
  const { cityname } = useParams();
  const [cityPlacesData, setCityPlacesData] = useState([]);

  const PlacesToVisitData = [
    {
      cityname: "dalhousie",
      Places: [
        {
          name: "panchpula ",
          pic: "https://images.unsplash.com/photo-1647786037135-3b68b3e8515e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRhbGhvdXNpZXxlbnwwfHwwfHx8MA%3D%3D",
          data: "Often referred to as 'mini-Switzerland of India', Khajjiar is a small town located close (20km) to Dalhousie and is great for a day or overnight trip. Khajjiar is known for its picture perfect grassy meadows.There is a small lake in the middle of the meadow and you could enjoy the scenery by yourself or take part in some of the adventure sports including paragliding, zorbing, and horse-riding.",
        },
        {
          name: "Khajjiar",
          pic: "https://images.unsplash.com/photo-1647364147271-90897257f460?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2hhamppYXJ8ZW58MHx8MHx8fDA%3D",
          data: "Surrounded by a cover of green pine and deodar trees, Panchpula is a popular picnic spot in Dalhousie, located at a distance of 3.5 km from Gandhi Chowk in Dalhousie. It is best known for Saptdhara Waterfall, the starting point of the Ganji Pahari trek and activities like Ziplining, and Burma Bridge.",
        },
        {
          name: "Satdhara Falls ",
          pic: "https://images.unsplash.com/photo-1531512821533-725afd5e366a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhdGRoYXJhJTIwRmFsbHN8ZW58MHx8MHx8fDA%3D",
          data: "Satdhara Falls are one of the most popular sightseeing attractions of Dalhousie. Perched at an altitude of 2036 masl, the place has derived its name from the seven beautiful springs believed to have therapeutic value. The water in these springs contains mica, having several medicinal properties that cure diseases and ailments.",
        },
        {
          name: "Kalatop Wildlife Sanctuary",
          pic: "https://t3.ftcdn.net/jpg/01/44/04/34/240_F_144043483_4rrZBjJX9YeWG7mNcGNpWIm2RxIeDyc7.jpg",
          data: "Often referred to as 'mini-Switzerland of India', Khajjiar is a small town located close (20km) to Dalhousie and is great for a day or overnight trip. Khajjiar is known for its picture perfect grassy meadows.There is a small lake in the middle of the meadow and you could enjoy the scenery by yourself or take part in some of the adventure sports including paragliding, zorbing, and horse-riding.",
        },
        {
          name: "Chamera Lake",
          pic: "https://images.unsplash.com/photo-1577636274301-929428ff2306?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhbWVyYSUyMExha2V8ZW58MHx8MHx8fDA%3D",
          data: "Located near Dalhousie in the Chamba District of Himachal Pradesh, the Chamera Lake also known as Chamba Lake is the man-made reservoir for the Chamba Dam. It is a popular picnic spot and boating location. One can explore the lake on a speed boat or a rowboat and indulge in activities like kayaking & canoeing.",
        },
        {
          name: "Dainkund Peak ",
          pic: "https://images.unsplash.com/photo-1580633248746-3f5983acfe61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGFpbmt1bmQlMjBQZWFrfGVufDB8fDB8fHww",
          data: "Being the highest point in Dalhousie at an elevation of 2755 masl, the peak offers a bird’s eye view of the astonishing verdant valleys and mountains. For nature fanatics seeking a serene and calm place, Dainkund Peak is worth exploring",
        },
      ],
    },
    {
      cityname: "nainital",
      Places: [
        {
          name: "Satdhara Falls ",
          pic: "https://images.unsplash.com/photo-1531512821533-725afd5e366a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhdGRoYXJhJTIwRmFsbHN8ZW58MHx8MHx8fDA%3D",
          data: "Satdhara Falls are one of the most popular sightseeing attractions of Dalhousie. Perched at an altitude of 2036 masl, the place has derived its name from the seven beautiful springs believed to have therapeutic value. The water in these springs contains mica, having several medicinal properties that cure diseases and ailments.",
        },
        {
          name: "panchpula ",
          pic: "https://images.unsplash.com/photo-1647786037135-3b68b3e8515e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRhbGhvdXNpZXxlbnwwfHwwfHx8MA%3D%3D",
          data: "Often referred to as 'mini-Switzerland of India', Khajjiar is a small town located close (20km) to Dalhousie and is great for a day or overnight trip. Khajjiar is known for its picture perfect grassy meadows.There is a small lake in the middle of the meadow and you could enjoy the scenery by yourself or take part in some of the adventure sports including paragliding, zorbing, and horse-riding.",
        },
        {
          name: "Khajjiar",
          pic: "https://images.unsplash.com/photo-1647364147271-90897257f460?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2hhamppYXJ8ZW58MHx8MHx8fDA%3D",
          data: "Surrounded by a cover of green pine and deodar trees, Panchpula is a popular picnic spot in Dalhousie, located at a distance of 3.5 km from Gandhi Chowk in Dalhousie. It is best known for Saptdhara Waterfall, the starting point of the Ganji Pahari trek and activities like Ziplining, and Burma Bridge.",
        },

        {
          name: "Kalatop Wildlife Sanctuary",
          pic: "https://t3.ftcdn.net/jpg/01/44/04/34/240_F_144043483_4rrZBjJX9YeWG7mNcGNpWIm2RxIeDyc7.jpg",
          data: "Often referred to as 'mini-Switzerland of India', Khajjiar is a small town located close (20km) to Dalhousie and is great for a day or overnight trip. Khajjiar is known for its picture perfect grassy meadows.There is a small lake in the middle of the meadow and you could enjoy the scenery by yourself or take part in some of the adventure sports including paragliding, zorbing, and horse-riding.",
        },
        {
          name: "Chamera Lake",
          pic: "https://images.unsplash.com/photo-1577636274301-929428ff2306?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhbWVyYSUyMExha2V8ZW58MHx8MHx8fDA%3D",
          data: "Located near Dalhousie in the Chamba District of Himachal Pradesh, the Chamera Lake also known as Chamba Lake is the man-made reservoir for the Chamba Dam. It is a popular picnic spot and boating location. One can explore the lake on a speed boat or a rowboat and indulge in activities like kayaking & canoeing.",
        },
        {
          name: "Dainkund Peak ",
          pic: "https://images.unsplash.com/photo-1580633248746-3f5983acfe61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGFpbmt1bmQlMjBQZWFrfGVufDB8fDB8fHww",
          data: "Being the highest point in Dalhousie at an elevation of 2755 masl, the peak offers a bird’s eye view of the astonishing verdant valleys and mountains. For nature fanatics seeking a serene and calm place, Dainkund Peak is worth exploring",
        },
      ],
    },
  ];

  const getCityPlacesToVisit = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/placetovisit?cityname=${cityname}`
      );

      setCityPlacesData(res.data.data.data[0].places);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // PlacesToVisitData.map((item) => {
    //   if (item.cityname == cityname) {
    //     console.log(item.cityname, cityname);

    //     setCityPlacesData(item.Places);
    //   }
    // });
    getCityPlacesToVisit();
  }, [cityname]);

  const capitalizedString =
    cityname.charAt(0).toUpperCase() + cityname.slice(1);
    
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontFamily: "nunito",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        {`Places To Visit In ${capitalizedString}`}
      </h1>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cityPlacesData?.map((data, i) => (
          <Card
            key={i}
            style={{ width: "25rem", textAlign: "center", height: "450px",  transition: "transform 0.3s ease-in-out", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            ":hover": {
              transform: "scale(1.1)", // Increase size on hover
            },}}
          >
            <Card.Img
              variant="top"
              src={data?.pic}
              style={{ width: "100%", height: "210px" }}
            />
            <Card.Body>
              <Card.Title>
                {i + 1}. {data?.name}{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>{data?.data}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlacesTovisit;
