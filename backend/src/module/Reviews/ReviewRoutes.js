import express from "express";
import { PostReview, getReview } from "./ReviewController.js";

const ReviewRouter = express.Router();

ReviewRouter.post("/review", PostReview);
ReviewRouter.get("/review", getReview);

export default ReviewRouter;
