import { ICreateUsersDTO } from "@modules/collaborators/dtos/ICreateUsersDTO";
import { IDepartmentRepository } from "@modules/collaborators/repositories/IDepartmentRepository";
import { IUserRepository } from "@modules/collaborators/repositories/IUserRepository";
import { hash } from "bcryptjs";
import { AppError } from "infra/errors/AppError";

interface IRequest {
  nome: string;
  cpf: string;
  password: string;
  fk_department: string;
}

class CreateUserUseCase {
  constructor(
    private userRepositoryInPrisma: IUserRepository,
    private departmentRepositoryInPrisma: IDepartmentRepository
  ) {}
  async execute({
    nome,
    cpf,
    password,
    fk_department,
  }: IRequest): Promise<void> {
    const verifyCpfAlreadyExist = await this.userRepositoryInPrisma.findByCPF(
      cpf
    );
    if (verifyCpfAlreadyExist) {
      throw new AppError("CPF Already Exist", 404);
    }
    const verifyDepartment =
      await this.departmentRepositoryInPrisma.findByIdDepartment(fk_department);
    if (!verifyDepartment) {
      throw new AppError("Department does not exist", 404);
    }

    const passwordHash = await hash(password, 8);

    await this.userRepositoryInPrisma.createUser({
      nome,
      cpf,
      password: passwordHash,
      fk_department,
    });
  }
}

export { CreateUserUseCase };
