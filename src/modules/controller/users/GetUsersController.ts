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

  public async GetUserByEmail(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_email = request.params.user_email;

    const getUsersService = new GetUsersService();
    const result = await getUsersService.GetUserByEmail(user_email);

    return response.json(result.message).status(result.status);
  }

  public async GetUserById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.params.user_id;

    const getUsersService = new GetUsersService();
    const result = await getUsersService.GetUserById(user_id);

    return response.json(result.message).status(result.status);
  }
}
