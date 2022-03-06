import { IDepartmentRepository } from "@modules/collaborators/repositories/IDepartmentRepository";
import { AppError } from "infra/errors/AppError";

class DeleteDepartmentUseCase {
  constructor(private departmentRepositoryInPrisma: IDepartmentRepository) {}
  async execute(id: string): Promise<void> {
    const verifyDepartment =
      await this.departmentRepositoryInPrisma.findByIdDepartment(id);
    console.log(verifyDepartment);

    if (!verifyDepartment) {
      throw new AppError("Department does not exist");
    }

    await this.departmentRepositoryInPrisma.deleteDepartment(id);
  }
}

export { DeleteDepartmentUseCase };
