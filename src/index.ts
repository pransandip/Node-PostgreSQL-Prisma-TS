import { prisma } from "./prisma/prisma.client.js";

async function main() {
  // * you will write your Prisma Client queries here
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
