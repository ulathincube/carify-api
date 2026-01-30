import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { emailCheck, passwordCheck } from "../utils/validate";
import bcrypt from "bcryptjs";
import { matchedData, validationResult } from "express-validator";

export async function logIn(req: Request, res: Response, next: NextFunction) {
  passport.authenticate(
    "local",
    { session: false },
    (error: any, user: any, info: any) => {
      if (error || !user) return next(error);

      req.logIn(user, { session: false }, (error) => {
        if (error) return next(error);

        delete user.password;

        const token = jwt.sign(user, `${process.env.JWT_SECRET}`);

        return res.json({ token });
      });
    }
  )(req, res);
}

export async function logOut(req: Request, res: Response, next: NextFunction) {}

export const signUp = [
  emailCheck,
  passwordCheck,
  async function (req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(errors.array());
    }

    const { email, password } = matchedData(req);
  },
];
