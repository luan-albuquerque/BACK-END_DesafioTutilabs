import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;
    const authenticate = await this.authenticateUserUseCase.execute({
      cpf,
      password,
    });
    return response.status(200).json({ authenticate });
  }
}

export { AuthenticateUserController };
