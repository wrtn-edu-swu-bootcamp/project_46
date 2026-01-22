import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.DATA_GO_KR_API_KEY;
const BASE_URL = 'https://apis.data.go.kr/1471000/CsmtcsIngdCpntInfoService01';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get('keyword') || '';
  const pageNo = searchParams.get('pageNo') || '1';
  const numOfRows = searchParams.get('numOfRows') || '10';

  // API 키가 없으면 예시 데이터 반환
  if (!API_KEY) {
    return NextResponse.json({
      success: true,
      message: 'API 키가 설정되지 않아 예시 데이터를 반환합니다.',
      data: {
        items: [
          {
            INGR_KOR_NAME: '나이아신아마이드',
            INGR_ENG_NAME: 'NIACINAMIDE',
            CAS_NO: '98-92-0',
            ORIGIN_MAJOR_KOR_NAME: '비타민 B3의 일종으로 피부 컨디셔닝제로 사용됨',
            INGR_SYNONYM: '니코틴아마이드, 비타민 B3'
          },
          {
            INGR_KOR_NAME: '히알루론산',
            INGR_ENG_NAME: 'HYALURONIC ACID',
            CAS_NO: '9004-61-9',
            ORIGIN_MAJOR_KOR_NAME: '피부 보습제로 사용되는 다당류',
            INGR_SYNONYM: '히알루로난'
          },
          {
            INGR_KOR_NAME: '레티놀',
            INGR_ENG_NAME: 'RETINOL',
            CAS_NO: '68-26-8',
            ORIGIN_MAJOR_KOR_NAME: '비타민 A의 일종으로 피부 컨디셔닝제로 사용됨',
            INGR_SYNONYM: '비타민 A'
          },
        ],
        totalCount: 3,
        isExample: true
      }
    });
  }

  try {
    const params = new URLSearchParams({
      serviceKey: API_KEY,
      pageNo,
      numOfRows,
      type: 'json',
    });

    if (keyword) {
      params.append('INGR_KOR_NAME', keyword);
    }

    const response = await fetch(
      `${BASE_URL}/getIngdInfo?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.header.resultCode !== '00') {
      throw new Error(`API 오류: ${data.header.resultMsg}`);
    }

    const items = data.body.items?.item || [];
    const totalCount = data.body.totalCount || 0;

    return NextResponse.json({
      success: true,
      data: {
        items: Array.isArray(items) ? items : [items],
        totalCount,
        isExample: false
      }
    });
  } catch (error) {
    console.error('API 호출 오류:', error);
    return NextResponse.json({
      success: false,
      error: '성분 정보를 가져오는데 실패했습니다.',
    }, { status: 500 });
  }
}
