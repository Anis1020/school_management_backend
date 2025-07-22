import express from "express";
import cors from "cors";
import router from "./app/routes";
import globalError from "./app/errors/globalError";
import notFound from "./app/errors/notFound";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

//global error handler
app.use(globalError);
//not found route handler
app.use(notFound);
export default app;
