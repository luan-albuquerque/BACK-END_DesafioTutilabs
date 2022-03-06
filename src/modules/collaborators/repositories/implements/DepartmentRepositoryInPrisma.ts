import { ICreateDepartmentDTO } from "@modules/collaborators/dtos/ICreateDepartmentDTO";
import { prismaAgent } from "infra/database/prismaAgent";

import { Department } from "../../entities/Department";
import { IDepartmentRepository } from "../IDepartmentRepository";

class DepartmentRepositoryInPrisma implements IDepartmentRepository {
  async findByIdDepartment(id: string): Promise<Department> {
    const response = await prismaAgent.department.findUnique({
      where: {
        id,
      },
    });
    return response;
  }
  async deleteDepartment(id: string): Promise<void> {
    await prismaAgent.department.delete({
      where: {
        id,
      },
    });
  }
  async findByDepartment(description: string): Promise<Department> {
    const response = await prismaAgent.department.findFirst({
      where: { description },
    });
    return response;
  }
  async createDepartment({ description }: ICreateDepartmentDTO): Promise<void> {
    await prismaAgent.department.create({
      data: {
        description,
      },
    });
  }
  async listDepartment(): Promise<Department[]> {
    const response = await prismaAgent.department.findMany();
    return response;
  }
}

export { DepartmentRepositoryInPrisma };
