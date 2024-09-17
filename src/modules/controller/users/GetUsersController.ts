import { GetUsersService } from "@service/users/GetUsersService";
import type { Request, Response } from "express";

export class GetUsersController {
  public async GetAllUsers(
    _request: Request,
    response: Response,
  ): Promise<Response> {
    const getUsersService = new GetUsersService();

    const result = await getUsersService.GetAllUsers();

    return response.json(result.message).status(result.status);
  }
}
