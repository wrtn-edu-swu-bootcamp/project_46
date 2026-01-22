"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight, X, Database } from "lucide-react";
import { ingredients, searchIngredients, Ingredient } from "@/data/ingredients";

interface APIIngredient {
  INGR_KOR_NAME: string;
  INGR_ENG_NAME: string;
  CAS_NO: string;
  ORIGIN_MAJOR_KOR_NAME: string;
  INGR_SYNONYM: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Ingredient[]>(ingredients);
  const [apiResults, setApiResults] = useState<APIIngredient[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAPIData, setShowAPIData] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = ["전체", "보습", "미백", "안티에이징", "진정"];

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim() === "") {
      setResults(ingredients);
    } else {
      setResults(searchIngredients(value));
    }
  };

  const searchFromAPI = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/ingredients?keyword=${encodeURIComponent(query)}`);
      const data = await response.json();
      
      if (data.success) {
        setApiResults(data.data.items);
        setShowAPIData(true);
      }
    } catch (error) {
      console.error('API 검색 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRatingStyle = (rating: Ingredient["rating"]) => {
    switch (rating) {
      case "good":
        return "bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800";
      case "caution":
        return "bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800";
      default:
        return "bg-gray-50 text-gray-600 border border-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700";
    }
  };

  const getRatingLabel = (rating: Ingredient["rating"]) => {
    switch (rating) {
      case "good":
        return "좋음";
      case "caution":
        return "주의";
      default:
        return "보통";
    }
  };

  return (
    <div className="px-5 py-6">
      {/* 헤더 */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">성분 검색</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">궁금한 성분을 찾아보세요</p>
      </header>

      {/* 검색 바 */}
      <div className="relative mb-6">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="성분명을 입력하세요"
          className="w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl pl-12 pr-10 py-3.5 outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 shadow-sm transition-all dark:text-gray-100 dark:placeholder:text-gray-500"
        />
        {query && (
          <button 
            onClick={() => handleSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* 카테고리 필터 */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-teal-600 text-white shadow-sm" 
                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 검색 결과 */}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {query ? `"${query}" 검색 결과 ${results.length}개` : `전체 성분 ${results.length}개`}
        </p>
        
        <div className="space-y-3">
          {results.map((ing) => (
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
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">{ing.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getRatingStyle(ing.rating)}`}>
                    {getRatingLabel(ing.rating)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{ing.shortDescription}</p>
              </div>
              <ChevronRight size={20} className="text-gray-300 dark:text-gray-600 flex-shrink-0" />
            </Link>
          ))}

          {results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-2">검색 결과가 없어요</p>
              <p className="text-sm text-gray-400">다른 키워드로 검색해보세요</p>
            </div>
          )}
        </div>

        {/* 공공데이터 API 검색 버튼 */}
        {query && (
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={searchFromAPI}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-2xl py-3.5 font-medium hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors disabled:opacity-50"
            >
              <Database size={18} />
              {isLoading ? '검색 중...' : '식약처 공공데이터에서 검색'}
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              출처: 식품의약품안전처 화장품 원료성분정보
            </p>
          </div>
        )}

        {/* API 검색 결과 */}
        {showAPIData && apiResults.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Database size={16} className="text-teal-600 dark:text-teal-400" />
                식약처 데이터
              </h3>
              <button 
                onClick={() => setShowAPIData(false)}
                className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                닫기
              </button>
            </div>
            <div className="space-y-3">
              {apiResults.map((item, index) => (
                <div key={index} className="card bg-teal-50/50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-800">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100">{item.INGR_KOR_NAME}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.INGR_ENG_NAME}</p>
                    </div>
                    {item.CAS_NO && (
                      <span className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-lg text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                        CAS: {item.CAS_NO}
                      </span>
                    )}
                  </div>
                  {item.ORIGIN_MAJOR_KOR_NAME && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{item.ORIGIN_MAJOR_KOR_NAME}</p>
                  )}
                  {item.INGR_SYNONYM && (
                    <p className="text-xs text-gray-400 mt-1">별칭: {item.INGR_SYNONYM}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
