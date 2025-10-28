import express from "express";
import {
  PlacesToVisitDeatils,
  getPlacesToVisitDeatils,
} from "./PlacesToVisitController.js";

const PlacesToVisitRouter = express.Router();

PlacesToVisitRouter.post("/placetovisit", PlacesToVisitDeatils);
PlacesToVisitRouter.get("/placetovisit", getPlacesToVisitDeatils);

export default PlacesToVisitRouter;
