import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";

import { UpdateDepartmentController } from "./UpdateDepartmentController";
import { UpdateDepartmentUseCase } from "./UpdateDepartmentUseCase";

const departmentRepositoryInPrisma = new DepartmentRepositoryInPrisma();

const updateDepartmentUseCase = new UpdateDepartmentUseCase(
  departmentRepositoryInPrisma
);
const updateDepartmentController = new UpdateDepartmentController(
  updateDepartmentUseCase
);

export { updateDepartmentController };
