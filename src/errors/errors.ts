import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export function errorNotFound(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export function catchErrors(
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {}
