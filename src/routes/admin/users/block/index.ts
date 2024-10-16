import { Router } from "express";

const BlockUsersRoutes = Router();

BlockUsersRoutes.get("/block_user/:user_id");

export default BlockUsersRoutes;
