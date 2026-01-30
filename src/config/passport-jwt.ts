import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import 'dotenv/config';

const jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${process.env.JWT_SECRET}`,
  },
  (payload, done) => {
    const user = payload;

    return done(null, user);
  }
);

passport.use(jwtStrategy);
