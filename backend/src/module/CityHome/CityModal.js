import mongoose from "mongoose";

const AboutCitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    
  },
  images: [
    {
      type: String,
      // Assuming the URL is a string
    },
  ],
  stars: {
    type: Number,
    required: true,
  },
  // price: {
  //   type: Number,
  //   required: true,
  // },
  votes: {
    type: Number,
    required: true,
  },
  placesToVisit: {
    type: Number,
    required: true,
  },
  TotalplacesToVisit: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AboutCity = mongoose.model("AboutCity", AboutCitySchema);
export default AboutCity;
