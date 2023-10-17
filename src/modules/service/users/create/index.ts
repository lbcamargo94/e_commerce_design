import { BadRequestError } from "@erro/index";
import { ICreateUser } from "@interfaces/users/create";
import { CreateUserModel } from "@model/users/create";

export class CreateUserService {
  public async CreateUser(newUser: ICreateUser) {
    const { name, email } = newUser;

    const createUserModel = new CreateUserModel();
    const result = await createUserModel.CreateUser({ name, email });

    if (result) {
      return {
        message: "Novo usuário foi criado com sucesso!",
        status: 200,
      };
    }

    throw new BadRequestError("Não foi possível criar um novo usuário.");
  }
}
