import { Request, Response } from "express";
import { ICreateUser } from "@interfaces/users/create";
import { CreateUserService } from "@service/users/create";

export class CreateUserController {
  public async CreateUser(request: Request, response: Response): Promise<Response> {
    const newUser: ICreateUser = request.body;

    const createUserService = new CreateUserService();

    const result = await createUserService.CreateUser(newUser);

    return response.json(result.message).status(result.status);
  }
}
