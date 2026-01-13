import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
أنت LEO AI Stylist.

أعطِ الاقتراح بصيغة منظمة جدًا باستخدام العناوين التالية فقط:

1) نوع الجسم
2) الألوان المناسبة
3) القطع الأساسية
4) الحذاء
5) الإكسسوارات
6) ملاحظات ستايل احترافية

الشروط:
- استخدم نقاط (•)
- كل قسم في سطر مستقل
- لا تكتب فقرات طويلة
- أسلوب فاخر، مختصر، وذكوري
- اللغة: عربية فصحى بسيطة

المعلومات:
الطول: ${height}
الوزن: ${weight}
المناسبة: ${occasion}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 300,
    });

    return NextResponse.json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { result: "Server error" },
      { status: 500 }
    );
  }
}