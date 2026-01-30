import { Request, Response, NextFunction } from "express";

function showHomePage(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ message: "This is the Carify API" });
}

export default showHomePage;
