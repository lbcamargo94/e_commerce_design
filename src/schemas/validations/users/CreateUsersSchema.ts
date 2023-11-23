import { z } from "zod";

const REGEX_EMAIL_VALIDATION = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const REGEX_CPF_VALIDATION = /(\d{3})(\d{3})(\d{3})(\d{2})/;

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
        .email({ message: "E-mail é inválido, deve obedecer o formato email@email.com!" })
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
          message: "CPF inválido, o CPF deve obedecer o formato 000.000.000-00.",
        })
        .length(11, {
          message: "CPF deve ter o tamanho de 11 caracteres.",
        }),
    });
  }

  // public Updated() {
  //   return z.object({
  //     id: z.string({
  //       invalid_type_error: "ID tem um tipo inválido.",
  //       required_error: "ID é um campo obrigatório.",
  //     }),
  //     blocked: z.boolean({
  //       invalid_type_error: "Bloqueado não é do tipo booleano",
  //       required_error: "Bloqueado é um campo obrigatório.",
  //     }),
  //     isValidate: z.boolean({
  //       invalid_type_error: "Validado não é do tipo boleano.",
  //       required_error: "Validado é um campo obrigatório.",
  //     }),
  //     name: z.string({
  //       invalid_type_error: "Nome tem um tipo inválido.",
  //       required_error: "Nome é um campo obrigatório.",
  //     }),
  //     email: z.string({
  //       invalid_type_error: "Email tem um tipo inválido.",
  //       required_error: "Email é um campo obrigatório.",
  //     }),
  //     password: z.string({
  //       invalid_type_error: "Password tem um tipo inválido.",
  //       required_error: "Password é um campo obrigatório.",
  //     }),
  //     validationCode: z.string({
  //       invalid_type_error: "Código de Válidação não é do tipo.",
  //       required_error: "Código de Válidação é um campo obrigatório.",
  //     }),
  //   });
  // }
  // public Block() {
  //   return z.object({
  //     id: z.string({
  //       invalid_type_error: "ID tem um tipo inválido.",
  //       required_error: "ID é um campo obrigatório.",
  //     }),
  //     blocked: z.boolean({
  //       invalid_type_error: "Bloqueado não é do tipo booleano",
  //       required_error: "Bloqueado é um campo obrigatório.",
  //     }),
  //   });
}
