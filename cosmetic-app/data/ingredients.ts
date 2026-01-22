export interface Ingredient {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  rating: "good" | "normal" | "caution";
  shortDescription: string;
  description: string;
  benefits: string[];
  whenToUse: string;
  skinTypes: string[];
  goodWith: string[];
  avoidWith: string[];
  tips: string[];
}

export const ingredients: Ingredient[] = [
  {
    id: "pdrn",
    name: "PDRN",
    nameEn: "Polydeoxyribonucleotide",
    category: "재생/안티에이징",
    rating: "good",
    shortDescription: "연어에서 추출한 피부 재생 핫템",
    description: "연어 DNA에서 추출한 성분으로, 피부 세포 재생과 상처 치유를 촉진해요. 피부과 시술에서도 많이 사용되는 프리미엄 성분이에요.",
    benefits: [
      "피부 재생 촉진",
      "상처 치유 효과",
      "피부 탄력 개선",
      "염증 완화",
      "콜라겐 합성 촉진"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능. 시술 후 진정 케어에 특히 좋아요.",
    skinTypes: ["모든 피부", "민감성"],
    goodWith: ["히알루론산", "펩타이드", "EGF"],
    avoidWith: [],
    tips: [
      "레이저 시술 후 사용하면 회복이 빨라져요",
      "꾸준히 사용해야 효과를 볼 수 있어요",
      "연어 알레르기가 있다면 패치테스트 먼저!"
    ]
  },
  {
    id: "peptide",
    name: "펩타이드",
    nameEn: "Peptide",
    category: "안티에이징",
    rating: "good",
    shortDescription: "주름 개선의 스마트한 선택",
    description: "아미노산이 결합된 작은 단백질 조각으로, 콜라겐 생성을 촉진하고 피부에 신호를 보내 탄력을 개선해요.",
    benefits: [
      "콜라겐 생성 촉진",
      "주름 개선",
      "피부 탄력 강화",
      "피부 장벽 강화"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능해요. 레티놀보다 순해서 입문용으로 좋아요.",
    skinTypes: ["모든 피부"],
    goodWith: ["히알루론산", "나이아신아마이드", "비타민C"],
    avoidWith: [],
    tips: [
      "구리 펩타이드는 비타민C와 같이 쓰지 마세요",
      "마트리킨, 아르지렐린 등 종류가 다양해요",
      "꾸준히 써야 효과가 나타나요"
    ]
  },
  {
    id: "centella",
    name: "센텔라아시아티카",
    nameEn: "Centella Asiatica",
    category: "진정/재생",
    rating: "good",
    shortDescription: "병풀 추출물, 민감 피부의 구원자",
    description: "호랑이도 상처에 병풀을 문지른다는 이야기가 있을 정도로 진정/재생 효과가 뛰어난 식물 성분이에요.",
    benefits: [
      "피부 진정",
      "상처 치유 촉진",
      "콜라겐 합성",
      "항산화",
      "피부 장벽 강화"
    ],
    whenToUse: "아침, 저녁 언제든. 피부가 예민할 때 특히 좋아요.",
    skinTypes: ["민감성", "트러블성", "모든 피부"],
    goodWith: ["히알루론산", "나이아신아마이드", "판테놀"],
    avoidWith: [],
    tips: [
      "CICA = 센텔라아시아티카예요",
      "마데카소사이드, 아시아티코사이드가 핵심 성분",
      "여드름 자국 관리에도 도움돼요"
    ]
  },
  {
    id: "aha-bha",
    name: "AHA/BHA",
    nameEn: "Alpha/Beta Hydroxy Acid",
    category: "각질케어",
    rating: "caution",
    shortDescription: "묵은 각질 정리의 필수템",
    description: "AHA(글리콜산, 락틱산)는 수용성으로 피부 표면을, BHA(살리실산)는 지용성으로 모공 속까지 케어해요.",
    benefits: [
      "각질 제거",
      "모공 청소 (BHA)",
      "피부결 정돈",
      "톤 개선",
      "여드름 예방"
    ],
    whenToUse: "저녁에 사용하고, 다음날 자외선 차단제 필수!",
    skinTypes: ["지성", "복합성"],
    goodWith: ["나이아신아마이드", "히알루론산"],
    avoidWith: ["레티놀", "비타민C", "다른 산성분"],
    tips: [
      "처음엔 저농도부터 주 1-2회 시작",
      "민감성 피부는 PHA를 추천해요",
      "BHA는 블랙헤드/화이트헤드에 효과적"
    ]
  },
  {
    id: "niacinamide",
    name: "나이아신아마이드",
    nameEn: "Niacinamide",
    category: "미백/보습",
    rating: "good",
    shortDescription: "피부 톤을 밝게, 모공 케어까지",
    description: "비타민 B3의 일종으로, 피부 장벽을 강화하고 색소 침착을 개선하는 만능 성분이에요.",
    benefits: [
      "피부 톤 개선 및 미백",
      "피지 조절로 모공 케어",
      "피부 장벽 강화",
      "주름 개선"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능. 자외선 차단제와 함께 사용하면 더 효과적이에요.",
    skinTypes: ["지성", "복합성", "민감성"],
    goodWith: ["히알루론산", "비타민C", "레티놀"],
    avoidWith: [],
    tips: [
      "처음 사용 시 2-5% 농도부터 시작하세요",
      "10% 이상 고농도는 민감성 피부에 자극이 될 수 있어요"
    ]
  },
  {
    id: "hyaluronic-acid",
    name: "히알루론산",
    nameEn: "Hyaluronic Acid",
    category: "보습",
    rating: "good",
    shortDescription: "자기 무게의 1000배 수분을 끌어당기는 보습왕",
    description: "피부에 원래 존재하는 성분으로, 강력한 보습력을 가지고 있어요. 촉촉하고 탱탱한 피부를 만들어줘요.",
    benefits: [
      "강력한 보습 효과",
      "피부 탄력 개선",
      "잔주름 완화",
      "피부 진정"
    ],
    whenToUse: "세안 직후, 피부가 촉촉할 때 바르면 효과가 더 좋아요.",
    skinTypes: ["모든 피부"],
    goodWith: ["나이아신아마이드", "비타민C", "세라마이드"],
    avoidWith: [],
    tips: [
      "건조한 환경에서는 오히려 피부 수분을 빼앗을 수 있으니 위에 오일이나 크림을 덧발라주세요",
      "저분자 히알루론산은 피부 깊숙이, 고분자는 표면에 작용해요"
    ]
  },
  {
    id: "retinol",
    name: "레티놀",
    nameEn: "Retinol",
    category: "안티에이징",
    rating: "caution",
    shortDescription: "주름 개선의 끝판왕, 하지만 주의가 필요해요",
    description: "비타민A 유도체로, 피부 세포 재생을 촉진하고 콜라겐 생성을 도와요. 효과가 강력한 만큼 사용법이 중요해요.",
    benefits: [
      "주름 개선",
      "피부 탄력 증가",
      "색소 침착 개선",
      "모공 축소"
    ],
    whenToUse: "저녁에만 사용하세요. 자외선에 민감해져서 낮에 쓰면 안 돼요.",
    skinTypes: ["중성", "지성"],
    goodWith: ["히알루론산", "나이아신아마이드"],
    avoidWith: ["비타민C", "AHA/BHA", "벤조일퍼옥사이드"],
    tips: [
      "처음엔 주 1-2회부터 시작해서 천천히 늘려가세요",
      "각질이 일어날 수 있어요 - 정상적인 반응이에요",
      "임산부는 사용하지 마세요"
    ]
  },
  {
    id: "vitamin-c",
    name: "비타민C",
    nameEn: "Vitamin C (Ascorbic Acid)",
    category: "미백/항산화",
    rating: "good",
    shortDescription: "밝고 투명한 피부를 위한 항산화 성분",
    description: "강력한 항산화 작용으로 피부를 자외선과 환경 오염으로부터 보호하고, 콜라겐 합성을 도와요.",
    benefits: [
      "피부 톤 개선",
      "자외선 손상 방어",
      "콜라겐 생성 촉진",
      "색소 침착 완화"
    ],
    whenToUse: "아침에 자외선 차단제 전에 사용하면 자외선 방어 효과가 높아져요.",
    skinTypes: ["모든 피부"],
    goodWith: ["비타민E", "히알루론산", "나이아신아마이드"],
    avoidWith: ["레티놀", "AHA/BHA"],
    tips: [
      "산화되기 쉬우니 갈색으로 변하면 사용하지 마세요",
      "민감한 피부는 유도체 형태(MAP, SAP)를 추천해요"
    ]
  },
  {
    id: "ceramide",
    name: "세라마이드",
    nameEn: "Ceramide",
    category: "보습/장벽강화",
    rating: "good",
    shortDescription: "피부 장벽을 튼튼하게 지켜주는 벽돌",
    description: "피부 장벽의 50%를 구성하는 성분으로, 수분 증발을 막고 외부 자극으로부터 피부를 보호해요.",
    benefits: [
      "피부 장벽 강화",
      "수분 손실 방지",
      "민감성 피부 진정",
      "건조함 개선"
    ],
    whenToUse: "아침, 저녁 언제든 사용 가능해요. 특히 건조한 계절에 필수!",
    skinTypes: ["건성", "민감성", "모든 피부"],
    goodWith: ["콜레스테롤", "지방산", "히알루론산"],
    avoidWith: [],
    tips: [
      "세라마이드 + 콜레스테롤 + 지방산이 3:1:1 비율로 들어간 제품이 가장 효과적이에요",
      "장벽이 손상된 피부에 특히 좋아요"
    ]
  },
  {
    id: "panthenol",
    name: "판테놀",
    nameEn: "Panthenol (Vitamin B5)",
    category: "보습/진정",
    rating: "good",
    shortDescription: "자극받은 피부를 달래주는 비타민 B5",
    description: "프로비타민 B5로, 피부에 흡수되면 판토텐산으로 전환되어 보습과 진정 효과를 제공해요.",
    benefits: [
      "피부 진정",
      "보습 효과",
      "상처 치유 촉진",
      "피부 장벽 강화"
    ],
    whenToUse: "아침, 저녁 언제든. 자극받은 피부에 특히 좋아요.",
    skinTypes: ["민감성", "건성", "모든 피부"],
    goodWith: ["히알루론산", "센텔라", "세라마이드"],
    avoidWith: [],
    tips: [
      "시술 후 진정 케어에 좋아요",
      "덱스판테놀이 더 효과적인 형태예요"
    ]
  },
  {
    id: "arbutin",
    name: "알부틴",
    nameEn: "Arbutin",
    category: "미백",
    rating: "good",
    shortDescription: "하이드로퀴논의 순한 대안",
    description: "베어베리에서 추출한 성분으로, 멜라닌 생성을 억제해 피부 톤을 밝게 해줘요. 하이드로퀴논보다 순해요.",
    benefits: [
      "멜라닌 생성 억제",
      "기미/잡티 완화",
      "피부 톤 균일화",
      "색소 침착 예방"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능. 자외선 차단제와 함께 사용하면 효과 UP!",
    skinTypes: ["모든 피부"],
    goodWith: ["비타민C", "나이아신아마이드", "AHA"],
    avoidWith: [],
    tips: [
      "알파 알부틴이 베타 알부틴보다 효과적이에요",
      "기미 예방에도 좋아요"
    ]
  },
  {
    id: "glutathione",
    name: "글루타치온",
    nameEn: "Glutathione",
    category: "미백/항산화",
    rating: "good",
    shortDescription: "백옥 피부를 위한 마스터 항산화제",
    description: "체내에서 생성되는 강력한 항산화제로, 멜라닌 생성을 억제하고 피부를 밝게 해줘요.",
    benefits: [
      "강력한 항산화",
      "피부 톤 개선",
      "멜라닌 억제",
      "해독 효과"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능해요.",
    skinTypes: ["모든 피부"],
    goodWith: ["비타민C", "나이아신아마이드"],
    avoidWith: [],
    tips: [
      "경구 섭취보다 바르는 게 피부에 직접적이에요",
      "환원형 글루타치온이 더 효과적"
    ]
  },
  {
    id: "squalane",
    name: "스쿠알란",
    nameEn: "Squalane",
    category: "보습/오일",
    rating: "good",
    shortDescription: "가볍고 흡수 빠른 식물성 오일",
    description: "사탕수수나 올리브에서 추출한 오일로, 피부 자체에도 존재하는 성분이라 친화력이 뛰어나요.",
    benefits: [
      "보습막 형성",
      "수분 증발 방지",
      "부드러운 피부결",
      "피부 유연성 향상"
    ],
    whenToUse: "스킨케어 마지막 단계에 사용하세요. 오일인데 가벼워서 좋아요.",
    skinTypes: ["건성", "지성", "모든 피부"],
    goodWith: ["히알루론산", "세라마이드", "레티놀"],
    avoidWith: [],
    tips: [
      "식물성 스쿠알란이 동물성보다 안정적이에요",
      "지성 피부도 쓸 수 있는 가벼운 오일"
    ]
  },
  {
    id: "azelaic-acid",
    name: "아젤라익산",
    nameEn: "Azelaic Acid",
    category: "여드름/미백",
    rating: "good",
    shortDescription: "여드름과 색소침착 둘 다 잡는 멀티플레이어",
    description: "곡물에서 유래한 산 성분으로, 여드름 균을 억제하고 색소 침착을 개선해요. 로사시아에도 효과적!",
    benefits: [
      "여드름 균 억제",
      "색소 침착 개선",
      "피지 조절",
      "로사시아 진정",
      "각질 제거"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능. 여드름 부위에 집중적으로!",
    skinTypes: ["지성", "여드름성", "민감성"],
    goodWith: ["나이아신아마이드", "레티놀", "히알루론산"],
    avoidWith: [],
    tips: [
      "처음엔 10% 농도부터 시작하세요",
      "피부과에서 처방받는 20%는 효과가 더 강력해요",
      "여드름 자국 케어에 특히 좋아요"
    ]
  },
  {
    id: "tranexamic-acid",
    name: "트라넥사믹애시드",
    nameEn: "Tranexamic Acid",
    category: "미백",
    rating: "good",
    shortDescription: "기미 케어의 신흥 강자",
    description: "원래 지혈제로 사용되던 성분인데, 멜라닌 생성을 억제하는 효과가 발견되어 미백 성분으로 인기예요.",
    benefits: [
      "기미/색소 침착 개선",
      "멜라닌 억제",
      "피부 톤 균일화",
      "홍조 완화"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능. 꾸준히 써야 효과가 나타나요.",
    skinTypes: ["모든 피부"],
    goodWith: ["비타민C", "나이아신아마이드", "알부틴"],
    avoidWith: [],
    tips: [
      "기미에 특히 효과적이에요",
      "경구 복용과 바르는 것 병행하면 더 좋아요",
      "자외선 차단과 함께!"
    ]
  },
  {
    id: "bakuchiol",
    name: "바쿠치올",
    nameEn: "Bakuchiol",
    category: "안티에이징",
    rating: "good",
    shortDescription: "식물성 레티놀, 순하지만 강력해요",
    description: "바쿠치 식물에서 추출한 성분으로, 레티놀과 비슷한 효과를 내지만 자극이 적어요.",
    benefits: [
      "주름 개선",
      "피부 탄력",
      "색소 침착 개선",
      "콜라겐 촉진"
    ],
    whenToUse: "아침, 저녁 모두 OK! 레티놀과 달리 낮에도 써도 돼요.",
    skinTypes: ["민감성", "임산부", "모든 피부"],
    goodWith: ["레티놀", "비타민C", "나이아신아마이드"],
    avoidWith: [],
    tips: [
      "레티놀 대신 쓰기 좋아요",
      "임산부도 사용 가능!",
      "레티놀과 함께 쓰면 시너지 효과"
    ]
  },
  {
    id: "salicylic-acid",
    name: "살리실산",
    nameEn: "Salicylic Acid (BHA)",
    category: "각질/여드름",
    rating: "caution",
    shortDescription: "모공 속 피지까지 녹이는 BHA",
    description: "지용성 산 성분으로 모공 속 피지와 각질을 녹여줘요. 블랙헤드/화이트헤드 케어의 필수템!",
    benefits: [
      "모공 속 각질 제거",
      "블랙헤드 개선",
      "피지 조절",
      "여드름 예방",
      "모공 축소"
    ],
    whenToUse: "저녁에 사용하고, 자외선 차단제 필수!",
    skinTypes: ["지성", "여드름성", "복합성"],
    goodWith: ["나이아신아마이드", "히알루론산"],
    avoidWith: ["레티놀", "다른 산 성분", "비타민C"],
    tips: [
      "0.5-2% 농도가 일반적이에요",
      "민감한 피부는 주 1-2회부터",
      "T존 위주로 사용해도 좋아요"
    ]
  },
  {
    id: "egf",
    name: "EGF",
    nameEn: "Epidermal Growth Factor",
    category: "재생/안티에이징",
    rating: "good",
    shortDescription: "노벨상 수상한 피부 재생 인자",
    description: "표피성장인자로, 피부 세포 재생을 촉진하고 상처 치유를 돕는 프리미엄 성분이에요.",
    benefits: [
      "세포 재생 촉진",
      "상처 치유",
      "주름 개선",
      "피부 탄력",
      "피부결 개선"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능. 시술 후 재생 케어에 특히 좋아요.",
    skinTypes: ["모든 피부", "노화피부"],
    goodWith: ["PDRN", "펩타이드", "히알루론산"],
    avoidWith: [],
    tips: [
      "고농도일수록 효과적",
      "PDRN과 같이 쓰면 시너지!",
      "시술 후 회복에 도움돼요"
    ]
  },
  {
    id: "glycerin",
    name: "글리세린",
    nameEn: "Glycerin",
    category: "보습",
    rating: "good",
    shortDescription: "기본 중의 기본, 가성비 보습제",
    description: "거의 모든 스킨케어 제품에 들어가는 기본 보습 성분이에요. 수분을 끌어당겨 피부에 유지시켜줘요.",
    benefits: [
      "수분 공급",
      "피부 진정",
      "피부 장벽 강화",
      "부드러운 피부결"
    ],
    whenToUse: "아침, 저녁 언제든 사용 가능해요.",
    skinTypes: ["모든 피부"],
    goodWith: ["히알루론산", "세라마이드", "모든 성분"],
    avoidWith: [],
    tips: [
      "순수 글리세린은 희석해서 사용하세요",
      "대부분 제품에 이미 들어있어요"
    ]
  },
  {
    id: "tea-tree",
    name: "티트리",
    nameEn: "Tea Tree (Melaleuca)",
    category: "진정/여드름",
    rating: "good",
    shortDescription: "자연에서 온 여드름 킬러",
    description: "호주 원산지 식물에서 추출한 에센셜 오일로, 항균/항염 효과가 뛰어나 여드름 케어에 좋아요.",
    benefits: [
      "항균 작용",
      "여드름 진정",
      "피지 조절",
      "염증 완화"
    ],
    whenToUse: "트러블 부위에 스팟으로 사용하세요.",
    skinTypes: ["지성", "여드름성", "복합성"],
    goodWith: ["나이아신아마이드", "센텔라"],
    avoidWith: [],
    tips: [
      "에센셜 오일 원액은 희석해서 사용하세요",
      "민감한 피부는 패치테스트 먼저!",
      "5% 농도가 여드름에 효과적"
    ]
  }
];

export function getIngredientById(id: string): Ingredient | undefined {
  return ingredients.find(i => i.id === id);
}

export function searchIngredients(query: string): Ingredient[] {
  const lowerQuery = query.toLowerCase();
  return ingredients.filter(
    i => i.name.toLowerCase().includes(lowerQuery) || 
         i.nameEn.toLowerCase().includes(lowerQuery) ||
         i.category.includes(query) ||
         i.shortDescription.includes(query)
  );
}
