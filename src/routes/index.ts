import { Router } from "express";
import UserRoutes from "./users";

const Routes = Router();

Routes.use("/users", UserRoutes);

export { Routes };
