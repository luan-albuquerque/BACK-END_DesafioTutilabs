import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";

import { ListDepartmentController } from "./ListDepartmentController";
import { ListDepartmentUseCase } from "./ListDepartmentUseCase";

const departmentRepositoryInPrisma = new DepartmentRepositoryInPrisma();

const listDepartmentUseCase = new ListDepartmentUseCase(
  departmentRepositoryInPrisma
);

const listDepartmentController = new ListDepartmentController(
  listDepartmentUseCase
);

export { listDepartmentController };
