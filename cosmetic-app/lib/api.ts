// 공공데이터포털 API 연동
// https://www.data.go.kr/data/15111774/openapi.do (화장품 원료성분정보)

const API_KEY = process.env.DATA_GO_KR_API_KEY;
const BASE_URL = 'https://apis.data.go.kr/1471000/CsmtcsIngdCpntInfoService01';

export interface IngredientFromAPI {
  INGR_ENG_NAME: string;         // 영문명
  INGR_KOR_NAME: string;         // 한글명
  CAS_NO: string;                // CAS 번호
  ORIGIN_MAJOR_KOR_NAME: string; // 기원 및 정의
  INGR_SYNONYM: string;          // 이명 (별칭)
}

export interface APIResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    items: {
      item: IngredientFromAPI[];
    };
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
}

/**
 * 화장품 성분 검색 (공공데이터포털 API)
 */
export async function searchIngredientsFromAPI(
  keyword: string,
  pageNo: number = 1,
  numOfRows: number = 10
): Promise<{ items: IngredientFromAPI[]; totalCount: number }> {
  if (!API_KEY) {
    console.warn('API 키가 설정되지 않았습니다. 예시 데이터를 반환합니다.');
    return { items: [], totalCount: 0 };
  }

  try {
    const params = new URLSearchParams({
      serviceKey: API_KEY,
      pageNo: pageNo.toString(),
      numOfRows: numOfRows.toString(),
      type: 'json',
      INGR_KOR_NAME: keyword, // 한글명으로 검색
    });

    const response = await fetch(
      `${BASE_URL}/getIngdInfo?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data: APIResponse = await response.json();
    
    if (data.header.resultCode !== '00') {
      throw new Error(`API 오류: ${data.header.resultMsg}`);
    }

    const items = data.body.items?.item || [];
    const totalCount = data.body.totalCount || 0;

    return { items: Array.isArray(items) ? items : [items], totalCount };
  } catch (error) {
    console.error('API 호출 오류:', error);
    return { items: [], totalCount: 0 };
  }
}

/**
 * 성분 상세 정보 조회
 */
export async function getIngredientDetailFromAPI(
  engName: string
): Promise<IngredientFromAPI | null> {
  if (!API_KEY) {
    return null;
  }

  try {
    const params = new URLSearchParams({
      serviceKey: API_KEY,
      pageNo: '1',
      numOfRows: '1',
      type: 'json',
      INGR_ENG_NAME: engName,
    });

    const response = await fetch(
      `${BASE_URL}/getIngdInfo?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data: APIResponse = await response.json();
    
    if (data.header.resultCode !== '00') {
      return null;
    }

    const items = data.body.items?.item;
    if (!items) return null;
    
    return Array.isArray(items) ? items[0] : items;
  } catch (error) {
    console.error('API 호출 오류:', error);
    return null;
  }
}
