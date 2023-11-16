import { object, z } from "zod";

const REGEX_EMAIL_VALIDATION = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export class CreateUsersSchema {
  public Create() {
    return z.object({
      name: z.string({
        invalid_type_error: "Nome não é do tipo string.",
        required_error: "Nome é um campo obrigatório.",
      }),
      email: z
        .string({
          invalid_type_error: "Email não é do tipo string.",
          required_error: "Email é um campo obrigatório.",
        })
        .regex(REGEX_EMAIL_VALIDATION, {
          message: "Endereço de email é inválido.",
        }),
    });
  }
  // public Updated() {
  //   return z.object({
  //     id: z.string({
  //       invalid_type_error: "ID não é do tipo string.",
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
  //       invalid_type_error: "Nome não é do tipo string.",
  //       required_error: "Nome é um campo obrigatório.",
  //     }),
  //     email: z.string({
  //       invalid_type_error: "Email não é do tipo string.",
  //       required_error: "Email é um campo obrigatório.",
  //     }),
  //     password: z.string({
  //       invalid_type_error: "Password não é do tipo string.",
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
  //       invalid_type_error: "ID não é do tipo string.",
  //       required_error: "ID é um campo obrigatório.",
  //     }),
  //     blocked: z.boolean({
  //       invalid_type_error: "Bloqueado não é do tipo booleano",
  //       required_error: "Bloqueado é um campo obrigatório.",
  //     }),
  //   });
}
