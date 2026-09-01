import express from "express";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import CookieParser from "cookie-parser";
import studentRoutes from "./routes/student.route";
import competitionRoutes from "./routes/competition.route";
import achievementRoutes from "./routes/achievement.route";
import classImpactRoutes from "./routes/class-impact.route";
import disciplineRoutes from "./routes/discipline.route";
import classLeaderRoutes from "./routes/class-leader.route";
import competitionParticipantRoutes from "./routes/competition-participant.route";

// Load dotenv from all possible runtime execution locations
dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), "backend/.env") });
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);
app.use(CookieParser());

// Healthcheck endpoints
app.get(["/", "/api", "/api/health"], (_req, res) => {
  res.json({
    success: true,
    message: "Class 3C System API is running smoothly",
    timestamp: new Date().toISOString(),
  });
});

// URL Normalization Middleware for Serverless Execution
app.use((req, _res, next) => {
  if (req.url && !req.url.startsWith("/api")) {
    req.url = "/api" + (req.url.startsWith("/") ? req.url : "/" + req.url);
  }
  next();
});

// Endpoint routers (supporting both /api/path and /path)
const routes = [
  { path: "/students", router: studentRoutes },
  { path: "/competitions", router: competitionRoutes },
  { path: "/competition-participants", router: competitionParticipantRoutes },
  { path: "/achievements", router: achievementRoutes },
  { path: "/class-impacts", router: classImpactRoutes },
  { path: "/disciplines", router: disciplineRoutes },
  { path: "/class-leaders", router: classLeaderRoutes },
];

for (const route of routes) {
  app.use(`/api${route.path}`, route.router);
  app.use(route.path, route.router);
}

// Global JSON Error Handler Middleware
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error("API Unhandled Error:", err);
    const statusCode = err?.statusCode || err?.status || 500;
    res.status(statusCode).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
);

export default app;

if (process.env.VERCEL !== "1") {
  const port = Number(process.env.PORT ?? 5030);
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}