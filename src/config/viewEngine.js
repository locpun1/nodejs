import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");

    return app.use("/", router);
}

module.exports = configViewEngine;