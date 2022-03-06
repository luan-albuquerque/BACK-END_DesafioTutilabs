import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";
import { AppError } from "infra/errors/AppError";

interface IRequest {
  id: string;
}
class DeleteUserUseCase {
  constructor(private userRepositoryInPrisma: UserRepositoryInPrisma) {}
  async execute({ id }: IRequest): Promise<void> {
    const verifyUserAlreadyExist =
      await this.userRepositoryInPrisma.findByIdUser(id);

    if (!verifyUserAlreadyExist) {
      throw new AppError("User does not exist", 404);
    }
    await this.userRepositoryInPrisma.deleteUser(id);
  }
}

export { DeleteUserUseCase };
