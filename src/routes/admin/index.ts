import { Router } from "express";
import UserRoutes from "./users";

const AdminRoutes = Router();

AdminRoutes.use("/users", UserRoutes);

export default AdminRoutes;
