import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Overview = () => {
  const { cityname } = useParams();
  const [cityData, setCitydata] = useState([]);

  // const citieOverviewData = [
  //   {
  //     name: "dalhousie",
  //     title: "Little Switzerland of India",
  //     description: `Dalhousie is a popular hill station spread out over five hills in
  //      Himachal Pradesh boasting views of the snow-capped peaks of the
  //       Dhauladhar ranges. Famous for its meadows, dense forests, and
  //       waterfalls, it is especially a favourite amongst honeymooners and
  //       family vacationers.
  //        Established in 1854, the valley is named after Lord Dalhousie,
  //       and was one of the favourite summer destinations of the Britishers
  //       during the colonial era. Dalhousie offers an old-world charm,
  //       mesmerizing natural landscapes, pine-clad valleys and magnificent
  //       misty mountains.
  //       The Scottish and Victorian-era architecture of churches like
  //       the St Patricks Church, St John's Church and St Francis Church reminds
  //       of its colonial heritage.Dalhousie is also known for woollen Himachali
  //       shawls, Tibetan handicrafts, Chamba handkerchiefs, and other
  //       paraphernalia. These can be bought from The Mall Road which is the
  //       town's main market.
  //      A trip to Dalhousie is incomplete without
  //       Khajjiar. Known as the mini Switzerland of India, Khajjiar is just 21
  //       km away. The little hill town is famous for its spellbinding vistas of
  //       mountains loaded in white snow and lush green pastures of land.
  //       Kalatop Wildlife Sanctuary in Khajjiar is famous for an exquisite
  //       variety of endangered species and breathtaking views of the mountains
  //       in the backdrop. Chamba, located almost 50km from Dalhousie, is also
  //       worth visiting. Dalhousie is a popular hill station spread out over
  //       five hills in Himachal Pradesh boasting views of the snow-capped peaks
  //       of the Dhauladhar ranges. Famous for its meadows, dense forests, and
  //       waterfalls, it is especially a favourite amongst honeymooners and
  //       family vacationers.
  //        Established in 1854, the valley is named after Lord Dalhousie,
  //       and was one of the favourite summer destinations of the Britishers
  //       during the colonial era. Dalhousie offers an old-world charm,
  //       mesmerizing natural landscapes, pine-clad valleys and magnificent
  //       misty mountains.
  //        The Scottish and Victorian-era architecture of churches like
  //       the St Patricks Church, St John's Church and St Francis Church reminds
  //       of its colonial heritage.Dalhousie is also known for woollen Himachali
  //       shawls, Tibetan handicrafts, Chamba handkerchiefs, and other
  //       paraphernalia. These can be bought from The Mall Road which is the
  //       town's main market. A trip to Dalhousie is incomplete without
  //       Khajjiar. Known as the mini Switzerland of India, Khajjiar is just 21
  //       km away. The little hill town is famous for its spellbinding vistas of
  //       mountains loaded in white snow and lush green pastures of land.
  //       Kalatop Wildlife Sanctuary in Khajjiar is famous for an exquisite
  //       variety of endangered species and breathtaking views of the mountains
  //       in the backdrop. Chamba, located almost 50km from Dalhousie, is also
  //       worth visiting.`,
  //   },
  //   {
  //     name: "nainital",
  //     title: "beautiful city of India",
  //     description: `Nainital is a popular hill station spread out over five hills in
  //     Himachal Pradesh boasting views of the snow-capped peaks of the
  //            Dhauladhar ranges. Famous for its meadows, dense forests, and
  //            waterfalls, it is especially a favourite amongst honeymooners and
  //            family vacationers.
  //             Established in 1854, the valley is named after Lord Dalhousie,
  //            and was one of the favourite summer destinations of the Britishers
  //            during the colonial era. Dalhousie offers an old-world charm,
  //            mesmerizing natural landscapes, pine-clad valleys and magnificent
  //            misty mountains.
  //            The Scottish and Victorian-era architecture of churches like
  //            the St Patricks Church, St John's Church and St Francis Church reminds
  //            of its colonial heritage.Dalhousie is also known for woollen Himachali
  //            shawls, Tibetan handicrafts, Chamba handkerchiefs, and other
  //            paraphernalia. These can be bought from The Mall Road which is the
  //            town's main market. A trip to Dalhousie is incomplete without
  //            Khajjiar. Known as the mini Switzerland of India, Khajjiar is just 21
  //            km away. The little hill town is famous for its spellbinding vistas of
  //            mountains loaded in white snow and lush green pastures of land.
  //            Kalatop Wildlife Sanctuary in Khajjiar is famous for an exquisite
  //            variety of endangered species and breathtaking views of the mountains
  //            in the backdrop. Chamba, located almost 50km from Dalhousie, is also
  //            worth visiting. Dalhousie is a popular hill station spread out over
  //            five hills in Himachal Pradesh boasting views of the snow-capped peaks
  //            of the Dhauladhar ranges. Famous for its meadows, dense forests, and
  //            waterfalls, it is especially a favourite amongst honeymooners and
  //            family vacationers.
  //             Established in 1854, the valley is named after Lord Dalhousie,
  //            and was one of the favourite summer destinations of the Britishers
  //            during the colonial era. Dalhousie offers an old-world charm,
  //            mesmerizing natural landscapes, pine-clad valleys and magnificent
  //            misty mountains.
  //             The Scottish and Victorian-era architecture of churches like
  //            the St Patricks Church, St John's Church and St Francis Church reminds
  //            of its colonial heritage.Dalhousie is also known for woollen Himachali
  //            shawls, Tibetan handicrafts, Chamba handkerchiefs, and other
  //            paraphernalia. These can be bought from The Mall Road which is the
  //            town's main market. A trip to Dalhousie is incomplete without
  //            Khajjiar. Known as the mini Switzerland of India, Khajjiar is just 21
  //            km away. The little hill town is famous for its spellbinding vistas of
  //            mountains loaded in white snow and lush green pastures of land.
  //            Kalatop Wildlife Sanctuary in Khajjiar is famous for an exquisite
  //            variety of endangered species and breathtaking views of the mountains
  //            in the backdrop. Chamba, located almost 50km from Dalhousie, is also
  //            worth visiting.`,
  //   },
  // ];

  const getCityOverview = async () => {
    try {
      const res = await axios.get(
        `https://holidifywebsitebackend-z6ojo.sevalla.app/api/v1/overview?cityname=${cityname}`
      );

      setCitydata(res.data.data.data[0]);
      console.log(res.data.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCityOverview();
  }, [cityname]);

  const capitalizedString =
    cityname.charAt(0).toUpperCase() + cityname.slice(1);
  return (
    <Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            fontFamily: "manrope,sans-serif",
            fontStyle: "italic",
            fontWeight: "900",
          }}
        >
          {cityData?.title}
        </h3>
        <h4
          style={{
            marginTop: "20px",
            fontSize: "22px",
            fontWeight: "600",
            fontFamily: "nunito",
          }}
        >
          {capitalizedString} Tourism
        </h4>
        <p style={{ padding: "20px 30px", textAlign: "center" }}>
          {cityData?.description}
        </p>
      </div>
    </Row>
  );
};

export default Overview;
