import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const user1 = await prisma.user.upsert({
    where: { email: 'example@gmail.com' },
    update: {},
    create: {
      email: 'example@gmail.com',
      name: 'new user',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'example2@gmail.com' },
    update: {},
    create: {
      email: 'example2@gmail.com',
      name: 'new user2',
    },
  });

  const post1 = await prisma.post.upsert({
    create: {
      authorId: user1.id,
      content: 'top content',
      title: 'finest title',
      published: true,
    },
    update: {},
    where: { id: 1 },
  });

  console.log({ post1, user2, user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
