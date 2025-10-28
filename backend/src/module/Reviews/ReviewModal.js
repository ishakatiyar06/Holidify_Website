import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
  cityname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: { type: Number, require: true },
  createdAt: {
    type: Date,
    default: Date.now, // Set default value to the current timestamp
  },
});

const Reviews = mongoose.model("reviews", ReviewSchema);
export default Reviews;
