import { Router } from "express";
import CreateUserRoutes from "./create";
import RequestUsersRoutes from "./request";
import BlockUsersRoutes from "./block";
import UpdateUsersRoutes from "./update";

const UserRoutes = Router();

UserRoutes.use("/create", CreateUserRoutes);
UserRoutes.use("/request", RequestUsersRoutes);
UserRoutes.use("/update", UpdateUsersRoutes);
UserRoutes.use("/block", BlockUsersRoutes);

export default UserRoutes;
