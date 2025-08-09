import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1", router);

//global error handler

//not found route

export default app;
