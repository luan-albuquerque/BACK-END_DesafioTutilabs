import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";

import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const userRepositoryInPrisma = new UserRepositoryInPrisma();
const listUserUseCase = new ListUserUseCase(userRepositoryInPrisma);
const listUserController = new ListUserController(listUserUseCase);

export { listUserController };
