"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, AlertCircle, CheckCircle, Clock, Users, Beaker, Info } from "lucide-react";
import { getIngredientById } from "@/data/ingredients";
import { makeupTips } from "@/data/tips";

export default function IngredientDetailPage() {
  const params = useParams();
  const ingredient = getIngredientById(params.id as string);

  if (!ingredient) {
    return (
      <div className="px-4 py-6 text-center dark:text-gray-100">
        <p>성분을 찾을 수 없어요</p>
        <Link href="/search" className="text-primary-600 dark:text-primary-400 mt-2 inline-block">
          검색으로 돌아가기
        </Link>
      </div>
    );
  }

  const relatedTips = makeupTips.filter(tip => 
    tip.relatedIngredients.includes(ingredient.id)
  );

  const getRatingStyle = () => {
    switch (ingredient.rating) {
      case "good":
        return { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400", label: "좋음" };
      case "caution":
        return { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-400", label: "주의 필요" };
      default:
        return { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-700 dark:text-gray-400", label: "보통" };
    }
  };

  const ratingStyle = getRatingStyle();

  return (
    <div className="pb-8">
      {/* 헤더 */}
      <header className="sticky top-0 bg-white dark:bg-gray-900 z-10 px-4 py-4 flex items-center gap-4 border-b border-gray-100 dark:border-gray-800">
        <Link href="/search" className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-gray-900 dark:text-gray-300" />
        </Link>
        <h1 className="font-semibold flex-1 text-gray-900 dark:text-gray-100">성분 정보</h1>
        <button className="p-2 -mr-2">
          <Heart size={24} className="text-gray-400 dark:text-gray-500" />
        </button>
      </header>

      <div className="px-4 py-6">
        {/* 기본 정보 */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${ratingStyle.bg} mb-4`}>
            <span className="text-4xl">
              {ingredient.rating === "good" ? "✨" : ingredient.rating === "caution" ? "⚠️" : "•"}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">{ingredient.name}</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-3">{ingredient.nameEn}</p>
          <span className={`tag ${ratingStyle.bg} ${ratingStyle.text}`}>
            {ratingStyle.label}
          </span>
        </div>

        {/* 한 줄 설명 */}
        <div className="card mb-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{ingredient.description}</p>
          {ingredient.casNo && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
              CAS No. {ingredient.casNo} · 출처: 식품의약품안전처
            </p>
          )}
        </div>

        {/* 작용 메커니즘 */}
        {ingredient.efficacy && (
          <div className="card mb-4 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border-teal-100 dark:border-teal-800">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Beaker size={18} className="text-teal-600 dark:text-teal-400" />
              어떻게 작용해요?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{ingredient.efficacy}</p>
          </div>
        )}

        {/* 효능 */}
        <div className="card mb-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <CheckCircle size={18} className="text-green-600 dark:text-green-400" />
            이런 효과가 있어요
          </h3>
          <ul className="space-y-2">
            {ingredient.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-green-500 dark:text-green-400 mt-0.5">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* 언제 사용하면 좋은지 */}
        <div className="card mb-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <Clock size={18} className="text-blue-600 dark:text-blue-400" />
            언제 사용하면 좋아요
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{ingredient.whenToUse}</p>
        </div>

        {/* 피부 타입 */}
        <div className="card mb-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <Users size={18} className="text-purple-600 dark:text-purple-400" />
            이런 피부에 추천해요
          </h3>
          <div className="flex flex-wrap gap-2">
            {ingredient.skinTypes.map((type) => (
              <span key={type} className="tag bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* 궁합 */}
        <div className="card mb-4">
          <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">성분 궁합</h3>
          
          {ingredient.goodWith.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">✅ 함께 쓰면 좋아요</p>
              <div className="flex flex-wrap gap-2">
                {ingredient.goodWith.map((item) => (
                  <span key={item} className="tag bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {ingredient.avoidWith.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">❌ 함께 쓰면 안 좋아요</p>
              <div className="flex flex-wrap gap-2">
                {ingredient.avoidWith.map((item) => (
                  <span key={item} className="tag bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 사용 팁 */}
        {ingredient.tips.length > 0 && (
          <div className="card mb-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <AlertCircle size={18} className="text-amber-600 dark:text-amber-400" />
              알아두면 좋은 팁
            </h3>
            <ul className="space-y-2">
              {ingredient.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                  <span className="text-amber-500 dark:text-amber-400 mt-0.5">💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 관련 화장법 */}
        {relatedTips.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">관련 화장법</h3>
            <div className="space-y-3">
              {relatedTips.map((tip) => (
                <Link 
                  key={tip.id}
                  href={`/tips/${tip.id}`}
                  className="card flex items-center gap-3"
                >
                  <span className="text-2xl">{tip.thumbnail}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{tip.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{tip.shortDescription}</p>
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
