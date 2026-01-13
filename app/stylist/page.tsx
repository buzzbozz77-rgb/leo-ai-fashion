"use client";

import { useState } from "react";

const TEXT = {
  ar: {
    title: "LEO AI Stylist",
    height: "الطول (سم)",
    weight: "الوزن (كغ)",
    occasionPlaceholder: "اختر المناسبة",
    casual: "كاجوال",
    formal: "رسمي",
    evening: "مسائي",
    button: "اقترح LEO",
    loading: "LEO يفكّر...",
    resultTitle: "اقتراح LEO",
    switch: "English",
  },
  en: {
    title: "LEO AI Stylist",
    height: "Height (cm)",
    weight: "Weight (kg)",
    occasionPlaceholder: "Select occasion",
    casual: "Casual",
    formal: "Formal",
    evening: "Evening",
    button: "Ask LEO",
    loading: "LEO is thinking...",
    resultTitle: "LEO Recommendation",
    switch: "عربي",
  },
};

export default function StylistPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = TEXT[lang];

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [occasion, setOccasion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!height || !weight || !occasion) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/stylist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ height, weight, occasion, lang }),
      });

      const data = await res.json();
      setResult(data.result || "—");
    } catch {
      setResult("Error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white px-4"
    >
      <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">

        {/* Language Switch */}
        <button
          onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          className="absolute top-4 right-4 text-xs border border-white/20 px-3 py-1 rounded-full"
        >
          {t.switch}
        </button>

        <h1 className="text-2xl font-bold text-center mb-6">
          {t.title}
        </h1>

        <div className="space-y-4">
          <input
            type="number"
            placeholder={t.height}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20"
          />

          <input
            type="number"
            placeholder={t.weight}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20"
          />

          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20"
          >
            <option value="">{t.occasionPlaceholder}</option>
            <option value="casual">{t.casual}</option>
            <option value="formal">{t.formal}</option>
            <option value="evening">{t.evening}</option>
          </select>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
          >
            {loading ? t.loading : t.button}
          </button>
        </div>

        {result && (
          <div className="mt-6 bg-black/40 border border-white/10 rounded-xl p-4">
            <h2 className="font-bold mb-2 text-yellow-400">
              {t.resultTitle}
            </h2>
            <pre className="whitespace-pre-line text-sm leading-relaxed">
              {result}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
}