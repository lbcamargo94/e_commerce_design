import { BadRequestError, ConflictError } from "@erro/index";
import { ICreateUser } from "@interfaces/users/CreateUsersInterface";
import { CreateUserModel } from "@model/users/CreateUsersModel";
import { GetUsersModel } from "@model/users/GetUsersModel";

export class CreateUserService {
  public async CreateUser(newUser: ICreateUser) {
    const { name, email } = newUser;

    const getUsersModel = new GetUsersModel();
    const userAlreadyExist = await getUsersModel.GetUserByEmail(email);

    if (userAlreadyExist) {
      throw new ConflictError("O e-mail informado já é cadastrado.");
    }

    const createUserModel = new CreateUserModel();
    const result = await createUserModel.CreateUser(newUser);

    if (result) {
      return {
        message: "Novo usuário foi criado com sucesso!",
        status: 200,
      };
    }

    throw new BadRequestError("Não foi possível criar um novo usuário.");
  }
}
