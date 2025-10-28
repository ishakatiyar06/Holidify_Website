import express from "express";
import userRouter from "./src/module/authentication/userRoutes.js";
import ReviewRouter from "./src/module/Reviews/ReviewRoutes.js";
import CityRouter from "./src/module/CityHome/CityRoutes.js";
import OverviewRouter from "./src/module/Overview/OverviewRoutes.js";
import PlacesToVisitRouter from "./src/module/PlacesToVisit/PlacesToVisitRoutes.js";

const appRouter = express.Router();

appRouter.use("/api/v1/", userRouter);
appRouter.use("/api/v1/", ReviewRouter);
appRouter.use("/api/v1/", CityRouter);
appRouter.use("/api/v1/", OverviewRouter);
appRouter.use("/api/v1/", PlacesToVisitRouter);

export default appRouter;
