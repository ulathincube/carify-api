import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export function errorNotFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({ error: 'Page not found' });
}

export function catchErrors(
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({ error: 'Error encountered!' });
}
