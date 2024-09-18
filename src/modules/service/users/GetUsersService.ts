import { BadRequestError } from "@erro/index";
import { GetUsersModel } from "@model/users/GetUsersModel";

export class GetUsersService {
  public async GetAllUsers() {
    const getUsersModel = new GetUsersModel();
    const result = await getUsersModel.GetAllUsers();

    return {
      message: result,
      status: 200,
    };
  }

  public async GetUserByEmail(user_email: string) {
    const getUsersModel = new GetUsersModel();
    const result = await getUsersModel.GetUserByEmail(user_email);

    return {
      message: result,
      status: 200,
    };
  }

  public async GetUserById(user_id: string) {
    const getUsersModel = new GetUsersModel();
    const result = await getUsersModel.GetUserById(user_id);

    return {
      message: result,
      status: 200,
    };
  }
}
