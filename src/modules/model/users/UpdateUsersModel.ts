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
}
