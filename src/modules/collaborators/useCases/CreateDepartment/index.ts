import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";

import { CreateDepartmentController } from "./CreateDepartmentController";
import { CreateDepartmentUseCase } from "./CreateDepartmentUseCase";

const departmentRepositoryInPrisma = new DepartmentRepositoryInPrisma();

const createDepartmentUseCase = new CreateDepartmentUseCase(
  departmentRepositoryInPrisma
);
const createDepartmentController = new CreateDepartmentController(
  createDepartmentUseCase
);

export { createDepartmentController };
