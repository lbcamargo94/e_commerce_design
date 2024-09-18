import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import bcrypt from "bcrypt";
import { GetUsersModel } from "@model/users/GetUsersModel";
import { UpdateUsersModel } from "@model/users/UpdateUsersModel";
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from "@erro/index";
import type { IUpdateUserEmail } from "@interfaces/users/UpdateUsersInterface";

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
      throw new NotFoundError(
        "Usuário inválido, nenhum resultado foi encontrado.",
      );
    }

    if (userAlreadyExist.validationCode !== formatedUser.validationCode) {
      throw new BadRequestError("Ocódigo de validação informado é inválido.");
    }

    const userEmailAlreadyExist = await getUsersModel.GetUserByEmail(email);

    if (
      userEmailAlreadyExist &&
      userAlreadyExist.id !== userEmailAlreadyExist.id
    ) {
      throw new ConflictError(
        "O e-mail informado é inválido, e-mail já é existente na base de dados.",
      );
    }

    if (userAlreadyExist.email === formatedUser.email) {
      throw new BadRequestError(
        "O usuário já possui o endereço de e-mail informado.",
      );
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

  public async UpdateUserPassword({
    user_email,
    password,
    passwordConfirmation,
    validationCode,
  }: {
    user_email: string;
    password: string;
    passwordConfirmation: string;
    validationCode: string;
  }) {
    const dataUser = {
      user_email: user_email.trim(),
      password: password.trim(),
      passwordConfirmation: passwordConfirmation.trim(),
      validationCode: validationCode.trim(),
    };

    const comparePassword = dataUser.password === dataUser.passwordConfirmation;

    if (!comparePassword) {
      throw new BadRequestError(
        "A senha e a confirmação de senha não são iguais.",
      );
    }

    const getUsersModel = new GetUsersModel();
    const userAlreadyExist = await getUsersModel.GetUserByEmail(user_email);

    if (!userAlreadyExist) {
      throw new NotFoundError(
        "Usuário inválido, nenhum resultado foi encontrado.",
      );
    }

    dayjs.extend(utc);
    const dateNow = dayjs().utc().unix();
    const expirationDate = userAlreadyExist.expiresIn;
    const isExpired = dateNow > expirationDate;

    if (isExpired) {
      throw new UnauthorizedError("O código de validação expirou.");
    }

    if (userAlreadyExist.validationCode !== dataUser.validationCode) {
      throw new BadRequestError("O código de validação informado é inválido.");
    }

    const saltRounds = 5;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new BadRequestError(
        "Não foi possível atualizar a senha do usuário.",
      );
    }

    const formatedUser = {
      id: userAlreadyExist.id,
      password: hashPassword,
      validationCode: "",
      isValidate: true,
    };

    const updateUsersModel = new UpdateUsersModel();
    await updateUsersModel.UpdateUserPassword(formatedUser);

    return {
      message: "A senha do usuário foi atuializada com sucesso.",
      status: 200,
    };
  }
}
