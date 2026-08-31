import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const users = [
  {
    student_code: "9270",
    first_name: "Mohamed",
    middle_name: "Abdirahman",
    last_name: "Aabi",
    phone: "0637234567",
    role: "main_monitor" as const,
  },
  {
    student_code: "9381",
    first_name: "Mohamed",
    middle_name: "Ismail",
    last_name: "Ibrahim",
    phone: "0637634567",
    role: "assistant_monitor" as const,
  },
  {
    student_code: "9300",
    first_name: "Mohamed",
    middle_name: "Abdalle",
    last_name: "Osman",
    phone: "0656490590",
    role: "education_leader" as const,
  },
  {
    student_code: "9005",
    first_name: "yakoub",
    middle_name: "Idiris",
    last_name: "Aden",
    phone: "0656390500",
    role: "discipline_leader" as const,
  },
  {
    student_code: "9334",
    first_name: "saed",
    middle_name: "Awale",
    last_name: "Abdillahi",
    phone: "0656398500",
    role: "sports_leader" as const,
  },
];

async function main() {
  for (const user of users) {
    const existing = await prisma.student.findFirst({
      where: {
        student_code: user.student_code,
      },
    });

    if (existing) {
      await prisma.student.update({
        where: { id: existing.id },
        data: {
          first_name: user.first_name,
          middle_name: user.middle_name,
          last_name: user.last_name,
          phone: user.phone,
          role: user.role,
          status: "active",
          deleted_at: null,
        },
      });

      console.log(`Updated existing student: ${user.student_code} -> ${user.role}`);
      continue;
    }

    const created = await prisma.student.create({
      data: {
        student_code: user.student_code,
        first_name: user.first_name,
        middle_name: user.middle_name,
        last_name: user.last_name,
        phone: user.phone,
        role: user.role,
        status: "active",
      },
    });

    console.log(`Created student: ${created.student_code} -> ${created.role}`);
  }
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
