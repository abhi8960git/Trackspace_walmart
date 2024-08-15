const { PrismaClient, BatchStatus } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Define some example product IDs
  const productIds = [
    "product1",
    "product2",
    "product3",
    "product4",
    "product5",
  ];

  // Create batches with unique product IDs and InTransit status
  await prisma.batch.createMany({
    data: [
      {
        name: "Batch 1",
        source: "Factory A",
        destination: "Warehouse A",
        status: BatchStatus.InTransit,
        productIds: [productIds[0], productIds[1]],
        longitude: 4.79029,
        lattitude: -75.69003,
      },
      {
        name: "Batch 2",
        source: "Factory B",
        destination: "Warehouse B",
        status: BatchStatus.InTransit,
        productIds: [productIds[2], productIds[3]],
        longitude: 40.7128,
        lattitude: -74.006,
      },
    ],
  });

  // Create batches with overlapping product IDs but Delivered or Cancelled status
  await prisma.batch.createMany({
    data: [
      {
        name: "Batch 3",
        source: "Factory C",
        destination: "Warehouse C",
        status: BatchStatus.Delivered,
        productIds: [productIds[0], productIds[4]],
        longitude: 37.7749,
        lattitude: -122.4194,
      },
      {
        name: "Batch 4",
        source: "Factory D",
        destination: "Warehouse D",
        status: BatchStatus.Cancelled,
        productIds: [productIds[1], productIds[2]],
        longitude: 51.5074,
        lattitude: -0.1278,
      },
    ],
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
