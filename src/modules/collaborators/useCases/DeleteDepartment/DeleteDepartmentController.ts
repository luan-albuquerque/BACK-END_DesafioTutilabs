import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";
import { Request, Response } from "express";

import { DeleteDepartmentUseCase } from "./DeleteDepartmentUseCase";

class DeleteDepartmentController {
  constructor(private deleteDepartmentUseCase: DeleteDepartmentUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteDepartmentUseCase.execute(id);
    return response.status(201).json({ message: "Deleted" });
  }
}

export { DeleteDepartmentController };
