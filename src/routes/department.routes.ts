import { createDepartmentController } from "@modules/collaborators/useCases/CreateDepartment";
import { deleteDepartmentController } from "@modules/collaborators/useCases/DeleteDepartment";
import { findByDepartmentController } from "@modules/collaborators/useCases/FindByDepartment";
import { listDepartmentController } from "@modules/collaborators/useCases/ListDepartment";
import { Router } from "express";
import { ensureAuthenticated } from "infra/middlewares/ensureAuthenticated";

const departmentRoutes = Router();

departmentRoutes.post("/", ensureAuthenticated, (request, response) => {
  return createDepartmentController.handle(request, response);
});

departmentRoutes.get("/", (request, response) => {
  return listDepartmentController.handle(request, response);
});

departmentRoutes.get("/:id", (request, response) => {
  return findByDepartmentController.handle(request, response);
});


departmentRoutes.delete("/:id", ensureAuthenticated, (request, response) => {
  return deleteDepartmentController.handle(request, response);
});

export { departmentRoutes };
