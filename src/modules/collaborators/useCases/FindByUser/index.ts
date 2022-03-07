import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";

import { FindByUserController } from "./FindByUserController";
import { FindByUserUseCase } from "./FindByUserUseCase";

const userRepositoryInPrisma = new UserRepositoryInPrisma();
const findByUserUseCase = new FindByUserUseCase(userRepositoryInPrisma);
const findByUserController = new FindByUserController(findByUserUseCase);

export { findByUserController };
