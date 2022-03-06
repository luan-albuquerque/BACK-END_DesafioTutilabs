import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, cpf, fk_department, password } = request.body;
    await this.createUserUseCase.execute({
      nome,
      cpf,
      fk_department,
      password,
    });
    return response.status(201).json("success");
  }
}
export { CreateUserController };
