"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Trash2 } from "lucide-react";

interface FavoriteItem {
  id: string;
  type: "ingredient" | "tip";
  name: string;
  description: string;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "ingredient" | "tip">("all");

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    } else {
      // 샘플 데이터
      const sampleData: FavoriteItem[] = [
        { id: "1", type: "ingredient", name: "히알루론산", description: "강력한 보습 성분" },
        { id: "2", type: "ingredient", name: "나이아신아마이드", description: "피지 조절, 미백" },
        { id: "3", type: "tip", name: "지성 피부 베이스", description: "화장 지속력 높이는 방법" },
      ];
      setFavorites(sampleData);
      localStorage.setItem("favorites", JSON.stringify(sampleData));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter(f => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const filteredFavorites = activeTab === "all" 
    ? favorites 
    : favorites.filter(f => f.type === activeTab);

  return (
    <div className="px-4 py-6 pb-24">
      <header className="flex items-center gap-4 mb-6">
        <Link href="/mypage" className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-gray-900 dark:text-gray-300" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">즐겨찾기</h1>
      </header>

      {/* 탭 */}
      <div className="flex gap-2 mb-6">
        {[
          { key: "all", label: "전체" },
          { key: "ingredient", label: "성분" },
          { key: "tip", label: "화장법" },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-primary-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 목록 */}
      {filteredFavorites.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <Heart size={48} className="mx-auto mb-4 opacity-30" />
          <p>즐겨찾기한 항목이 없어요</p>
          <p className="text-sm mt-1">성분이나 화장법을 저장해보세요!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredFavorites.map(item => (
            <div key={item.id} className="card flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                item.type === "ingredient" ? "bg-green-100 dark:bg-green-900/30" : "bg-purple-100 dark:bg-purple-900/30"
              }`}>
                <span className="text-lg">
                  {item.type === "ingredient" ? "🧪" : "💄"}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">
                  {item.type === "ingredient" ? "성분" : "화장법"}
                </p>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
              <button 
                onClick={() => removeFavorite(item.id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
