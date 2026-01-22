"use client";

import { Camera, Image, Barcode } from "lucide-react";

export default function ScanPage() {
  return (
    <div className="px-5 py-6">
      {/* 헤더 */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">스캔</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">제품의 성분을 빠르게 확인하세요</p>
      </header>

      {/* 스캔 옵션 */}
      <div className="space-y-3">
        {/* 바코드 스캔 */}
        <button className="card w-full flex items-center gap-4 text-left hover:shadow-elegant transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 rounded-2xl flex items-center justify-center">
            <Barcode size={28} className="text-teal-600 dark:text-teal-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">바코드 스캔</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">제품 바코드를 스캔하면 전체 성분을 확인할 수 있어요</p>
          </div>
        </button>

        {/* 성분표 촬영 */}
        <button className="card w-full flex items-center gap-4 text-left hover:shadow-elegant transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl flex items-center justify-center">
            <Camera size={28} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">성분표 촬영</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">성분표를 찍으면 자동으로 성분을 인식해요</p>
          </div>
        </button>

        {/* 이미지 업로드 */}
        <button className="card w-full flex items-center gap-4 text-left hover:shadow-elegant transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl flex items-center justify-center">
            <Image size={28} className="text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">이미지 업로드</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">갤러리에서 성분표 사진을 선택하세요</p>
          </div>
        </button>
      </div>

      {/* 안내 */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5">
        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">📷 스캔 팁</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-teal-500 dark:text-teal-400">•</span>
            성분표가 잘 보이도록 밝은 곳에서 촬영하세요
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 dark:text-teal-400">•</span>
            글씨가 선명하게 나오도록 초점을 맞춰주세요
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 dark:text-teal-400">•</span>
            바코드는 손상되지 않은 상태여야 인식돼요
          </li>
        </ul>
      </div>

      {/* 준비 중 안내 */}
      <div className="mt-6 text-center py-10 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30">
        <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">🚧 준비 중인 기능이에요</p>
        <p className="text-sm text-gray-400 dark:text-gray-500">곧 만나볼 수 있어요!</p>
      </div>
    </div>
  );
}
