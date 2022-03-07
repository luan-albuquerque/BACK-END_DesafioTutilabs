import { authenticateUserController } from "@modules/collaborators/useCases/AuthenticateUser";
import { Router } from "express";
import { ensureAuthenticated } from "infra/middlewares/ensureAuthenticated";
import { verifyAuthenticated } from "infra/middlewares/verifyAuthenticated";

const authenticateRoutes = Router();

authenticateRoutes.post("/", (request, response) => {
  return authenticateUserController.handle(request, response);
});

authenticateRoutes.get("/verify", verifyAuthenticated);

export { authenticateRoutes };
