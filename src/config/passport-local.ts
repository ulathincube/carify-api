import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { findUserByEmail, findUserById } from "../models/User.js";
import bcrypt from "bcryptjs";

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await findUserByEmail(email);

      if (!user)
        return done(null, false, { message: "Invalid email or password" });

      const match = await bcrypt.compare(password, user.password);

      if (!match)
        return done(null, false, { message: "Invalid email or password." });

      return done(null, user, { message: "Logged in successfully." });
    } catch (error) {
      done(error);
    }
  }
);

passport.use(localStrategy);

passport.serializeUser((user: any, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await findUserById(id);
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});
