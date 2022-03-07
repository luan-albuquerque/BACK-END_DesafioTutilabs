import { hash } from "bcryptjs";

import { prismaAgent } from "./prismaAgent";

function DefaultData(): void {
  async function DefaultUser() {
    const nome = "Administrador";
    const cpf = "70132165400";
    const password = `123`;
    const passwordHash = await hash(password, 8);

    try {
      await prismaAgent.user.create({
        data: {
          nome,
          cpf,
          password: passwordHash,
          department: {
            create: {
              description: "Tutilabs",
            },
          },
        },
      });
    } catch {
      console.log("User Default already created!");
    }
  }

  DefaultUser();
}

DefaultData();
