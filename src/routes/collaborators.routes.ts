// eslint-disable-next-line import/no-unresolved
import { createUserController } from "@modules/collaborators/useCases/CreateUser";
import { deleteUserController } from "@modules/collaborators/useCases/DeleteUser";
import { findByUserController } from "@modules/collaborators/useCases/FindByUser";
import { listUserController } from "@modules/collaborators/useCases/ListUser";
import { updateUserController } from "@modules/collaborators/useCases/UpdateUser";
import { Router } from "express";
import { ensureAuthenticated } from "infra/middlewares/ensureAuthenticated";

const collaboratorsRoutes = Router();

collaboratorsRoutes.post("/", ensureAuthenticated, (request, response) => {
  return createUserController.handle(request, response);
});

collaboratorsRoutes.get("/", ensureAuthenticated, (request, response) => {
  return listUserController.handle(request, response);
});

collaboratorsRoutes.get("/:id", ensureAuthenticated, (request, response) => {
  return findByUserController.handle(request, response);
});

collaboratorsRoutes.put("/:id", ensureAuthenticated, (request, response) => {
  return updateUserController.handle(request, response);
});

collaboratorsRoutes.delete("/:id", ensureAuthenticated, (request, response) => {
  return deleteUserController.handle(request, response);
});

export { collaboratorsRoutes };
