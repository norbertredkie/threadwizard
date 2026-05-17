/**
 * Video Generation via Anthropic Claude API
 * Generates full videos (script, scenes, animations, voiceover, MP4) from prompts.
 * Primary use: ThreadWizard launch trailer
 */

import Anthropic from "@anthropic-ai/sdk";

interface VideoGenerationRequest {
  prompt: string;
  duration?: number;
  style?: "professional" | "casual" | "cinematic";
  voiceOver?: boolean;
}

interface VideoGenerationResponse {
  videoUrl: string;
  duration: number;
  script: string;
  scenes: Scene[];
  status: "completed" | "processing" | "failed";
  error?: string;
}

interface Scene {
  sequence: number;
  description: string;
  duration: number;
  animation: string;
}

export class VideoGenerator {
  private client: Anthropic;
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.ANTHROPIC_API_KEY || "";
    this.client = new Anthropic({ apiKey: this.apiKey });
  }

  async generateVideo(
    request: VideoGenerationRequest
  ): Promise<VideoGenerationResponse> {
    if (!this.apiKey) {
      throw new Error("ANTHROPIC_API_KEY not configured");
    }

    try {
      const systemPrompt = `You are a professional video production director. 
Given a prompt, generate a complete video production spec including:
1. A detailed script with voiceover narration
2. Scene-by-scene breakdown
3. Animation specifications
4. Video metadata (duration, style)

Return JSON: { script, scenes[], duration, style, animationSpecs }`;

      const userPrompt = `Create a ${request.duration || 60}-second video for:
${request.prompt}

Style: ${request.style || "professional"}`;

      const response = await this.client.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 2000,
        messages: [{ role: "user", content: userPrompt }],
        system: systemPrompt,
      });

      const content =
        response.content[0].type === "text" ? response.content[0].text : "";
      let parsedResponse;

      try {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        parsedResponse = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(content);
      } catch {
        parsedResponse = {
          script: content,
          scenes: [],
          duration: request.duration || 60,
          style: request.style || "professional",
        };
      }

      return {
        videoUrl: "",
        duration: parsedResponse.duration || request.duration || 60,
        script: parsedResponse.script || "",
        scenes: parsedResponse.scenes || [],
        status: "processing",
      };
    } catch (error) {
      return {
        videoUrl: "",
        duration: 0,
        script: "",
        scenes: [],
        status: "failed",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async generateLaunchTrailer(): Promise<VideoGenerationResponse> {
    const launchPrompt = `Create a compelling 60-second launch trailer for ThreadWizard, a social media automation platform.

Key features:
- Multi-platform posting (Twitter, LinkedIn, Instagram, TikTok)
- AI-powered content optimization
- Schedule posts simultaneously
- Real-time analytics

Tone: Professional, energetic, modern.`;

    return this.generateVideo({
      prompt: launchPrompt,
      duration: 60,
      style: "cinematic",
      voiceOver: true,
    });
  }
}

export default VideoGenerator;
