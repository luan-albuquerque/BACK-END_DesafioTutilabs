import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { collaboratorsRoutes } from "./collaborators.routes";
import { departmentRoutes } from "./department.routes";

const routes = Router();

routes.use("/collaborator", collaboratorsRoutes);
routes.use("/department", departmentRoutes);
routes.use("/login", authenticateRoutes);

export { routes };
