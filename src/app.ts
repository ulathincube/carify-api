import express from "express";
import "dotenv/config";
import authenticate from "./middlewares/auth.js";
import indexRoute from "./routes/index.js";
import carsRoute from "./routes/cars.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import { catchErrors, errorNotFound } from "./errors/errors.js";
import "./config/passport-jwt.js";
import "./config/passport-local.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", authRoute);

app.use("/api/cars", carsRoute);

// app.use("/api/user", authenticate, userRoute);

app.use("/", indexRoute);

app.get("/*splat", errorNotFound);

app.use(catchErrors);

app.listen(process.env.PORT, (error) => {
  if (error) throw error;

  console.log("server running");
});
