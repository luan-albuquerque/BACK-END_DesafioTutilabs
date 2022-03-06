import { Request, Response } from "express";

import { ListDepartmentUseCase } from "./ListDepartmentUseCase";

class ListDepartmentController {
  constructor(private listDepartmentUseCase: ListDepartmentUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const list = await this.listDepartmentUseCase.execute();
    return response.status(201).json({ message: "success", list });
  }
}

export { ListDepartmentController };
