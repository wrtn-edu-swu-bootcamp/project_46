"use client";

import Link from "next/link";
import { Search, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { ingredients } from "@/data/ingredients";
import { makeupTips } from "@/data/tips";

export default function Home() {
  const recommendedIngredients = ingredients.slice(0, 3);
  const recommendedTips = makeupTips.slice(0, 2);

  return (
    <div className="px-5 py-8">
      {/* 헤더 */}
      <header className="mb-8">
        <p className="text-emerald-700 dark:text-emerald-400 text-sm font-bold tracking-wide mb-2">DERMABOOK</p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3">
          오늘도 빛나는<br />피부를 위해 ✨
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          식약처 공공데이터 기반 성분 검색 · AI 뷰티 상담
        </p>
      </header>

      {/* 검색 바 */}
      <Link href="/search" className="block mb-5">
        <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-2xl px-5 py-4 shadow-soft border border-gray-100/50 dark:border-gray-800">
          <Search size={20} className="text-gray-300 dark:text-gray-600" />
          <span className="text-gray-400 dark:text-gray-500 font-medium">성분을 검색해보세요</span>
        </div>
      </Link>

      {/* AI 상담 버튼 */}
      <Link href="/chat" className="block mb-10">
        <div className="bg-white dark:bg-gray-900 rounded-2xl px-5 py-4 shadow-soft border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
              <Sparkles size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 dark:text-gray-100">AI 뷰티 상담</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">맞춤 화장법을 물어보세요</p>
            </div>
            <ArrowRight size={20} className="text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </Link>

      {/* 오늘의 팁 */}
      <section className="mb-10">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="bg-gradient-to-br from-teal-600 to-emerald-700 p-6 text-white">
            <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs font-semibold mb-4 tracking-wide">
              TODAY&apos;S TIP
            </span>
            <h2 className="text-xl font-bold mb-2">
              화장이 자꾸 뜬다면?
            </h2>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              스킨케어 후 3-5분 기다린 다음<br />
              베이스를 바르면 밀착력이 좋아져요
            </p>
            <Link 
              href="/tips/cakey-makeup-solution"
              className="inline-flex items-center gap-1 text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              자세히 보기 <ChevronRight size={16} />
            </Link>
          </div>
          {/* 장식 요소 */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
        </div>
      </section>

      {/* 인기 성분 */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="section-title">인기 성분</h2>
          <Link href="/search" className="text-sm text-primary-500 dark:text-primary-400 font-semibold flex items-center gap-1">
            더보기 <ChevronRight size={14} />
          </Link>
        </div>
        <div className="space-y-3">
          {recommendedIngredients.map((ing) => (
            <Link 
              key={ing.id} 
              href={`/ingredient/${ing.id}`}
              className="card flex items-center gap-4"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                ing.rating === "good" 
                  ? "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30" 
                  : ing.rating === "caution" 
                  ? "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30" 
                  : "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
              }`}>
                {ing.rating === "good" ? "✨" : ing.rating === "caution" ? "⚠️" : "•"}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{ing.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-0.5">{ing.shortDescription}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                <ChevronRight size={16} className="text-gray-400 dark:text-gray-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 화장법 팁 */}
      <section className="pb-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="section-title">화장법 팁</h2>
          <Link href="/tips" className="text-sm text-primary-500 dark:text-primary-400 font-semibold flex items-center gap-1">
            더보기 <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {recommendedTips.map((tip) => (
            <Link 
              key={tip.id} 
              href={`/tips/${tip.id}`}
              className="group"
            >
              <div className="card h-full group-hover:shadow-elegant transition-all">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center text-2xl mb-3">
                  {tip.thumbnail}
                </div>
                <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 leading-snug">
                  {tip.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {tip.skinTypes.slice(0, 2).map((type) => (
                    <span 
                      key={type} 
                      className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2.5 py-1 rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
