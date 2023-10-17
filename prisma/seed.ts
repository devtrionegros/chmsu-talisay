import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const seed = async () => {
  try {
    const users = [];

    const password = await bcrypt.hashSync("password123", 10);

    for (let i = 0; i < 10; i++) {
      users.push({
        username: `user${i + 1}`,
        password,
        email: `user${i + 1}@admin.com`,
        role: "Admin",
        profile: {
          create: {
            address: `Teacher Address ${i + 1}`,
            mobileNumber: `Teacher Mobile Number ${i + 1}`,
          },
        },
      });

      users.push({
        username: `user${i + 1}`,
        password,
        email: `user${i + 1}@teacher.com`,
        role: "TEACHER",
        profile: {
          create: {
            address: `Teacher Address ${i + 1}`,
            mobileNumber: `Teacher Mobile Number ${i + 1}`,
          },
        },
      });

      users.push({
        username: `user${i + 1}`,
        password,
        email: `user${i + 1}@officer.com`,
        role: "OFFICER",
        profile: {
          create: {
            address: `Teacher Address ${i + 1}`,
            mobileNumber: `Teacher Mobile Number ${i + 1}`,
          },
        },
      });
    }

    const createdUsers = await Promise.all(
      users.map((user) => prisma.user.create({ data: user }))
    );

    console.log("Students created:", createdUsers);
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
