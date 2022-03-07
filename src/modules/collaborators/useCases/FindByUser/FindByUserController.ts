import { Request, Response } from "express";

import { FindByUserUseCase } from "./FindByUserUseCase";

class FindByUserController {
  constructor(private findUserUseCase: FindByUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const list = await this.findUserUseCase.execute({ id });
    return response.status(200).json({ list });
  }
}

export { FindByUserController };
