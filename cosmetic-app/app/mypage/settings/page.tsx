"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bell, Moon, Trash2, Info } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const clearAllData = () => {
    if (confirm("모든 데이터를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      localStorage.clear();
      alert("모든 데이터가 삭제되었습니다.");
      window.location.href = "/";
    }
  };

  return (
    <div className="px-4 py-6 pb-24">
      <header className="flex items-center gap-4 mb-6">
        <Link href="/mypage" className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-gray-900 dark:text-gray-300" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">설정</h1>
      </header>

      {/* 알림 설정 */}
      <section className="mb-6">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-3 px-1">알림</h2>
        <div className="card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-100">푸시 알림</span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-7 rounded-full transition-colors ${
                notifications ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mx-1 ${
                notifications ? "translate-x-5" : "translate-x-0"
              }`} />
            </button>
          </div>
        </div>
      </section>

      {/* 화면 설정 */}
      <section className="mb-6">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-3 px-1">화면</h2>
        <div className="card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-100">다크 모드</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-7 rounded-full transition-colors ${
                darkMode ? "bg-primary-600" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform mx-1 ${
                darkMode ? "translate-x-5" : "translate-x-0"
              }`} />
            </button>
          </div>
          {darkMode && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              (마이페이지에서 다크 모드를 켜세요)
            </p>
          )}
        </div>
      </section>

      {/* 데이터 관리 */}
      <section className="mb-6">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-3 px-1">데이터</h2>
        <button 
          onClick={clearAllData}
          className="card w-full flex items-center gap-3 text-red-500 dark:text-red-400"
        >
          <Trash2 size={20} />
          <span>모든 데이터 삭제</span>
        </button>
      </section>

      {/* 앱 정보 */}
      <section>
        <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-3 px-1">정보</h2>
        <div className="card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Info size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-gray-100">앱 버전</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400">0.1.0 (MVP)</span>
          </div>
          <div className="border-t dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              이 앱은 화장품 성분 정보와 화장법을 제공합니다.
              성분 정보는 식품의약품안전처 공공데이터를 활용합니다.
            </p>
          </div>
          <div className="border-t dark:border-gray-700 pt-4 text-sm text-gray-400 dark:text-gray-500">
            <p>문의: support@example.com</p>
            <p className="mt-1">© 2024 화장품 성분 사전</p>
          </div>
        </div>
      </section>
    </div>
  );
}
