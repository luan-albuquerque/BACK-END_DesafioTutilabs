import { Request, Response } from "express";

import { CreateDepartmentUseCase } from "./CreateDepartmentUseCase";

class CreateDepartmentController {
  constructor(private createDepartmentUseCase: CreateDepartmentUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;


    await this.createDepartmentUseCase.execute({ description });
    return response.status(201).json({ message: "created" });
  }
}

export { CreateDepartmentController };
