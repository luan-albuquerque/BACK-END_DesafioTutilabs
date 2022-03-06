import { IDepartmentRepository } from "@modules/collaborators/repositories/IDepartmentRepository";
import { AppError } from "infra/errors/AppError";

interface IRequest {
  description: string;
}
class CreateDepartmentUseCase {
  constructor(private departmentRepositoryInPrisma: IDepartmentRepository) {}
  async execute({ description }: IRequest): Promise<void> {
    console.log("omundo");

    const departmentAlreadyExist =
      await this.departmentRepositoryInPrisma.findByDepartment(description);

    if (departmentAlreadyExist) {
      throw new AppError("Department Already Exist", 404);
    }

    await this.departmentRepositoryInPrisma.createDepartment({ description });
  }
}

export { CreateDepartmentUseCase };
