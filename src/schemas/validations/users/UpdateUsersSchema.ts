import { z } from "zod";

const REGEX_EMAIL_VALIDATION = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const REGEX_PASSWORD_VALIDATION =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%<>:?,.¨&*()+=-])[0-9a-zA-Z.!@#$%<>:?,.¨&*()+=-]{6,20}$/;

export class UpdateUsersSchema {
  public UpdateUsersEmail() {
    return z.object({
      id: z
        .string({
          invalid_type_error: "Id tem um tipo inválido.",
          required_error: "Id é obrigatório.",
        })
        .uuid({ message: "Id é invalido, não tem o formato UUID." }),

      email: z
        .string({
          invalid_type_error: "E-mail tem um tipo inválido.",
          required_error: "E-mail é um campo obrigatório.",
        })
        .email({ message: "E-mail é inválido, deve obedecer o formato email@email.com!" })
        .regex(REGEX_EMAIL_VALIDATION, {
          message:
            "Endereço de e-mail é inválido, deve obedecer o formato email@email.com!.",
        }),

      validationCode: z
        .string({
          invalid_type_error: "Código de validação é do tipo válido.",
          required_error: "Código de validação é um campo obrigatório.",
        })
        .length(6, {
          message: "O código de validação deve ter o tamanho de caracteres correto.",
        }),
    });
  }

  public UpdateUsersPassword() {
    return z.object({
      email: z
        .string({
          invalid_type_error: "E-mail tem um tipo inválido.",
          required_error: "E-mail é um campo obrigatório.",
        })
        .email({ message: "E-mail é inválido, deve obedecer o formato email@email.com!" })
        .regex(REGEX_EMAIL_VALIDATION, {
          message:
            "Endereço de e-mail é inválido, deve obedecer o formato email@email.com!.",
        }),

      password: z
        .string({
          invalid_type_error: "Senha tem um tipo inválido.",
          required_error: "Senha é um campo obrigatório.",
        })
        .min(6, {
          message: "Senha não está dentro do range mínimo de caracteres.",
        })
        .max(20, {
          message: "Senha não está dentro do range máximo de caracteres.",
        })
        .regex(REGEX_PASSWORD_VALIDATION, {
          message: "Senha não está dentro da formatação correta.",
        }),

      passwordConfirmation: z
        .string({
          invalid_type_error: "Confirmação de senha tem um tipo inválido.",
          required_error: "Confirmação de senha é um campo obrigatório.",
        })
        .min(6, {
          message: "Confirmação de senha não está dentro do range mínimo de caracteres.",
        })
        .max(20, {
          message: "Confirmação de senha não está dentro do range máximo de caracteres.",
        })
        .regex(REGEX_PASSWORD_VALIDATION, {
          message: "Confirmação de senha não está dentro da formatação correta.",
        }),

      validationCode: z
        .string({
          invalid_type_error: "Código de validação é do tipo válido.",
          required_error: "Código de validação é um campo obrigatório.",
        })
        .length(6, {
          message: "O código de validação deve ter o tamanho de caracteres correto.",
        }),
    });
  }
}
