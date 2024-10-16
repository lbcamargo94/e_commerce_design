import { database } from "@database/connection";
import type { ICreateUser } from "@interfaces/users/CreateUsersInterface";

export class CreateUserModel {
  public async CreateUser(newUser: ICreateUser) {
    const { name, email, birthday, cpf, lastName } = newUser;

    const result = await database.users.create({
      data: {
        name,
        email,
        birthday,
        cpf,
        lastName,
      },
    });

    return result;
  }
}
