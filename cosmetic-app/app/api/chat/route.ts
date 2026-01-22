import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are a Korean beauty advisor at a department store cosmetics counter.
You MUST respond ONLY in Korean (한국어). Never use any other language including English, Russian, Chinese, or Japanese.

Response rules:
1. Use polite Korean (존댓말) with expressions like "~하시는 거죠?", "~해보시는 건 어떨까요?"
2. Skip excessive empathy - go straight to practical advice
3. Keep answers concise: 3-5 sentences
4. Use only 1-2 emojis
5. Explain technical terms simply in Korean

Example response:
"지성 피부시라 화장이 무너지시는 거죠? 💄 프라이머를 T존 위주로 발라주시고, 파우더로 마무리해주시면 훨씬 오래 가실 거예요. 혹시 평소에 어떤 베이스 제품 쓰고 계세요?"

Do not give medical diagnoses. For serious skin issues, recommend seeing a dermatologist.`;

export async function POST(request: NextRequest) {
  let message = '';
  
  try {
    const body = await request.json();
    message = body.message;
    const history = body.history || [];

    const apiKey = process.env.GROQ_API_KEY;
    
    if (!apiKey) {
      throw new Error('GROQ API 키가 설정되지 않았습니다.');
    }

    // Groq API (OpenAI 호환)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...history.map((msg: { role: string; content: string }) => ({
            role: msg.role,
            content: msg.content,
          })),
          { role: 'user', content: message },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    console.log('Groq 응답:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      throw new Error(data.error?.message || `API 오류: ${response.status}`);
    }

    const text = data.choices?.[0]?.message?.content || '응답을 생성할 수 없습니다.';

    return NextResponse.json({
      success: true,
      message: text,
    });
  } catch (error: unknown) {
    const err = error as Error & { message?: string; status?: number };
    console.error('Gemini API 오류:', err.message || error);
    
    // Fallback 응답
    const fallbackResponses: Record<string, string> = {
      '지성': '지성 피부시군요! 💧 화장이 무너지는 건 유분기 때문일 가능성이 높아요. 프라이머를 T존 위주로 사용하고, 파우더로 마무리해보세요. 세팅 스프레이도 도움이 돼요!',
      '건성': '건성 피부시군요! 🧴 스킨케어 순서는 토너 → 에센스 → 세럼 → 크림이에요. 각 단계 사이에 흡수 시간을 주시고, 마지막에 페이셜 오일을 섞어 사용하면 촉촉함이 오래 유지돼요!',
      '레티놀': '레티놀과 비타민C는 함께 사용하면 자극이 될 수 있어요! ⚠️ 비타민C는 아침에, 레티놀은 저녁에 사용하는 걸 추천해요. 둘 다 처음 쓰신다면 저농도부터 천천히 시작하세요!',
      '모공': '모공 커버는 프라이머가 핵심이에요! 🎯 실리콘 베이스 프라이머를 모공 부위에 톡톡 두드려 바르고, 파운데이션은 얇게 여러 번 레이어링하세요. 세팅 파우더로 마무리하면 더 오래가요!',
    };

    const userMessage = message?.toLowerCase() || '';
    let fallbackReply = '죄송해요, AI 서버에 일시적인 문제가 있어요. 🙏 잠시 후 다시 시도해주세요!\n\n기본적인 뷰티 팁이 필요하시면 "지성 피부", "건성 피부", "레티놀", "모공" 등의 키워드로 물어봐 주세요!';
    
    for (const [keyword, response] of Object.entries(fallbackResponses)) {
      if (userMessage.includes(keyword)) {
        fallbackReply = response + '\n\n(AI 서버 연결 중 문제가 있어 기본 응답을 보여드려요)';
        break;
      }
    }

    return NextResponse.json({
      success: true,
      message: fallbackReply,
    });
  }
}
