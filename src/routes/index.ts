import { collaboratorsRoutes } from "./collaborators.routes";
import { Router } from "express";

const routes = Router();

routes.use("/collaborator",collaboratorsRoutes)

export { routes }