import { IDepartmentRepository } from "@modules/collaborators/repositories/IDepartmentRepository";
import { IUserRepository } from "@modules/collaborators/repositories/IUserRepository";
import { AppError } from "infra/errors/AppError";

class DeleteDepartmentUseCase {
  constructor(
    private departmentRepositoryInPrisma: IDepartmentRepository,
    private userRepositoryInPrisma: IUserRepository
  ) {}
  async execute(id: string): Promise<void> {
    const verifyDepartment =
      await this.departmentRepositoryInPrisma.findByIdDepartment(id);

    if (!verifyDepartment) {
      throw new AppError("Department does not exist");
    }
    const verifyUserInDepartment =
      await this.userRepositoryInPrisma.findByUserInDepartment(id);

    if (verifyUserInDepartment) {
      throw new AppError("There is a user in the department");
    }

    await this.departmentRepositoryInPrisma.deleteDepartment(id);
  }
}

export { DeleteDepartmentUseCase };
