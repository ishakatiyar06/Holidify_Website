import express from "express";
import { PostCityDeatils, getCityDeatils } from "./CityController.js";

const CityRouter = express.Router();

CityRouter.post("/postcityDeatils", PostCityDeatils);
CityRouter.get("/getcityDeatils", getCityDeatils);

export default CityRouter;
