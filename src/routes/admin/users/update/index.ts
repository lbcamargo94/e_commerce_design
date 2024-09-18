import { Router } from "express";

const UpdateUsersRoutes = Router();

UpdateUsersRoutes.get("/update_user/:user_id");

export default UpdateUsersRoutes;
