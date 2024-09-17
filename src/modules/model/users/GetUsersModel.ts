import { database } from "@database/connection";

const SELECT_USERS = {
  id: true,
  blocked: true,
  email: true,
  isValidate: true,
  name: true,
  validationCode: true,
};

export class GetUsersModel {
  public async GetAllUsers() {
    const result = await database.users.findMany({
      select: SELECT_USERS,
    });

    return result;
  }

  public async GetUserById(id: string) {
    const result = await database.users.findFirst({
      where: { id },
      select: SELECT_USERS,
    });

    return result;
  }

  public async GetUserByEmail(email: string) {
    const result = await database.users.findFirst({
      where: { email },
      select: SELECT_USERS,
    });

    return result;
  }
}
