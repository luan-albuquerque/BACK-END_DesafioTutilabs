interface IUpdateUserDTO {
  id: string;
  nome: string;
  cpf: string;
  password: string;
  fk_department: string;
}

export { IUpdateUserDTO };
