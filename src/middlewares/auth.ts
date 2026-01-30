import { Response, Request, NextFunction } from 'express';
import passport from 'passport';

export default function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  passport.authenticate('jwt', { session: false });
  next();
}
