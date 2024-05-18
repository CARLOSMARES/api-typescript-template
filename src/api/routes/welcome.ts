import { Request, Response } from "express";
export const welcome = (_req: Request, res: Response): Response => {
  return res.send("Welcome to the API!");
};
