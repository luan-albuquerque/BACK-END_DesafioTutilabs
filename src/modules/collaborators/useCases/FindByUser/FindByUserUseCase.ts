import { IListUsersDTO } from "@modules/collaborators/dtos/IListUsersDTO";
import { User } from "@modules/collaborators/entities/User";
import { IUserRepository } from "@modules/collaborators/repositories/IUserRepository";
import { AppError } from "infra/errors/AppError";

interface IRequest {
  id: string;
}
class FindByUserUseCase {
  constructor(private userRepositoryInPrisma: IUserRepository) {}

  async execute({ id }: IRequest): Promise<User> {
    const verifyUserAlreadyExist =
      await this.userRepositoryInPrisma.findByIdUser(id);

    if (!verifyUserAlreadyExist) {
      throw new AppError("User does not exist", 404);
    }

    const list = await this.userRepositoryInPrisma.findByIdUser(id);
    const user = new User();
    Object.assign(user, {
      id: list.id,
      nome: list.nome,
      cpf: list.cpf,
      fk_department: list.fk_department,
    });

    return user;
  }
}

export { FindByUserUseCase };
