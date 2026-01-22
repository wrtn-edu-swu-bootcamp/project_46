import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "성분을 알면 화장법이 보인다",
  description: "피부 타입별 맞춤 성분 사전",
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
