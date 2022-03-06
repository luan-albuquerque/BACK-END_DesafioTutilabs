import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";

import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const userRepositoryInPrisma = new UserRepositoryInPrisma();
const deleteUserUseCase = new DeleteUserUseCase(userRepositoryInPrisma);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
