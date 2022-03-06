import { IDepartmentRepository } from "@modules/collaborators/repositories/IDepartmentRepository";
import { IUserRepository } from "@modules/collaborators/repositories/IUserRepository";
import { hash } from "bcryptjs";
import { AppError } from "infra/errors/AppError";

interface IRequest {
  id: string;
  nome: string;
  cpf: string;
  password: string;
  fk_department: string;
}
class UpdateUserUseCase {
  constructor(
    private userRepositoryInPrisma: IUserRepository,
    private departmentRepositoryInPrisma: IDepartmentRepository
  ) {}
  async execute({
    id,
    nome,
    cpf,
    password,
    fk_department,
  }: IRequest): Promise<void> {
    const verifyUserAlreadyExist =
      await this.userRepositoryInPrisma.findByIdUser(id);

    const verifyCpfAlreadyExist = await this.userRepositoryInPrisma.findByCPF(
      cpf
    );

    if (!verifyUserAlreadyExist) {
      throw new AppError("User does not exist", 404);
    }

    if (verifyUserAlreadyExist) {
      if (cpf !== verifyUserAlreadyExist.cpf) {
        if (verifyCpfAlreadyExist) {
          throw new AppError("CPF Already Exist", 404);
        }
      }
    }

    const verifyDepartment =
      await this.departmentRepositoryInPrisma.findByIdDepartment(fk_department);
    if (!verifyDepartment) {
      throw new AppError("Department does not exist", 404);
    }
    const passwordHash = await hash(password, 8);
    await this.userRepositoryInPrisma.updateUser({
      id,
      nome,
      cpf,
      password: passwordHash,
      fk_department,
    });
  }
}

export { UpdateUserUseCase };
