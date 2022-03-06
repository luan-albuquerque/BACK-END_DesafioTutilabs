import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";
import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";

import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const userRepositoryInPrisma = new UserRepositoryInPrisma();
const departmentRepositoryInPrisma = new DepartmentRepositoryInPrisma();
const updateUserUseCase = new UpdateUserUseCase(
  userRepositoryInPrisma,
  departmentRepositoryInPrisma
);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
