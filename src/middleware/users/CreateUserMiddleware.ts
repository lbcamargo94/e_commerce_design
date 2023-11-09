import { BadRequestError } from "@erro/index";

import { Request, Response, NextFunction } from "express";

import { CreateUsersSchema } from "src/schemas/validations/users/CreateUsersSchema";

import { z } from "zod";

export class CreateUserMiddleware {
  public CreateUser(request: Request, _response: Response, next: NextFunction) {
    const createUsersSchema = new CreateUsersSchema();

    const typeCreateUsersSchema = createUsersSchema.Create();

    const { name, email }: CreateUsersType = request.body;

    type CreateUsersType = z.infer<typeof typeCreateUsersSchema>;

    const formatRequest = {
      email: email.trim(),
      name: name.trim(),
    };

    const result = typeCreateUsersSchema.safeParse(formatRequest as CreateUsersType);

    if (!result.success) {
      throw new BadRequestError(result.error.issues[0].message);
    }

    next();
  }
}
