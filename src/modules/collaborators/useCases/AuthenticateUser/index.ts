import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";

import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const userRepositoryInPrisma = new UserRepositoryInPrisma();
const authenticateUserUseCase = new AuthenticateUserUseCase(
  userRepositoryInPrisma
);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

export { authenticateUserController };
