import express from "express";
import * as controller from "../controllers/account.controller.js";
import auth from "../middlewares/auth.middleware.js";

const accountRoute = express.Router();

accountRoute.post("/logIn", controller.logIn);
accountRoute.post("/signUp", controller.signUp);
accountRoute.get("/me", controller.getInfo);
accountRoute.get("/me/plant", [auth], controller.getUserPlant);
accountRoute.get("/me/plant/test", [auth], controller.getUserPlant);

export default accountRoute;
