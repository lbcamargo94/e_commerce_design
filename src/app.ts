// express;
import "express-async-errors";
import express from "express";
// Cors
import cors from "cors";
import { corsOptions } from "./config/server/CorsConfig";
// Helmet
import helmet from "helmet";
// Middleware
import HandleError from "./middleware/errors";
// Routes
import { Routes } from "./routes";

const { handleError } = new HandleError();

const app: express.Express = express();

app.use(cors(corsOptions));

app.use(helmet());

app.use(express.json());

app.use(Routes);

app.use(handleError);

export { app };
