import { NextResponse } from "next/server";
import OpenAI from "openai";

/**
 * IMPORTANT:
 * - force-dynamic prevents Next.js from executing this route at build time
 * - OpenAI client is created ONLY at runtime
 */
export const dynamic = "force-dynamic";

/**
 * Create OpenAI client at runtime only
 */
function getOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing");
  }

  return new OpenAI({
    apiKey,
  });
}

export async function POST(req: Request) {
  try {
    const { height, weight, occasion, lang } = await req.json();

    if (!height || !weight || !occasion) {
      return NextResponse.json(
        { result: "Missing data" },
        { status: 400 }
      );
    }

    const prompt = `
User details:
- Height: ${height}
- Weight: ${weight}
- Occasion: ${occasion}
Language: ${lang || "en"}

Give professional fashion styling advice.
`;

    const client = getOpenAI();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error("Stylist API error:", error);

    return NextResponse.json(
      { result: "Server error" },
      { status: 500 }
    );
  }
}