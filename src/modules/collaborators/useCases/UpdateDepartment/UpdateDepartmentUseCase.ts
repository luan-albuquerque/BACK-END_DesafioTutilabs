import { IDepartmentRepository } from "@modules/collaborators/repositories/IDepartmentRepository";
import { AppError } from "infra/errors/AppError";

interface IRequest {
  description: string;
  id: string;
}
class UpdateDepartmentUseCase {
  constructor(private departmentRepositoryInPrisma: IDepartmentRepository) {}
  async execute({ description, id }: IRequest): Promise<void> {
    const departmentAlreadyExist =
      await this.departmentRepositoryInPrisma.findByDepartment(description);

    if (departmentAlreadyExist) {
      throw new AppError("Department Already Exist", 404);
    }

    await this.departmentRepositoryInPrisma.updateDepartment({
      description,
      id,
    });
  }
}

export { UpdateDepartmentUseCase };
