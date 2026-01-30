import express from "express";
import "dotenv/config";
import authenticate from "./middlewares/auth";
import indexRoute from "./routes/index";
import carsRoute from "./routes/cars";
import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import { catchErrors, errorNotFound } from "./errors/errors";
import "./config/passport-jwt";
import "./config/passport-local";
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
