import { DepartmentRepositoryInPrisma } from "@modules/collaborators/repositories/implements/DepartmentRepositoryInPrisma";
import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";

import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepositoryInPrisma = new UserRepositoryInPrisma();
const departmentRepositoryInPrisma = new DepartmentRepositoryInPrisma();

const createUserUseCase = new CreateUserUseCase(
  userRepositoryInPrisma,
  departmentRepositoryInPrisma
);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
