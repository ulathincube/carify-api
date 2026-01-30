import prisma from "../config/prisma.js";

type Cars = { brand: string; name: string }[];

const carsArray: Cars = [
  { brand: "Toyota", name: "Hilux" },
  { brand: "Isuzu", name: "KB 250" },
  { brand: "Isuzu", name: "KB 300" },
  { brand: "VW", name: "Polo" },
  { brand: "BMW", name: "E46" },
  { brand: "Honda", name: "Accord" },
  { brand: "Honda", name: "Jazz" },
  { brand: "Ford", name: "Raptor" },
  { brand: "Nissan", name: "Sunny" },
];

async function main(car: { brand: string; name: string }) {
  try {
    const newCar = await prisma.car.create({
      data: {
        name: car.name,
        brand: {
          create: {
            name: car.brand,
          },
        },
        partCategory: {
          create: [
            {
              name: "Chassis Exterior",
              part: {
                create: [
                  { name: "Doors" },
                  { name: "Windows" },
                  { name: "Wheels" },
                  { name: "Rim" },
                  { name: "Bumper" },
                ],
              },
            },
            {
              name: "Chassis Interior",
              part: {
                create: [
                  { name: "Steering" },
                  { name: "Seats" },
                  { name: "Seatbelt" },
                  { name: "Headrest" },
                  { name: "Dashboard" },
                ],
              },
            },
            {
              name: "Cooling System",
              part: {
                create: [
                  { name: "Radiator" },
                  { name: "Oil Pump" },
                  { name: "Air Filter" },
                  { name: "Fuel Pump" },
                  { name: "Fuel Tank" },
                ],
              },
            },
            {
              name: "Braking System",
              part: {
                create: [
                  { name: "Brake Fluid" },
                  { name: "Brake Drum" },
                  { name: "Brake Pad" },
                  { name: "Brake Pedal" },
                  { name: "Brake Pump" },
                ],
              },
            },
          ],
        },
      },
      include: {
        brand: true,
        partCategory: true,
      },
    });
  } catch (error) {
    throw error;
  }
}

main({ brand: "Honda", name: "Jazz" });
