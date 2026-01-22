"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Scan, BookOpen, User } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "홈" },
  { href: "/search", icon: Search, label: "검색" },
  { href: "/scan", icon: Scan, label: "스캔" },
  { href: "/tips", icon: BookOpen, label: "팁" },
  { href: "/mypage", icon: User, label: "MY" },
];

export default function BottomNav() {
  const pathname = usePathname();

  // 온보딩, 채팅 페이지에서는 네비게이션 숨김
  if (pathname.startsWith("/onboarding") || pathname === "/chat") {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-[430px] mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
          <div className="flex justify-around items-center h-[72px] px-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/" && pathname.startsWith(item.href));
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center justify-center w-16 h-full relative group"
                >
                  <div className={`relative transition-all duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}>
                    {isActive && (
                      <div className="absolute -inset-2 bg-primary-100 dark:bg-primary-900/50 rounded-xl opacity-50" />
                    )}
                    <Icon 
                      size={22} 
                      strokeWidth={isActive ? 2.5 : 1.8}
                      className={`relative transition-colors ${
                        isActive ? "text-primary-600 dark:text-primary-400" : "text-gray-400 dark:text-gray-500"
                      }`}
                    />
                  </div>
                  <span className={`text-[10px] mt-1.5 font-semibold tracking-wide transition-colors ${
                    isActive ? "text-primary-600 dark:text-primary-400" : "text-gray-400 dark:text-gray-500"
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        {/* iPhone 홈바 영역 대응 */}
        <div className="h-safe-area-inset-bottom bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl" />
      </div>
    </nav>
  );
}
