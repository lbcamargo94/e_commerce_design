import { BadRequestError } from "@erro/index";
import type { Request, Response, NextFunction } from "express";
import { CreateUsersSchema } from "src/schemas/validations/users/CreateUsersSchema";
import type { z } from "zod";

export class CreateUserMiddleware {
  public CreateUser(request: Request, _response: Response, next: NextFunction) {
    const createUsersSchema = new CreateUsersSchema();

    const typeCreateUsersSchema = createUsersSchema.Create();

    const { name, email, birthday, cpf }: CreateUsersType = request.body;

    type CreateUsersType = z.infer<typeof typeCreateUsersSchema>;

    const result = typeCreateUsersSchema.safeParse({ name, email, birthday, cpf });

    if (!result.success) {
      throw new BadRequestError(result.error.issues[0].message);
    }

    next();
  }
}
