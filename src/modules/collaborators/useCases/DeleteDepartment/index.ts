import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";

import { DeleteDepartmentController } from "./DeleteDepartmentController";
import { DeleteDepartmentUseCase } from "./DeleteDepartmentUseCase";

const departmentRepositoryInPrisma = new DepartmentRepositoryInPrisma();
const deleteDepartmentUseCase = new DeleteDepartmentUseCase(
  departmentRepositoryInPrisma
);
const deleteDepartmentController = new DeleteDepartmentController(
  deleteDepartmentUseCase
);

export { deleteDepartmentController };
