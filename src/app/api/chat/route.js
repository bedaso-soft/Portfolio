
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    let body;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request." },
        { status: 400 }
      );
    }

    const { message } = body;

    if (
      typeof message !== "string" ||
      !message.trim() ||
      message.trim().length > 1000
    ) {
      return NextResponse.json(
        { error: "Invalid message." },
        { status: 400 }
      );
    }

    const backendUrl = (
      process.env.AI_BACKEND_URL || "http://127.0.0.1:8000"
    ).replace(/\/+$/, "");

    const response = await fetch(`${backendUrl}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message.trim(),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      console.error(
        "Python backend returned:",
        response.status
      );

      return NextResponse.json(
        {
          error: "AI assistant is temporarily unavailable.",
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    if (
      !data ||
      typeof data.reply !== "string" ||
      !data.reply.trim()
    ) {
      console.error("Invalid Python backend response:", data);

      return NextResponse.json(
        { error: "Invalid response from AI backend." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: data.success ?? true,
      reply: data.reply,
      scope: data.scope,
      category: data.category,
      scope_confidence: data.scope_confidence,
      category_confidence: data.category_confidence,
    });

  } catch (error) {
    console.error("Portfolio AI error:", error);

    const isTimeout = error.name === "TimeoutError";

    return NextResponse.json(
      {
        error: isTimeout
          ? "AI assistant took too long to respond."
          : "AI assistant is temporarily unavailable.",
      },
      {
        status: isTimeout ? 504 : 503,
      }
    );
  }
}
