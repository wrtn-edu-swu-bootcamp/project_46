"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bookmark, Share2 } from "lucide-react";
import { getTipById } from "@/data/tips";
import { getIngredientById } from "@/data/ingredients";

export default function TipDetailPage() {
  const params = useParams();
  const tip = getTipById(params.id as string);

  if (!tip) {
    return (
      <div className="px-4 py-6 text-center dark:text-gray-100">
        <p>화장법을 찾을 수 없어요</p>
        <Link href="/tips" className="text-primary-600 dark:text-primary-400 mt-2 inline-block">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const relatedIngredients = tip.relatedIngredients
    .map(id => getIngredientById(id))
    .filter(Boolean);

  return (
    <div className="pb-8">
      {/* 헤더 */}
      <header className="sticky top-0 bg-white dark:bg-gray-900 z-10 px-4 py-4 flex items-center gap-4 border-b border-gray-100 dark:border-gray-800">
        <Link href="/tips" className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-gray-900 dark:text-gray-300" />
        </Link>
        <h1 className="font-semibold flex-1 truncate text-gray-900 dark:text-gray-100">{tip.title}</h1>
        <button className="p-2">
          <Bookmark size={24} className="text-gray-400 dark:text-gray-500" />
        </button>
        <button className="p-2 -mr-2">
          <Share2 size={24} className="text-gray-400 dark:text-gray-500" />
        </button>
      </header>

      <div className="px-4 py-6">
        {/* 썸네일 & 제목 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-4 text-5xl">
            {tip.thumbnail}
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{tip.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-3">{tip.shortDescription}</p>
          <div className="flex justify-center gap-2">
            {tip.skinTypes.map((type) => (
              <span 
                key={type}
                className="tag bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* 단계별 가이드 */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">단계별 가이드</h3>
          <div className="space-y-4">
            {tip.steps.map((step) => (
              <div key={step.order} className="card">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.order}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    {step.tip && (
                      <div className="mt-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                        <p className="text-sm text-amber-800 dark:text-amber-300">
                          💡 {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 관련 성분 */}
        {relatedIngredients.length > 0 && (
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">관련 성분</h3>
            <div className="space-y-3">
              {relatedIngredients.map((ing) => ing && (
                <Link 
                  key={ing.id}
                  href={`/ingredient/${ing.id}`}
                  className="card flex items-center gap-3"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    ing.rating === "good" ? "bg-green-100 dark:bg-green-900/30" :
                    ing.rating === "caution" ? "bg-yellow-100 dark:bg-yellow-900/30" : "bg-gray-100 dark:bg-gray-800"
                  }`}>
                    <span className="text-xl">
                      {ing.rating === "good" ? "✨" : ing.rating === "caution" ? "⚠️" : "•"}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{ing.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{ing.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
