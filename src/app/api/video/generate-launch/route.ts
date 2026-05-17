/**
 * API Endpoint: Generate ThreadWizard Launch Trailer
 * POST /api/video/generate-launch
 */

import { NextRequest, NextResponse } from "next/server";
import VideoGenerator from "@/lib/video-generation";

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const videoGen = new VideoGenerator();
    const result = await videoGen.generateLaunchTrailer();

    if (result.status === "failed") {
      return NextResponse.json(
        { error: result.error || "Video generation failed" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        data: result,
        message: "Launch trailer generation started.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Video generation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: "POST /api/video/generate-launch",
    description: "Generate ThreadWizard launch trailer using Claude",
    auth: "Bearer token required",
  });
}
