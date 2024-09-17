import { CreateUserService } from "@service/users/CreateUsersService";
import type { Request, Response } from "express";
import type { ICreateUser } from "@interfaces/users/CreateUsersInterface";

export class CreateUserController {
  public async CreateUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const newUser: ICreateUser = request.body;

    const createUserService = new CreateUserService();
    const result = await createUserService.CreateUser(newUser);

    return response.json(result.message).status(result.status);
  }
}
