import express from "express";
import router from "./routes/index.js";

const app = express();

//Parse incoming request from forms body
app.use(express.urlencoded({ extended: true }));

//Parse incoming json request
app.use(express.json());

//Routes
app.use("/", router);

export default app;
