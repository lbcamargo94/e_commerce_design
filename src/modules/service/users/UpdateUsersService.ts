import { BadRequestError, ConflictError, NotFoundError } from "@erro/index";
import { IUpdateUserEmail } from "@interfaces/users/UpdateUsersInterface";
import { GetUsersModel } from "@model/users/GetUsersModel";
import { UpdateUsersModel } from "@model/users/UpdateUsersModel";

export class UpdateUsersService {
  public async UpdateUsersEmail(updateUserEmail: IUpdateUserEmail) {
    const { id, email, validationCode } = updateUserEmail;

    const formatedUser = {
      id,
      email: email.trim(),
      validationCode: validationCode.trim(),
    };

    const getUsersModel = new GetUsersModel();
    const userAlreadyExist = await getUsersModel.GetUserById(id);

    if (!userAlreadyExist) {
      throw new NotFoundError("Usuário inválido, nenhum resultado foi encontrado.");
    }

    if (userAlreadyExist.validationCode !== formatedUser.validationCode) {
      throw new BadRequestError("Ocódigo de validação informado é inválido.");
    }

    const userEmailAlreadyExist = await getUsersModel.GetUserByEmail(email);

    if (userEmailAlreadyExist && userAlreadyExist.id !== userEmailAlreadyExist.id) {
      throw new ConflictError(
        "O e-mail informado é inválido, e-mail já é existente na base de dados.",
      );
    }

    if (userAlreadyExist.email === formatedUser.email) {
      throw new BadRequestError("O usuário já possui o endereço de e-mail informado.");
    }

    const updateUsersModel = new UpdateUsersModel();
    const result = await updateUsersModel.UpdateUsersEmail(formatedUser);

    if (result) {
      return {
        message: "E-mail do usuário foi atualizado com sucesso.",
        result: 200,
      };
    }

    throw new BadRequestError("Não foi possível atualizar o email do usuário.");
  }
}
