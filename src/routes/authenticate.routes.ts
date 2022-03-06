import { authenticateUserController } from "@modules/collaborators/useCases/AuthenticateUser";
import { Router } from "express";

const authenticateRoutes = Router();

authenticateRoutes.post("/", (request, response) => {
  return authenticateUserController.handle(request, response);
});

export { authenticateRoutes };
