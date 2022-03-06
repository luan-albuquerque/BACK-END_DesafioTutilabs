interface IListUsersDTO {
  id?: string;
  nome: string;
  cpf: string;
  department: {
    id?: string;
    description: string;
  };
}

export { IListUsersDTO };
