"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bell, Moon, Trash2, Info, RotateCcw } from "lucide-react";

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
        <div className="space-y-3">
          <button 
            onClick={() => {
              localStorage.removeItem("hasVisitedBefore");
              alert("다음에 앱을 열면 시작 화면이 표시됩니다.");
            }}
            className="card w-full flex items-center gap-3 text-gray-700 dark:text-gray-300"
          >
            <RotateCcw size={20} className="text-gray-500 dark:text-gray-400" />
            <span>시작 화면 다시 보기</span>
          </button>
          <button 
            onClick={clearAllData}
            className="card w-full flex items-center gap-3 text-red-500 dark:text-red-400"
          >
            <Trash2 size={20} />
            <span>모든 데이터 삭제</span>
          </button>
        </div>
      </section>

      {/* 앱 정보 */}
      <section className="mb-6">
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
            </p>
          </div>
          <div className="border-t dark:border-gray-700 pt-4 text-sm text-gray-400 dark:text-gray-500">
            <p>개발자: 박소은</p>
            <p className="mt-1">문의: isomerown@naver.com</p>
            <p className="mt-2">© 2026 더마북 Dermabook</p>
          </div>
        </div>
      </section>

      {/* 라이센스 및 출처 */}
      <section>
        <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-3 px-1">라이센스 및 출처</h2>
        <div className="card space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">공공데이터</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <p>• 식품의약품안전처 화장품 원료성분정보</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 pl-3">
                출처: 공공데이터포털 (data.go.kr)<br />
                이용조건: 공공누리 제1유형
              </p>
            </div>
          </div>
          <div className="border-t dark:border-gray-700 pt-4">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">오픈소스 라이센스</h3>
            <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1">
              <p>• Next.js - MIT License</p>
              <p>• React - MIT License</p>
              <p>• Tailwind CSS - MIT License</p>
              <p>• Framer Motion - MIT License</p>
              <p>• Lucide Icons - ISC License</p>
              <p>• Pretendard Font - OFL License</p>
            </div>
          </div>
          <div className="border-t dark:border-gray-700 pt-4">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">AI 서비스</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>• Groq AI (Llama 3.3 70B)</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                AI 상담 내용은 참고용이며, 정확한 진단은<br />
                전문가와 상담하세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
