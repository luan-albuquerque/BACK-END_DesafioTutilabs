import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  constructor(private updateUserController: UpdateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, cpf, password, fk_department } = request.body;
    const { id } = request.params;
    await this.updateUserController.execute({
      id,
      nome,
      cpf,
      password,
      fk_department,
    });
    return response.status(200).json({ message: "updated" });
  }
}

export { UpdateUserController };
