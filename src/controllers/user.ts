import { Request, Response, NextFunction } from "express";
import { createUser } from "../models/User";
import { matchedData, validationResult } from "express-validator";
import { hashPassword } from "../utils/hash";
import { nameCheck, emailCheck, passwordCheck } from "../utils/validate";

async function createUserAcc(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return next(errors.array());

    const { name, email, password } = matchedData(req);

    const hashedPassword = await hashPassword(password);

    await createUser({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User successfully created!" });
  } catch (error) {
    return next(error);
  }
}

export const createUserAccount = [
  emailCheck,
  passwordCheck,
  nameCheck,
  createUserAcc,
];
