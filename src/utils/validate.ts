import { body } from "express-validator";

export const emailCheck = body("email")
  .trim()
  .notEmpty()
  .isEmail()
  .escape()
  .withMessage("Please provide a valid email address");

export const passwordCheck = body("password")
  .trim()
  .notEmpty()
  .isLength({ min: 8, max: 16 })
  .withMessage("Please provide a password with 8 - 16 characters in length")
  .escape();

export const nameCheck = body("name")
  .trim()
  .notEmpty()
  .isAlpha()
  .isLength({ min: 3, max: 12 })
  .withMessage("Please provide a valid name");
