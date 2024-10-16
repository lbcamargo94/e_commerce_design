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

  public async UpdateUserPassword({
    id,
    password,
    validationCode,
    isValidate,
  }: {
    id: string;
    password: string;
    validationCode: string;
    isValidate: boolean;
  }) {
    const result = await database.users.update({
      where: { id },
      data: { password, validationCode, isValidate },
    });

    return result;
  }
}
