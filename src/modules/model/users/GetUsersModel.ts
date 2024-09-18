import { database } from "@database/connection";

const SELECT_USERS = {
  id: true,
  birthday: true,
  cpf: true,
  email: true,
  name: true,
  lastName: true,
  password: true,
  validationCode: true,
  expiresIn: true,
  blocked: true,
  isValidate: true,
  createdAt: true,
  updatedAt: true,
};

export class GetUsersModel {
  public async GetAllUsers() {
    const result = await database.users.findMany({
      select: SELECT_USERS,
    });

    return result;
  }

  public async GetUserById(user_id: string) {
    const result = await database.users.findFirst({
      where: { id: user_id },
      select: SELECT_USERS,
    });

    return result;
  }

  public async GetUserByEmail(user_email: string) {
    const result = await database.users.findFirst({
      where: { email: user_email },
      select: SELECT_USERS,
    });

    return result;
  }
}
