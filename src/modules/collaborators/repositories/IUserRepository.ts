import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { IListUsersDTO } from "../dtos/IListUsersDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
  createUser({
    nome,
    cpf,
    password,
    fk_department,
  }: ICreateUsersDTO): Promise<void>;
  listUsers(): Promise<IListUsersDTO[]>;
  findByCPF(cpf: string): Promise<User>;
  findByIdUser(id: string): Promise<User>;
  findByUserInDepartment(id: string): Promise<User>;
  updateUser({
    id,
    nome,
    cpf,
    password,
    fk_department,
  }: IUpdateUserDTO): Promise<void>;
  deleteUser(id: string): Promise<void>;
}

export { IUserRepository };
