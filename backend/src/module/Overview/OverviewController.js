import OverviewModal from "./OverviewModal.js";

// post api for reviews

export const PostCityOverviewDeatils = async (req, res) => {
  try {
    const { name, title, description } = req.body;

    let data = await OverviewModal.create({
      name: name,
      description: description,
      title: title,
    });

    return res.status(200).send({
      status: true,
      message: "city's overview Added successfully",
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

export const getCityOverviewDeatils = async (req, res) => {
  try {
    const cityname = req.query.cityname;
    console.log(cityname);

    const data = await OverviewModal.find({ name: cityname });

    console.log(data);

    return res.status(200).send({
      status: true,
      message: "fetched review successfully",
      data: { data },
    });
  } catch (error) {}
};
