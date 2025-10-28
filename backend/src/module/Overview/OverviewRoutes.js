import express from "express";
import {
  PostCityOverviewDeatils,
  getCityOverviewDeatils,
} from "./OverviewController.js";

const OverviewRouter = express.Router();

OverviewRouter.post("/overview", PostCityOverviewDeatils);
OverviewRouter.get("/overview", getCityOverviewDeatils);

export default OverviewRouter;
