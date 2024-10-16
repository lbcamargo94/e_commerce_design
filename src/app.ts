import "express-async-errors";
import express from "express";
import cors from "cors";
import { corsOptions } from "./config/server/CorsConfig";
import helmet from "helmet";
import HandleError from "./middleware/errors";
import { Routes } from "./routes";

const { handleError } = new HandleError();
const app: express.Express = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(Routes);
app.use(handleError);

export { app };
