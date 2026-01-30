import prisma from "../config/prisma";

export async function getCarBrands() {
  try {
    const result = await prisma.carBrand.findMany();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCarsByBrandName(brand: string) {
  try {
    const carsByBrand = await prisma.carBrand.findMany({
      where: {
        name: brand,
      },
      include: {
        cars: true,
      },
    });

    return carsByBrand;
  } catch (error) {
    throw error;
  }
}
export async function getCarsByBrandId(brandId: number) {
  try {
    const carsByBrand = await prisma.carBrand.findMany({
      where: {
        id: brandId,
      },
      include: {
        cars: true,
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function getCar(name: string) {
  try {
    const car = await prisma.car.findUnique({
      where: {
        name: name,
      },
      include: {
        partCategory: {
          include: {
            part: true,
          },
        },
      },
    });

    return car;
  } catch (error) {
    throw error;
  }
}

export async function findCarParts(brand: string) {
  try {
    const result = await prisma.car.findMany({
      include: {
        brand: true,
        partCategory: {
          include: {
            part: true,
          },
        },
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
}

export async function createCarParts() {
  try {
    const newPart = await prisma.car.create({
      data: {
        name: "Accord",
        brand: {
          create: {
            name: "Honda",
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

    return newPart;
  } catch (error) {
    throw error;
  }
}
