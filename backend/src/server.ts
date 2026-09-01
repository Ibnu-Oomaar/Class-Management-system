import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import CookieParser from "cookie-parser";
import studentRoutes from "../src/routes/student.route";
import competitionRoutes from "../src/routes/competition.route";
import achievementRoutes from "../src/routes/achievement.route";
import classImpactRoutes from "../src/routes/class-impact.route";
import disciplineRoutes from "../src/routes/discipline.route";
import classLeaderRoutes from "../src/routes/class-leader.route";
import competitionParticipantRoutes from "../src/routes/competition-participant.route";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(CookieParser());

//endpoint router

app.use("/api/students", studentRoutes);
app.use("/api/competitions", competitionRoutes);
app.use("/api/competition-participants", competitionParticipantRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/class-impacts", classImpactRoutes);
app.use("/api/disciplines", disciplineRoutes);
app.use("/api/class-leaders", classLeaderRoutes);

const port = Number(process.env.PORT ?? 5030);


app.listen(port, () => console.log(`server is listening on port ${port}`));