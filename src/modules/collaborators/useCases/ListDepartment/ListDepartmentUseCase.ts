import { Department } from "@modules/collaborators/entities/Department";
import { IDepartmentRepository } from "@modules/collaborators/repositories/IDepartmentRepository";

class ListDepartmentUseCase {
  constructor(private departmentRepositoryInPrisma: IDepartmentRepository) {}
  async execute(): Promise<Department[]> {
    const list = await this.departmentRepositoryInPrisma.listDepartment();

    return list;
  }
}

export { ListDepartmentUseCase };
