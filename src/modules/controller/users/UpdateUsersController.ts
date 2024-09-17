import { UpdateUsersService } from "@service/users/UpdateUsersService";
import type { Request, Response } from "express";

class UpdateUsersController {
  public async UpdateUserPassword(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { user_id } = request.params;
    const { password, passwordConfirmation, validationCode } = request.body;

    const updateUsersService = new UpdateUsersService();
    const result = await updateUsersService.UpdateUserPassword({
      user_id,
      password,
      passwordConfirmation,
      validationCode,
    });

    return response.json(result.message).status(result.status);
  }
}

export { UpdateUsersController };
