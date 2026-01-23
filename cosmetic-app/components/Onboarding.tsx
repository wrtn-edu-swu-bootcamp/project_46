"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, User, Droplets, Check } from "lucide-react";

const skinTypes = ["건성", "지성", "복합성", "중성", "민감성", "수분 부족 지성"];
const ageGroups = ["10대", "20대", "30대", "40대 이상"];
const skinConcerns = ["모공", "주름", "트러블", "색소침착", "건조함", "번들거림", "민감함", "탄력저하"];

export default function Onboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [step, setStep] = useState(1); // 1: 웰컴, 2: 프로필 설정
  const [isExiting, setIsExiting] = useState(false);
  
  // 프로필 상태
  const [nickname, setNickname] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [skinType, setSkinType] = useState("");
  const [concerns, setConcerns] = useState<string[]>([]);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (!hasVisited) {
      setShowOnboarding(true);
    }
  }, []);

  const handleNext = () => {
    setStep(2);
  };

  const toggleConcern = (concern: string) => {
    setConcerns(prev => 
      prev.includes(concern) 
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const handleComplete = () => {
    // 프로필 저장
    const profile = {
      nickname: nickname || "비회원",
      ageGroup,
      skinType,
      concerns,
    };
    localStorage.setItem("userProfile", JSON.stringify(profile));
    localStorage.setItem("hasVisitedBefore", "true");
    
    setIsExiting(true);
    setTimeout(() => {
      setShowOnboarding(false);
      // 프로필 저장 후 페이지 새로고침하여 홈 화면에 추천 성분 바로 표시
      window.location.reload();
    }, 500);
  };

  const handleSkip = () => {
    localStorage.setItem("hasVisitedBefore", "true");
    setIsExiting(true);
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
          <AnimatePresence mode="wait">
            {/* Step 1: 웰컴 화면 */}
            {step === 1 && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col items-center justify-between px-6 py-12"
              >
                <div />

                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-emerald-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <Sparkles size={40} className="text-white" />
                  </motion.div>

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

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    onClick={handleNext}
                    className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-md flex items-center gap-2 hover:bg-emerald-900 transition-colors"
                  >
                    시작하기
                    <ChevronRight size={20} />
                  </motion.button>
                </div>

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
              </motion.div>
            )}

            {/* Step 2: 프로필 설정 */}
            {step === 2 && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col px-6 py-12 overflow-y-auto"
              >
                {/* 헤더 */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <User size={32} className="text-emerald-700" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">프로필 설정</h2>
                  <p className="text-gray-500 text-sm">맞춤 추천을 위해 알려주세요</p>
                </div>

                {/* 닉네임 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    닉네임
                  </label>
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="홍길동"
                    maxLength={10}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </motion.div>

                {/* 나이대 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    나이대
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ageGroups.map((age) => (
                      <button
                        key={age}
                        onClick={() => setAgeGroup(age)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          ageGroup === age
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* 피부 타입 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Droplets size={16} className="text-emerald-600" />
                    피부 타입
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {skinTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSkinType(type)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-1 ${
                          skinType === type
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {skinType === type && <Check size={14} />}
                        {type}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* 피부 고민 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-emerald-600" />
                    피부 고민 <span className="text-gray-400 font-normal">(복수 선택)</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {skinConcerns.map((concern) => (
                      <button
                        key={concern}
                        onClick={() => toggleConcern(concern)}
                        className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                          concerns.includes(concern)
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {concern}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* 버튼 영역 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto space-y-3"
                >
                  <button
                    onClick={handleComplete}
                    className="w-full bg-emerald-800 text-white py-4 rounded-2xl font-semibold text-lg shadow-md flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
                  >
                    완료
                    <Check size={20} />
                  </button>
                  <button
                    onClick={handleSkip}
                    className="w-full text-gray-400 py-3 text-sm hover:text-gray-600 transition-colors"
                  >
                    나중에 설정할게요
                  </button>
                </motion.div>

                {/* 진행 표시 */}
                <div className="flex justify-center gap-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
