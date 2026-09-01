import type { IncomingMessage, ServerResponse } from "http";

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const serverModule = await import("../backend/src/server");
    const app = serverModule.default || serverModule;
    return app(req, res);
  } catch (error: any) {
    console.error("Vercel Serverless Function Error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        success: false,
        message: "Serverless Function Exception",
        errorName: error?.name,
        errorMessage: error?.message,
        errorStack: error?.stack,
      })
    );
  }
}