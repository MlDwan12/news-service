import "reflect-metadata";
import express from "express";
import { globalValidationMiddleware } from "./middlewares/validator";
import router from "./routes/news.routes";

const app = express();

app.use(express.json());
app.use(globalValidationMiddleware);
app.use("/news", router);

export default app;
