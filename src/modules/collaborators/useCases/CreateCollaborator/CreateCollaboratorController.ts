import { Request, Response } from "express";

class CreateCollaboratorController {
  handle(request: Request, response: Response): Response {
    return response.status(201).json("success");
  }
}
export { CreateCollaboratorController };
