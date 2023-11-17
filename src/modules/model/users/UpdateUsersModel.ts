import { database } from "@database/connection";

export class UpdateUsersModel {
  public async UpdateUserEmail(updateUserEmail: IUpdateUserEmail) {
    const result = await database.users.update({
      where: {id}
      data: {email}
    });

    return result;
  }
}
