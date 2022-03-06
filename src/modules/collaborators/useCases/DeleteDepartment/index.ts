import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";
import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";

import { DeleteDepartmentController } from "./DeleteDepartmentController";
import { DeleteDepartmentUseCase } from "./DeleteDepartmentUseCase";

const userRepositoryInPrisma = new UserRepositoryInPrisma();
const departmentRepositoryInPrisma = new DepartmentRepositoryInPrisma();
const deleteDepartmentUseCase = new DeleteDepartmentUseCase(
  departmentRepositoryInPrisma,
  userRepositoryInPrisma
);
const deleteDepartmentController = new DeleteDepartmentController(
  deleteDepartmentUseCase
);

export { deleteDepartmentController };
