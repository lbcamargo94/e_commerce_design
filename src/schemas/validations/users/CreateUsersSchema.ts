import {
  REGEX_CPF_VALIDATION,
  REGEX_EMAIL_VALIDATION,
} from "src/utils/constants";
import { z } from "zod";

export class CreateUsersSchema {
  public Create() {
    return z.object({
      name: z.string({
        invalid_type_error: "Nome tem um tipo inválido.",
        required_error: "Nome é um campo obrigatório.",
      }),

      email: z
        .string({
          invalid_type_error: "E-mail tem um tipo inválido.",
          required_error: "E-mail é um campo obrigatório.",
        })
        .email({
          message:
            "E-mail é inválido, deve obedecer o formato email@email.com!",
        })
        .regex(REGEX_EMAIL_VALIDATION, {
          message:
            "Endereço de e-mail é inválido, deve obedecer o formato email@email.com!.",
        }),

      birthday: z
        .string({
          invalid_type_error: "E-mail tem um tipo inválido.",
          required_error: "E-mail é um campo obrigatório.",
        })
        .length(8, {
          message: "Data de aniversário deve obedecer o formato DD/MM/AAAA.",
        }),

      cpf: z
        .string({
          invalid_type_error: "CPF não atende o tipo válido.",
          required_error: "CPF tem um tipo inválido.",
        })
        .regex(REGEX_CPF_VALIDATION, {
          message:
            "CPF inválido, o CPF deve obedecer o formato 000.000.000-00.",
        })
        .length(11, {
          message: "CPF deve ter o tamanho de 11 caracteres.",
        }),
    });
  }
}
