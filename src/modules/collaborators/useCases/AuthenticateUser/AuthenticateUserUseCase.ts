import { Authenticate } from "@modules/collaborators/entities/Authenticate";
import { UserRepositoryInPrisma } from "@modules/collaborators/repositories/implements/UserRepositoryInPrisma";
import { compare } from "bcryptjs";
import { AppError } from "infra/errors/AppError";
import { GenerateTokenProvider } from "infra/provider/GenerateTokenProvider";

interface IRequest {
  cpf: string;
  password: string;
}

class AuthenticateUserUseCase {
  constructor(private userRepositoryInPrisma: UserRepositoryInPrisma) {}

  async execute({ cpf, password }: IRequest): Promise<Authenticate> {
    const verifyUser = await this.userRepositoryInPrisma.findByCPF(cpf);
    if (!verifyUser) {
      throw new AppError("User or Password incorrect");
    }

    const passwordMatch = await compare(password, verifyUser.password);

    if (!passwordMatch) {
      throw new AppError("User or Password incorrect");
    }
    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(verifyUser.id);

    const authenticate = new Authenticate();
    Object.assign(authenticate, {
      token,
      user: {
        nome: verifyUser.nome,
        cpf: verifyUser.cpf,
      },
    });

    // console.log(authenticate);
    return authenticate;
  }
}

export { AuthenticateUserUseCase };
