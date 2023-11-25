const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();
const bcrypt = require("bcryptjs");

const seedUser = async () => {
  try {
    const getSalt = (myPlaintextPassword: any) => {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(myPlaintextPassword, salt);

      return hash;
    };
    await database.user.createMany({
      data: [
        {
          username: "user1",
          password: getSalt("password1"),
          email: "user1@example.com",
          roleId: "09e00c01-43bd-433b-8aba-b283187ed04f",
        },
        {
          username: "user2",
          password: getSalt("password2"),
          email: "user2@example.com",
          roleId: "09e00c01-43bd-433b-8aba-b283187ed04f",
        },
        {
          username: "user3",
          password: getSalt("password3"),
          email: "user3@example.com",
          roleId: "09e00c01-43bd-433b-8aba-b283187ed04f",
        },
        {
          username: "user4",
          password: getSalt("password4"),
          email: "user4@example.com",
          roleId: "09e00c01-43bd-433b-8aba-b283187ed04f",
        },
        {
          username: "user5",
          password: getSalt("password5"),
          email: "user5@example.com",
          roleId: "09e00c01-43bd-433b-8aba-b283187ed04f",
        },
        {
          username: "user6",
          password: getSalt("password6"),
          email: "user6@example.com",
          roleId: "09e00c01-43bd-433b-8aba-b283187ed04f",
        },
        {
          username: "user7",
          password: getSalt("password7"),
          email: "user7@example.com",
          roleId: "09e00c01-43bd-433b-8aba-b283187ed04f",
        },
        {
          username: "user8",
          password: getSalt("password8"),
          email: "user8@example.com",
          roleId: "cea405be-8459-4040-8e51-66f8c9c52fff",
        },
        {
          username: "user9",
          password: getSalt("password9"),
          email: "user9@example.com",
          roleId: "cea405be-8459-4040-8e51-66f8c9c52fff",
        },
        {
          username: "user10",
          password: getSalt("password10"),
          email: "user10@example.com",
          roleId: "cea405be-8459-4040-8e51-66f8c9c52fff",
        },
        {
          username: "user11",
          password: getSalt("password11"),
          email: "user11@example.com",
          roleId: "cea405be-8459-4040-8e51-66f8c9c52fff",
        },
        {
          username: "user12",
          password: getSalt("password12"),
          email: "user12@example.com",
          roleId: "cea405be-8459-4040-8e51-66f8c9c52fff",
        },
        {
          username: "user13",
          password: getSalt("password13"),
          email: "user13@example.com",
          roleId: "cea405be-8459-4040-8e51-66f8c9c52fff",
        },
        {
          username: "user14",
          password: getSalt("password14"),
          email: "user14@example.com",
          roleId: "29260dd5-1cdb-4ef9-990f-150354794bac",
        },
        {
          username: "user15",
          password: getSalt("password15"),
          email: "user15@example.com",
          roleId: "cea405be-8459-4040-8e51-66f8c9c52fff",
        },
        {
          username: "user16",
          password: getSalt("password16"),
          email: "user16@example.com",
          roleId: "29260dd5-1cdb-4ef9-990f-150354794bac",
        },
        {
          username: "user17",
          password: getSalt("password17"),
          email: "user17@example.com",
          roleId: "29260dd5-1cdb-4ef9-990f-150354794bac",
        },
        {
          username: "user18",
          password: getSalt("password18"),
          email: "user18@example.com",
          roleId: "29260dd5-1cdb-4ef9-990f-150354794bac",
        },
        {
          username: "user19",
          password: getSalt("password19"),
          email: "user19@example.com",
          roleId: "29260dd5-1cdb-4ef9-990f-150354794bac",
        },
        {
          username: "user20",
          password: getSalt("password20"),
          email: "user20@example.com",
          roleId: "29260dd5-1cdb-4ef9-990f-150354794bac",
        },
      ],
    });
    console.log("success");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await database.$disconnect();
  }
};

// const seedRole = async () => {
//   try {
//     await database.role.createMany({
//       data: [
//         { roleType: "admin" },
//         { roleType: "user" },
//         { roleType: "staff" },
//       ],
//     });
//     console.log("success");
//   } catch (error) {
//     console.error("Error seeding the database:", error);
//   } finally {
//     await database.$disconnect();
//   }
// };

// seedRole();
seedUser();
