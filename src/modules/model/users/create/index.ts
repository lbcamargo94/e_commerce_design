import { database } from "@database/connection";
import { ICreateUser } from "@interfaces/users/create";

export class CreateUserModel {
  public async CreateUser(newUser: ICreateUser) {
    const { name, email } = newUser;
    const result = await database.users.create({
      data: {
        name,
        email,
      },
    });

    return result;
  }
}
