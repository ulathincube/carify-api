import { Request, Response, NextFunction } from "express";
import { body, matchedData, param, validationResult } from "express-validator";
import {
  findCarParts,
  createCarParts,
  getCarBrands,
  getCarsByBrandName,
  getCarsByBrandId,
  getCar,
} from "../models/Part";

const carBrandValidate = param("carBrand")
  .trim()
  .notEmpty()
  .escape()
  .withMessage("Please provide a brand name");

export async function getAllCarBrands(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const allBrands = await getCarBrands();
    res.status(200).json(allBrands);
  } catch (error) {
    next(error);
  }
}

export const getCarsByBrand = [
  carBrandValidate,
  async function getCarsByBrand(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) throw errors.array();

    const { carBrand } = matchedData(req);
    console.log(carBrand);

    try {
      const brandCars = await getCarsByBrandName(carBrand);
      console.log({ brandCars });
      res.status(200).json(brandCars);
    } catch (error) {
      next(error);
    }
  },
];

export const getOneCar = [
  param("carName")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Please provide a valid car name"),
  async function getOneCar(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw errors.array();
    const { carName } = matchedData(req);
    try {
      const car = await getCar(carName);
      res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  },
];

export async function getAllCarParts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const parts = await findCarParts("local");

    if (parts) {
      return res.json({ data: parts, error: null });
    }

    throw new Error("Failed to make a request!");
  } catch (error) {
    next(error);
  }
}

export const createCarPartsDB = [
  body("carBrand")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Please provide a car brand"),
  body("carName")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Please provide a car name"),
  async function createCarPartsDB(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw errors.array();

    const { carBrand, carName } = matchedData(req);
    try {
      const data = await createCarParts(carBrand, carName);
      res.json({ data, error: null });
    } catch (error) {
      next(error);
    }
  },
];
