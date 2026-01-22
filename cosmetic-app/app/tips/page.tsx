"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { makeupTips } from "@/data/tips";

type Category = "all" | "base" | "color" | "skincare";

export default function TipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const categories = [
    { id: "all" as Category, label: "전체" },
    { id: "base" as Category, label: "베이스" },
    { id: "color" as Category, label: "색조" },
    { id: "skincare" as Category, label: "스킨케어" },
  ];

  const filteredTips = selectedCategory === "all" 
    ? makeupTips 
    : makeupTips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="px-5 py-6">
      {/* 헤더 */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">화장법 팁</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">피부 타입에 맞는 화장법을 알아보세요</p>
      </header>

      {/* 카테고리 필터 */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? "bg-teal-600 text-white shadow-sm" 
                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 팁 목록 */}
      <div className="space-y-3">
        {filteredTips.map((tip) => (
          <Link 
            key={tip.id}
            href={`/tips/${tip.id}`}
            className="card flex gap-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/30 dark:to-teal-800/30 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
              {tip.thumbnail}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{tip.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">{tip.shortDescription}</p>
              <div className="flex flex-wrap gap-1.5">
                {tip.skinTypes.map((type) => (
                  <span 
                    key={type} 
                    className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-2.5 py-0.5 rounded-full border border-teal-100 dark:border-teal-800"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-300 dark:text-gray-600 flex-shrink-0 self-center" />
          </Link>
        ))}
      </div>

      {filteredTips.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">해당 카테고리의 팁이 없어요</p>
        </div>
      )}
    </div>
  );
}
