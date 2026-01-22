"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Plus, X } from "lucide-react";


interface AvoidItem {
  id: string;
  name: string;
  reason: string;
}

const COMMON_AVOID = [
  { name: "향료", reason: "알레르기/자극 유발 가능" },
  { name: "알코올", reason: "건조함 유발" },
  { name: "파라벤", reason: "방부제 성분" },
  { name: "미네랄 오일", reason: "모공 막힘 가능" },
  { name: "황산염(SLS)", reason: "자극 유발 가능" },
];

// 피부 타입별 주의 성분
const SKIN_TYPE_AVOID: Record<string, { name: string; reason: string }[]> = {
  "건성": [
    { name: "알코올", reason: "피부 건조 악화" },
    { name: "레티놀 (고농도)", reason: "건조함과 각질 유발 가능" },
    { name: "살리실산", reason: "건조함 유발 가능" },
    { name: "벤조일퍼옥사이드", reason: "심한 건조 유발" },
  ],
  "지성": [
    { name: "미네랄 오일", reason: "모공 막힘, 피지 증가" },
    { name: "코코넛 오일", reason: "모공 막힘 가능" },
    { name: "라놀린", reason: "모공 막힘 가능" },
    { name: "이소프로필 미리스테이트", reason: "여드름 유발 가능" },
  ],
  "민감성": [
    { name: "향료", reason: "자극 및 알레르기 유발" },
    { name: "알코올", reason: "자극 유발" },
    { name: "에센셜 오일", reason: "자극 가능성" },
    { name: "레티놀", reason: "자극 유발 가능" },
    { name: "AHA/BHA (고농도)", reason: "자극 유발" },
  ],
  "복합성": [
    { name: "미네랄 오일", reason: "T존 모공 막힘" },
    { name: "알코올 (다량)", reason: "건조 부위 자극" },
    { name: "코코넛 오일", reason: "T존 트러블 유발" },
  ],
  "중성": [
    { name: "향료", reason: "알레르기 가능성" },
    { name: "파라벤", reason: "민감 반응 가능" },
  ],
};

export default function AvoidListPage() {
  const [avoidList, setAvoidList] = useState<AvoidItem[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newReason, setNewReason] = useState("");
  const [userSkinType, setUserSkinType] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("avoidList");
    if (saved) {
      setAvoidList(JSON.parse(saved));
    }
    
    // 사용자 피부 타입 불러오기
    const profile = localStorage.getItem("userProfile");
    if (profile) {
      const parsed = JSON.parse(profile);
      setUserSkinType(parsed.skinType || "");
    }
  }, []);

  const recommendedAvoid = userSkinType ? SKIN_TYPE_AVOID[userSkinType] || [] : [];

  const addItem = (name: string, reason: string) => {
    if (!name.trim()) return;
    const newItem: AvoidItem = {
      id: Date.now().toString(),
      name: name.trim(),
      reason: reason.trim() || "사용자 지정",
    };
    const updated = [...avoidList, newItem];
    setAvoidList(updated);
    localStorage.setItem("avoidList", JSON.stringify(updated));
    setNewName("");
    setNewReason("");
    setShowAdd(false);
  };

  const removeItem = (id: string) => {
    const updated = avoidList.filter(item => item.id !== id);
    setAvoidList(updated);
    localStorage.setItem("avoidList", JSON.stringify(updated));
  };

  const addCommonItem = (item: { name: string; reason: string }) => {
    if (avoidList.some(a => a.name === item.name)) return;
    addItem(item.name, item.reason);
  };

  return (
    <div className="px-4 py-6 pb-24">
      <header className="flex items-center gap-4 mb-6">
        <Link href="/mypage" className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-gray-900 dark:text-gray-300" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">피해야 할 성분</h1>
      </header>

      {/* 내 목록 */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">내 회피 성분</h2>
          <button 
            onClick={() => setShowAdd(true)}
            className="text-primary-600 dark:text-primary-400 text-sm font-medium flex items-center gap-1"
          >
            <Plus size={16} /> 추가
          </button>
        </div>

        {avoidList.length === 0 ? (
          <div className="card text-center py-8 text-gray-500 dark:text-gray-400">
            <AlertTriangle size={32} className="mx-auto mb-2 opacity-30" />
            <p>등록된 성분이 없어요</p>
            <p className="text-sm">아래에서 자주 피하는 성분을 추가해보세요</p>
          </div>
        ) : (
          <div className="space-y-2">
            {avoidList.map(item => (
              <div key={item.id} className="card flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                  <AlertTriangle size={18} className="text-red-500 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.reason}</p>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 피부 타입별 추천 */}
      {userSkinType && recommendedAvoid.length > 0 && (
        <section className="mb-8">
          <h2 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
            {userSkinType} 피부라면 주의하세요
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            회원님의 피부 타입에 맞는 추천이에요
          </p>
          <div className="space-y-2">
            {recommendedAvoid.map(item => {
              const isAdded = avoidList.some(a => a.name === item.name);
              return (
                <div 
                  key={item.name} 
                  className="card flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-lg">⚠️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.reason}</p>
                  </div>
                  <button
                    onClick={() => addCommonItem(item)}
                    disabled={isAdded}
                    className={`px-3 py-1.5 rounded-full text-sm ${
                      isAdded
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-400"
                        : "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                    }`}
                  >
                    {isAdded ? "추가됨" : "+ 추가"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 피부 타입 미설정 안내 */}
      {!userSkinType && (
        <section className="mb-8">
          <div className="card bg-gray-50 dark:bg-gray-800/50 text-center py-6">
            <p className="text-gray-600 dark:text-gray-300 mb-2">피부 타입을 설정하면</p>
            <p className="text-gray-600 dark:text-gray-300 mb-3">맞춤 성분 추천을 받을 수 있어요!</p>
            <Link 
              href="/mypage/profile"
              className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-sm"
            >
              피부 타입 설정하기
            </Link>
          </div>
        </section>
      )}

      {/* 자주 피하는 성분 */}
      <section>
        <h2 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">일반적으로 주의할 성분</h2>
        <div className="flex flex-wrap gap-2">
          {COMMON_AVOID.map(item => {
            const isAdded = avoidList.some(a => a.name === item.name);
            return (
              <button
                key={item.name}
                onClick={() => addCommonItem(item)}
                disabled={isAdded}
                className={`px-3 py-2 rounded-full text-sm transition-colors ${
                  isAdded
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
                    : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30"
                }`}
              >
                {isAdded ? "✓ " : "+ "}{item.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* 추가 모달 */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white dark:bg-gray-900 w-full rounded-t-3xl p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">성분 추가</h3>
            <input
              type="text"
              placeholder="성분 이름"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              className="w-full border dark:border-gray-700 rounded-xl px-4 py-3 mb-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="피하는 이유 (선택)"
              value={newReason}
              onChange={e => setNewReason(e.target.value)}
              className="w-full border dark:border-gray-700 rounded-xl px-4 py-3 mb-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
            />
            <div className="flex gap-3">
              <button 
                onClick={() => setShowAdd(false)}
                className="flex-1 py-3 rounded-xl border dark:border-gray-700 text-gray-900 dark:text-gray-100"
              >
                취소
              </button>
              <button 
                onClick={() => addItem(newName, newReason)}
                className="flex-1 py-3 rounded-xl bg-primary-600 text-white"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
