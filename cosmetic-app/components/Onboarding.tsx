"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";

export default function Onboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 첫 방문인지 확인
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (!hasVisited) {
      setShowOnboarding(true);
    }
  }, []);

  const handleStart = () => {
    setIsExiting(true);
    localStorage.setItem("hasVisitedBefore", "true");
    setTimeout(() => {
      setShowOnboarding(false);
    }, 500);
  };

  if (!showOnboarding) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-white overflow-hidden"
        >
          <div className="h-full flex flex-col items-center justify-between px-6 py-12">
            {/* 상단 여백 */}
            <div />

            {/* 메인 콘텐츠 */}
            <div className="flex flex-col items-center">
              {/* 로고/아이콘 */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-emerald-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <Sparkles size={40} className="text-white" />
              </motion.div>

              {/* 앱 이름 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold text-gray-900 mb-1 text-center"
              >
                더마북
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-sm mb-8"
              >
                Dermabook
              </motion.p>

              {/* 설명 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center max-w-xs mb-8"
              >
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  화장품 성분이 궁금할 때,<br />
                  내 피부에 맞는 케어가 필요할 때.
                </p>
              </motion.div>

              {/* 기능 소개 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col gap-2 mb-10 text-sm"
              >
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center text-xs">🔍</span>
                  <span>식약처 공공데이터 기반 <b className="text-gray-700">2만+ 성분</b> 검색</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center text-xs">✨</span>
                  <span><b className="text-gray-700">AI 뷰티 상담</b>으로 맞춤 케어 추천</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center text-xs">💡</span>
                  <span>피부 타입별 <b className="text-gray-700">화장법 팁</b> 제공</span>
                </div>
              </motion.div>

              {/* 시작 버튼 */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={handleStart}
                className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-md flex items-center gap-2 hover:bg-emerald-900 transition-colors"
              >
                시작하기
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* 하단 정보 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <p className="text-gray-400 text-xs mb-1">
                Made by 박소은 · isomerown@naver.com
              </p>
              <p className="text-gray-300 text-xs">
                식품의약품안전처 공공데이터 활용
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
