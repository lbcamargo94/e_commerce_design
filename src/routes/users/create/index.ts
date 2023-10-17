import { CreateUserController } from "@controller/users/create";
import { Router } from "express";

const CreateUserRoutes = Router();

const { CreateUser } = new CreateUserController();

CreateUserRoutes.post("/create_user", CreateUser);

export default CreateUserRoutes;
