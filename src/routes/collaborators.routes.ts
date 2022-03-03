// import { CreateCollaboratorController } from "@modules/collaborators/useCases/CreateCollaborator/CreateCollaboratorController";
import { CreateCollaboratorController } from "@modules/collaborators/useCases/CreateCollaborator/CreateCollaboratorController";
import { Router } from "express";

const collaboratorsRoutes = Router();
const createCollaboratorController = new CreateCollaboratorController();

collaboratorsRoutes.get("/", createCollaboratorController.handle);


export {collaboratorsRoutes}