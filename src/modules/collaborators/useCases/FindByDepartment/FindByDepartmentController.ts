import { Request, Response } from "express";

import { FindByDepartmentUseCase } from "./FindByDepartmentUseCase";

class FindByDepartmentController {
  constructor(private findByDepartmentUseCase: FindByDepartmentUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const list = await this.findByDepartmentUseCase.execute({ id });
    return response.status(201).json({ message: "success", list });
  }
}

export { FindByDepartmentController };
