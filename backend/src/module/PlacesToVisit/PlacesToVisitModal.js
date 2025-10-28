import mongoose from "mongoose";

const PlaceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  pic: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const PlacesToVisitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  places: [PlaceSchema],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PlacesToVisit = mongoose.model("placesToVisit", PlacesToVisitSchema);
export default PlacesToVisit;
