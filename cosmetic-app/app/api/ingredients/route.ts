import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.DATA_GO_KR_API_KEY;

// 정확한 API 엔드포인트
const API_URL = 'https://apis.data.go.kr/1471000/CsmtcsIngdCpntInfoService01/getCsmtcsIngdCpntInfoService01';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get('keyword') || '';
  const pageNo = searchParams.get('pageNo') || '1';
  const numOfRows = searchParams.get('numOfRows') || '10';

  console.log('=== API 디버그 ===');
  console.log('API_KEY 존재:', !!API_KEY);
  console.log('API_KEY 앞 10자:', API_KEY?.substring(0, 10));
  console.log('keyword:', keyword);

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

    const url = `${API_URL}?${params.toString()}`;
    console.log('API 요청 URL:', url);

    const response = await fetch(url);
    const responseText = await response.text();
    console.log('API 응답 상태:', response.status);
    console.log('API 응답 내용:', responseText.substring(0, 500));

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data = JSON.parse(responseText);
    
    // data.go.kr API 응답 구조 확인
    if (data.header?.resultCode && data.header.resultCode !== '00') {
      throw new Error(`API 오류: ${data.header.resultMsg}`);
    }

    // 응답 구조 처리
    const items = data.body?.items?.item || data.body?.items || [];
    const totalCount = data.body?.totalCount || 0;

    console.log('API 성공! 아이템 수:', Array.isArray(items) ? items.length : 1);

    return NextResponse.json({
      success: true,
      data: {
        items: Array.isArray(items) ? items : [items],
        totalCount,
        isExample: false
      }
    });
  } catch (error: any) {
    console.error('API 호출 오류:', error.message);
  }

  // 모든 엔드포인트 실패
  console.error('모든 API 엔드포인트 실패');
  
  // API 실패 시 예시 데이터 반환
  return NextResponse.json({
    success: true,
    message: 'API 연결 실패로 예시 데이터를 반환합니다.',
    data: {
      items: [
        {
          INGR_KOR_NAME: '나이아신아마이드',
          INGR_ENG_NAME: 'NIACINAMIDE',
          CAS_NO: '98-92-0',
          ORIGIN_MAJOR_KOR_NAME: '비타민 B3의 일종으로 피부 미백, 주름 개선, 피지 조절에 효과적입니다.',
          INGR_SYNONYM: '니코틴아마이드, 비타민 B3'
        },
        {
          INGR_KOR_NAME: '히알루론산',
          INGR_ENG_NAME: 'HYALURONIC ACID',
          CAS_NO: '9004-61-9',
          ORIGIN_MAJOR_KOR_NAME: '자기 무게의 1000배 수분을 보유하는 강력한 보습 성분입니다.',
          INGR_SYNONYM: '히알루로난, 소듐히알루로네이트'
        },
        {
          INGR_KOR_NAME: '레티놀',
          INGR_ENG_NAME: 'RETINOL',
          CAS_NO: '68-26-8',
          ORIGIN_MAJOR_KOR_NAME: '비타민 A의 일종으로 주름 개선, 피부 재생에 탁월합니다.',
          INGR_SYNONYM: '비타민 A, 레틴올'
        },
        {
          INGR_KOR_NAME: '아스코르빈산',
          INGR_ENG_NAME: 'ASCORBIC ACID',
          CAS_NO: '50-81-7',
          ORIGIN_MAJOR_KOR_NAME: '비타민 C로 알려진 항산화 성분으로 미백, 콜라겐 합성 촉진에 효과적입니다.',
          INGR_SYNONYM: '비타민 C, 순수 비타민C'
        },
        {
          INGR_KOR_NAME: '살리실산',
          INGR_ENG_NAME: 'SALICYLIC ACID',
          CAS_NO: '69-72-7',
          ORIGIN_MAJOR_KOR_NAME: 'BHA 성분으로 각질 제거, 모공 관리, 여드름 케어에 사용됩니다.',
          INGR_SYNONYM: 'BHA, 베타하이드록시산'
        },
      ],
      totalCount: 5,
      isExample: true
    }
  });
}
