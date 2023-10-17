import { Router } from "express";
import CreateUserRoutes from "./create";

const UserRoutes = Router();

UserRoutes.use("/create", CreateUserRoutes);

export default UserRoutes;
