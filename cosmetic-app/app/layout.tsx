import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import PageTransition from "@/components/PageTransition";
import Onboarding from "@/components/Onboarding";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "더마북 | Dermabook",
  description: "식약처 공공데이터 기반 화장품 성분 정보 및 AI 뷰티 상담",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Pretendard 폰트 (토스뱅크 스타일) */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <ThemeProvider>
          <Onboarding />
          <div className="app-container">
            <main className="main-content">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
