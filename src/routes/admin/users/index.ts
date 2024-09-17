import { Router } from "express";
import CreateUserRoutes from "./create";
import RequestUsersRoutes from "./request";

const UserRoutes = Router();

UserRoutes.use("/create", CreateUserRoutes);
UserRoutes.use("/request", RequestUsersRoutes);

export default UserRoutes;
