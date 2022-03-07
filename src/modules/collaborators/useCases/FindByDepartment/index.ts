import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";

import { FindByDepartmentController } from "./FindByDepartmentController";
import { FindByDepartmentUseCase } from "./FindByDepartmentUseCase";

const departmentRepositoryInPrisma = new DepartmentRepositoryInPrisma();

const findByDepartmentUseCase = new FindByDepartmentUseCase(
  departmentRepositoryInPrisma
);

const findByDepartmentController = new FindByDepartmentController(
  findByDepartmentUseCase
);

export { findByDepartmentController };
