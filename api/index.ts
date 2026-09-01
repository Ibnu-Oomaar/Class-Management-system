import app from "../backend/src/server";

export default function handler(req: any, res: any) {
  try {
    return app(req, res);
  } catch (error: any) {
    console.error("Vercel Serverless Function Exception:", error);
    return res.status(500).json({
      success: false,
      message: error?.message || "Serverless Function Exception",
    });
  }
}