import { BadRequestError } from "@erro/index";
import { GetUsersModel } from "@model/users/GetUsersModel";

export class GetUsersService {
  public async GetAllUsers() {
    const getUsersModel = new GetUsersModel();
    const result = await getUsersModel.GetAllUsers();

    if (result) {
      return {
        message: result,
        status: 200,
      };
    }

    throw new BadRequestError("Não foi possível buscar por usuários.");
  }
}
