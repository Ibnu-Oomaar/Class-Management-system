import path from "path";
import dotenv from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), "backend/.env") });
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const fallbackDbUrl =
  "postgresql://neondb_owner:npg_Djbs9f1SXmTh@ep-spring-mouse-ayijs5r6-pooler.c-5.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require";

const connectionString = process.env.DATABASE_URL?.trim() || fallbackDbUrl;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };