const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

const seed = async () => {
  try {
    await database.user.createMany({
      data: [
        { username: 'user1', password: 'password1', email: 'user1@example.com', role: 'user' },
        { username: 'user2', password: 'password2', email: 'user2@example.com', role: 'user' },
        { username: 'user3', password: 'password3', email: 'user3@example.com', role: 'user' },
        { username: 'user4', password: 'password4', email: 'user4@example.com', role: 'user' },
        { username: 'user5', password: 'password5', email: 'user5@example.com', role: 'user' },
        { username: 'user6', password: 'password6', email: 'user6@example.com', role: 'user' },
        { username: 'user7', password: 'password7', email: 'user7@example.com', role: 'user' },
        { username: 'user8', password: 'password8', email: 'user8@example.com', role: 'user' },
        { username: 'user9', password: 'password9', email: 'user9@example.com', role: 'user' },
        { username: 'user10', password: 'password10', email: 'user10@example.com', role: 'user' },
        { username: 'user11', password: 'password11', email: 'user11@example.com', role: 'user' },
        { username: 'user12', password: 'password12', email: 'user12@example.com', role: 'user' },
        { username: 'user13', password: 'password13', email: 'user13@example.com', role: 'user' },
        { username: 'user14', password: 'password14', email: 'user14@example.com', role: 'user' },
        { username: 'user15', password: 'password15', email: 'user15@example.com', role: 'user' },
        { username: 'user16', password: 'password16', email: 'user16@example.com', role: 'user' },
        { username: 'user17', password: 'password17', email: 'user17@example.com', role: 'user' },
        { username: 'user18', password: 'password18', email: 'user18@example.com', role: 'user' },
        { username: 'user19', password: 'password19', email: 'user19@example.com', role: 'user' },
        { username: 'user20', password: 'password20', email: 'user20@example.com', role: 'user' },
      ]
    });
    console.log("success");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await database.$disconnect();
  }
};

seed();
