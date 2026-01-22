"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

const SKIN_TYPES = ["건성", "지성", "복합성", "중성", "민감성"];
const SKIN_CONCERNS = ["모공", "피지", "건조", "주름", "색소침착", "여드름", "홍조", "탄력"];

export default function ProfilePage() {
  const [skinType, setSkinType] = useState<string>("");
  const [concerns, setConcerns] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setSkinType(profile.skinType || "");
      setConcerns(profile.concerns || []);
    }
  }, []);

  const toggleConcern = (concern: string) => {
    setConcerns(prev => 
      prev.includes(concern) 
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify({ skinType, concerns }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="px-4 py-6 pb-24">
      <header className="flex items-center gap-4 mb-6">
        <Link href="/mypage" className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-gray-900 dark:text-gray-300" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">내 피부 프로필</h1>
      </header>

      {/* 피부 타입 */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">피부 타입</h2>
        <div className="flex flex-wrap gap-2">
          {SKIN_TYPES.map(type => (
            <button
              key={type}
              onClick={() => setSkinType(type)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                skinType === type
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:border-primary-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* 피부 고민 */}
      <section className="mb-8">
        <h2 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">피부 고민 (복수 선택)</h2>
        <div className="flex flex-wrap gap-2">
          {SKIN_CONCERNS.map(concern => (
            <button
              key={concern}
              onClick={() => toggleConcern(concern)}
              className={`px-4 py-2 rounded-full border transition-colors ${
                concerns.includes(concern)
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:border-primary-300"
              }`}
            >
              {concern}
            </button>
          ))}
        </div>
      </section>

      {/* 현재 설정 */}
      <section className="card mb-6">
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">현재 설정</h3>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">피부 타입:</span> {skinType || "선택 안 함"}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">피부 고민:</span> {concerns.length > 0 ? concerns.join(", ") : "선택 안 함"}
        </p>
      </section>

      {/* 저장 버튼 */}
      <button
        onClick={handleSave}
        className={`w-full py-4 rounded-2xl font-semibold transition-colors ${
          saved 
            ? "bg-green-500 text-white" 
            : "bg-primary-600 text-white hover:bg-primary-700"
        }`}
      >
        {saved ? (
          <span className="flex items-center justify-center gap-2">
            <Check size={20} /> 저장되었습니다!
          </span>
        ) : (
          "저장하기"
        )}
      </button>
    </div>
  );
}
