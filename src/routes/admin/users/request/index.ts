import { GetUsersController } from "@controller/users/GetUsersController";
import { Router } from "express";

const RequestUsersRoutes = Router();

const getUsersController = new GetUsersController();

RequestUsersRoutes.get("/get_all_users", getUsersController.GetAllUsers);

export default RequestUsersRoutes;
