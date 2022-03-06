import { User } from "@modules/collaborators/entities/User";
import { IUserRepository } from "@modules/collaborators/repositories/IUserRepository";

class ListUserUseCase {
  constructor(private userRepositoryInPrisma: IUserRepository) {}

  async execute(): Promise<User[]> {
    const list = this.userRepositoryInPrisma.listUsers();
    return list;
  }
}

export { ListUserUseCase };
