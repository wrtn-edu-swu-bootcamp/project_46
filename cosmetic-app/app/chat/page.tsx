"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "지성 피부인데 화장이 무너져요",
  "레티놀이랑 비타민C 같이 써도 돼요?",
  "건성 피부 스킨케어 순서 알려줘",
  "모공이 넓은데 어떻게 커버해요?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.message,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        const errorMessage: Message = {
          role: "assistant",
          content: "죄송해요, 오류가 발생했어요. 다시 시도해주세요!",
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "네트워크 오류가 발생했어요. 인터넷 연결을 확인해주세요!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f7f8fa] dark:bg-gray-950">
      {/* 헤더 - 토스 스타일 */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <div className="px-5 py-4 flex items-center gap-4">
          <Link 
            href="/" 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors -ml-2"
          >
            <ArrowLeft size={22} className="text-gray-700 dark:text-gray-300" />
          </Link>
          <div className="flex-1">
            <h1 className="font-bold text-gray-900 dark:text-gray-100">AI 뷰티 상담</h1>
          </div>
        </div>
      </header>

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="px-5 py-10">
            {/* 웰컴 카드 */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm dark:shadow-none dark:border dark:border-gray-800 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                <Sparkles size={28} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                안녕하세요!
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                화장품 성분, 화장법, 스킨케어 루틴 등<br />
                무엇이든 편하게 물어보세요.
              </p>
            </div>
            
            {/* 추천 질문 */}
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 px-1">
              추천 질문
            </p>
            <div className="space-y-2">
              {SUGGESTED_QUESTIONS.map((question, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(question)}
                  className="w-full text-left px-5 py-4 bg-white dark:bg-gray-900 rounded-2xl text-[15px] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-[0.98] transition-all shadow-sm dark:shadow-none dark:border dark:border-gray-800"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-5 py-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-2 shadow-sm">
                    <Sparkles size={18} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-[20px] rounded-br-md"
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-[20px] rounded-bl-md shadow-sm dark:shadow-none"
                  }`}
                >
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            
            {/* 로딩 인디케이터 */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-2 shadow-sm">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div className="bg-white dark:bg-gray-800 px-5 py-4 rounded-[20px] rounded-bl-md shadow-sm dark:shadow-none">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* 입력 영역 - 토스 스타일 */}
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-3 pb-6">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="메시지를 입력하세요"
              className="w-full bg-gray-100 dark:bg-gray-800 rounded-full px-5 py-3.5 pr-12 outline-none focus:bg-gray-50 dark:focus:bg-gray-700 focus:ring-2 focus:ring-primary-500/30 transition-all text-[15px] placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-gray-100"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center disabled:bg-gray-200 dark:disabled:bg-gray-700 disabled:text-gray-400 dark:disabled:text-gray-500 active:scale-95 transition-all shadow-lg shadow-teal-500/25 disabled:shadow-none"
          >
            <Send size={20} className={!input.trim() ? "" : "-rotate-45"} />
          </button>
        </form>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-3">
          AI가 제공하는 정보는 참고용이에요
        </p>
      </div>
    </div>
  );
}
