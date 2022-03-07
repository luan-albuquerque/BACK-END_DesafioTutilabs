import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function verifyAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, "974b2615-2c7b-4bdb-9403-67edabf03519");
    return response.status(200).json({ message: "success" });
  } catch (error) {
    return response.status(401).json({
      message: "Token Invalid",
    });
  }
}
