import PlacesToVisit from "./PlacesToVisitModal.js";
// post api for reviews

export const PlacesToVisitDeatils = async (req, res) => {
  try {
    const { name, places } = req.body;

    // Create a new City document
    const city = await PlacesToVisit.create({
      name,
      places,
    });

    return res.status(200).send({
      status: true,
      message: "City added successfully",
      data: { city },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// get api for reviews

export const getPlacesToVisitDeatils = async (req, res) => {
  try {
    const cityname = req.query.cityname;
    console.log(cityname);

    const data = await PlacesToVisit.find({ name: cityname });

    console.log(data);

    return res.status(200).send({
      status: true,
      message: "fetched review successfully",
      data: { data },
    });
  } catch (error) {}
};
