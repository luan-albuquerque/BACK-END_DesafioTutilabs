import { ICreateUsersDTO } from "@modules/collaborators/dtos/ICreateUsersDTO";
import { IListUsersDTO } from "@modules/collaborators/dtos/IListUsersDTO";
import { IUpdateUserDTO } from "@modules/collaborators/dtos/IUpdateUserDTO";
import { User } from "@modules/collaborators/entities/User";
import { prismaAgent } from "infra/database/prismaAgent";

import { IUserRepository } from "../IUserRepository";

class UserRepositoryInPrisma implements IUserRepository {
  async findByIdUser(id: string): Promise<User> {
    const response = await prismaAgent.user.findUnique({
      where: {
        id,
      },
    });
    return response;
  }
  async createUser({
    nome,
    cpf,
    password,
    fk_department,
  }: ICreateUsersDTO): Promise<void> {
    await prismaAgent.user.create({
      data: {
        nome,
        cpf,
        password,
        department: {
          connect: {
            id: fk_department,
          },
        },
      },
    });
  }
  async listUsers(): Promise<IListUsersDTO[]> {
    const response = await prismaAgent.user.findMany({
      select: {
        id: true,
        nome: true,
        cpf: true,
        department: {
          select: {
            id: true,
            description: true,
          },
        },
      },
    });
    return response;
  }
  async findByCPF(cpf: string): Promise<User> {
    const response = await prismaAgent.user.findFirst({
      where: {
        cpf,
      },
    });
    return response;
  }
  async updateUser({
    nome,
    cpf,
    password,
    fk_department,
    id,
  }: IUpdateUserDTO): Promise<void> {
    await prismaAgent.user.update({
      data: {
        nome,
        cpf,
        password,
        fk_department,
      },
      where: {
        id,
      },
    });
  }
  async deleteUser(id: string): Promise<void> {
    await prismaAgent.user.delete({
      where: {
        id,
      },
    });
  }
}

export { UserRepositoryInPrisma };
