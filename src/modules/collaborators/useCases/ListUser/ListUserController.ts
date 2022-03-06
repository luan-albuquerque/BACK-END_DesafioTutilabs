import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const list = await this.listUserUseCase.execute();
    return response.status(200).json({ list });
  }
}

export { ListUserController };
