import { GetUsersController } from "@controller/users/GetUsersController";
import { Router } from "express";

const RequestUsersRoutes = Router();

const getUsersController = new GetUsersController();

RequestUsersRoutes.get("/all_users", getUsersController.GetAllUsers);
RequestUsersRoutes.get(
  "/user_email/:user_email",
  getUsersController.GetUserByEmail,
);
RequestUsersRoutes.get("/user_id/:user_id", getUsersController.GetUserById);

export default RequestUsersRoutes;
