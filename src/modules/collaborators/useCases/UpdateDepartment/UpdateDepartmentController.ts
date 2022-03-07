import { Request, Response } from "express";

import { UpdateDepartmentUseCase } from "./UpdateDepartmentUseCase";

class UpdateDepartmentController {
  constructor(private updateDepartmentUseCase: UpdateDepartmentUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const { id } = request.params;

    await this.updateDepartmentUseCase.execute({ description, id });
    return response.status(200).json({ message: "updated" });
  }
}

export { UpdateDepartmentController };
