import prisma from "../config/prisma.js";

interface User {
  name: string;
  email: string;
  password: string;
}

export async function findUserByEmail(email: string) {
  return { password: "", id: "x", username: "" };
}

export async function findUserById(id: string) {
  return { password: "", id: "x", username: "" };
}

export async function createUser(userData: User) {
  try {
    const user = await prisma.user.create({
      data: userData,
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
