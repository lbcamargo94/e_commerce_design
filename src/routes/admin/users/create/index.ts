import { CreateUserController } from "@controller/users/CreateUsersController";
import { CreateUserMiddleware } from "@middleware/users/CreateUserMiddleware";
import { Router } from "express";

const CreateUserRoutes = Router();

const createUsersMiddleware = new CreateUserMiddleware();

const createUserController = new CreateUserController();

CreateUserRoutes.post(
  "/create_user",
  createUsersMiddleware.CreateUser,
  createUserController.CreateUser,
);

export default CreateUserRoutes;
