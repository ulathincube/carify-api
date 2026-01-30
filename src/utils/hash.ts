import bcrypt from "bcryptjs";
import "dotenv/config";

export async function hashPassword(password: string) {
  try {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

    return hashedPassword;
  } catch (error) {
    throw error;
  }
}
