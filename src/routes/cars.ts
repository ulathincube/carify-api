import { Router } from "express";
import {
  getAllCarParts,
  createCarPartsDB,
  getAllCarBrands,
  getCarsByBrand,
  getOneCar,
} from "../controllers/cars.js";

const router = Router();

router.get("/", getAllCarBrands);
router.post("/admin", createCarPartsDB);

router.get("/:carBrand/:carName", getOneCar);

router.get("/:carBrand", getCarsByBrand);

export default router;
