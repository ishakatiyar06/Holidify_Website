import CityModal from "./CityModal.js";

// post api for reviews

export const PostCityDeatils = async (req, res) => {
  try {
    const {
      images,
      name,
      stars,
      price,
      votes,
      placesToVisit,
      TotalplacesToVisit,
      state,
    } = req.body;

    let data = await CityModal.create({
      name: name,
      images: images,
      stars: stars,
      price: price,
      votes: votes,
      placesToVisit: placesToVisit,
      TotalplacesToVisit: TotalplacesToVisit,
      state: state,
    });

    return res.status(200).send({
      status: true,
      message: "city Added successfully",
      data: { data },
    });
  } catch (error) {
    return res.status(401).send({
      status: false,
      message: error.message,
      
    });
  }
};

// get api for reviews

export const getCityDeatils = async (req, res) => {
  try {
    const cityname = req.query.cityname;
    console.log(cityname);

    const data = await CityModal.find({ name: cityname });

    console.log(data);

    return res.status(200).send({
      status: true,
      message: "fetched review successfully",
      data: { data },
    });
  } catch (error) {}
};
