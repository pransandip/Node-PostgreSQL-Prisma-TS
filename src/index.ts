import { prisma } from "./prisma/prisma.client.js";

async function main() {
  const user = await prisma.user.findMany();
  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
