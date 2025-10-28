import userModal from "../authentication/userModal.js";
import ReviewModal from "./ReviewModal.js";

// post api for reviews

export const PostReview = async (req, res) => {
  try {
    const { cityname, userid, rating, description } = req.body;

    const { fullName } = await userModal.findById({ _id: userid });

    let data = await ReviewModal.create({
      cityname: cityname,
      username: fullName,
      rating: rating,
      description: description,
    });

    return res.status(200).send({
      status: true,
      message: "Review added successfully",
      data: { data },
    });
  } catch (error) {}
};

// get api for reviews

export const getReview = async (req, res) => {
  try {
    const cityname = req.query.cityname;
    console.log(cityname);

    const data = await ReviewModal.find({ cityname: cityname });

    console.log(data);

    return res.status(200).send({
      status: true,
      message: "fetched review successfully",
      data: { data },
    });
  } catch (error) {}
};
