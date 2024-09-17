import { database } from "@database/connection";
import type { IUpdateUserEmail } from "@interfaces/users/UpdateUsersInterface";

export class UpdateUsersModel {
  public async UpdateUsersEmail(updateUserEmail: IUpdateUserEmail) {
    const { id, email } = updateUserEmail;

    const result = await database.users.update({
      where: { id },
      data: { email },
    });

    return result;
  }

  public async UpdateUserPassword(updateUserPassword: {
    id: string;
    password: string;
  }) {
    const { id, password } = updateUserPassword;

    const result = await database.users.update({
      where: { id },
      data: { password },
    });

    return result;
  }
}
