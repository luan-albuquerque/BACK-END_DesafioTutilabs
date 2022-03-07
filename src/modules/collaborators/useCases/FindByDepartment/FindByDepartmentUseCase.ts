import { Department } from "@modules/collaborators/entities/Department";
import { IDepartmentRepository } from "@modules/collaborators/repositories/IDepartmentRepository";
import { AppError } from "infra/errors/AppError";

interface IRequest {
  id: string;
}
class FindByDepartmentUseCase {
  constructor(private departmentRepositoryInPrisma: IDepartmentRepository) {}
  async execute({ id }: IRequest): Promise<Department> {
    const verifyDepartment =
      await this.departmentRepositoryInPrisma.findByIdDepartment(id);

    if (!verifyDepartment) {
      throw new AppError("Department does not exist");
    }

    const list = await this.departmentRepositoryInPrisma.findByIdDepartment(id);

    return list;
  }
}

export { FindByDepartmentUseCase };
