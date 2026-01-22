"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  User, 
  Heart, 
  AlertTriangle, 
  Settings, 
  ChevronRight,
  Droplets,
  Sparkles,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function MyPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState({
    name: "뷰티러버",
    skinType: "미설정",
    concerns: [] as string[],
  });

  useEffect(() => {
    setMounted(true);
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setUser(prev => ({
        ...prev,
        name: profile.nickname || "뷰티러버",
        skinType: profile.skinType || "미설정",
        concerns: profile.concerns || [],
      }));
    }
  }, []);

  const menuItems = [
    {
      icon: User,
      label: "내 피부 프로필",
      href: "/mypage/profile",
      description: "피부 타입과 고민을 설정하세요",
      color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
    },
    {
      icon: Heart,
      label: "즐겨찾기",
      href: "/mypage/favorites",
      description: "저장한 성분과 화장법",
      color: "bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
    },
    {
      icon: AlertTriangle,
      label: "피해야 할 성분",
      href: "/mypage/avoid-list",
      description: "나에게 맞지 않는 성분 관리",
      color: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
    },
    {
      icon: Settings,
      label: "설정",
      href: "/mypage/settings",
      description: "알림, 계정 설정",
      color: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
    },
  ];

  return (
    <div className="px-5 py-6">
      {/* 헤더 */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">마이페이지</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">내 뷰티 정보를 관리하세요</p>
        </div>
        {/* 다크모드 토글 */}
        <button
          onClick={toggleTheme}
          className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors"
          aria-label="테마 변경"
        >
          {theme === "dark" ? (
            <Sun size={22} className="text-amber-400" />
          ) : (
            <Moon size={22} className="text-gray-600" />
          )}
        </button>
      </header>

      {/* 프로필 카드 */}
      <div className="card mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/30">
            <Droplets size={32} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{user.name}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">오늘도 빛나는 하루 되세요 ✨</p>
          </div>
        </div>

        {/* 피부 정보 */}
        <div className="flex gap-3">
          <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-1">
              <Droplets size={14} />
              피부 타입
            </div>
            <p className="font-bold text-gray-900 dark:text-gray-100">{user.skinType}</p>
          </div>
          <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-1">
              <Sparkles size={14} />
              피부 고민
            </div>
            <p className="font-bold text-gray-900 dark:text-gray-100">
              {user.concerns.length > 0 ? user.concerns.join(", ") : "미설정"}
            </p>
          </div>
        </div>
      </div>

      {/* 메뉴 */}
      <div className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.href}
              href={item.href}
              className="card flex items-center gap-4"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}>
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{item.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
              <ChevronRight size={20} className="text-gray-300 dark:text-gray-600" />
            </Link>
          );
        })}
      </div>

      {/* 앱 정보 */}
      <div className="mt-8 text-center text-sm text-gray-400 dark:text-gray-500">
        <p className="font-medium text-emerald-700 dark:text-emerald-400">더마북 Dermabook</p>
        <p className="mt-1">Made by 박소은 (isomerown@naver.com)</p>
        <p className="mt-0.5">버전 0.1.0</p>
      </div>
    </div>
  );
}
