import mongoose from "mongoose";

const OverviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    
  },
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Overview = mongoose.model("Overview", OverviewSchema);
export default Overview;
