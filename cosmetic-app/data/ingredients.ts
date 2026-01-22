export interface Ingredient {
  id: string;
  name: string;
  nameEn: string;
  casNo?: string; // 식약처 공공데이터 CAS 번호
  category: string;
  rating: "good" | "normal" | "caution";
  shortDescription: string;
  description: string;
  efficacy: string; // 주요 효능/작용 메커니즘
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
    casNo: "100403-24-5",
    category: "재생/안티에이징",
    rating: "good",
    shortDescription: "연어에서 추출한 피부 재생 핫템",
    description: "연어 DNA에서 추출한 성분으로, 피부 세포 재생과 상처 치유를 촉진해요. 피부과 시술에서도 많이 사용되는 프리미엄 성분이에요.",
    efficacy: "A2A 아데노신 수용체를 활성화하여 세포 성장 촉진, VEGF(혈관내피성장인자) 생성 유도로 피부 재생 및 상처 치유를 촉진합니다.",
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
    casNo: "다양함",
    category: "안티에이징",
    rating: "good",
    shortDescription: "주름 개선의 스마트한 선택",
    description: "아미노산이 결합된 작은 단백질 조각으로, 콜라겐 생성을 촉진하고 피부에 신호를 보내 탄력을 개선해요.",
    efficacy: "피부 세포에 신호를 보내 콜라겐/엘라스틴 합성을 촉진합니다. 종류에 따라 근육 이완(아르지렐린), 구리 전달(구리펩타이드), 성장인자 유사(마트리킨) 등 다양한 작용을 합니다.",
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
    casNo: "84696-21-9",
    category: "진정/재생",
    rating: "good",
    shortDescription: "병풀 추출물, 민감 피부의 구원자",
    description: "호랑이도 상처에 병풀을 문지른다는 이야기가 있을 정도로 진정/재생 효과가 뛰어난 식물 성분이에요.",
    efficacy: "마데카소사이드, 아시아티코사이드 등 트리테르펜 성분이 콜라겐 합성을 촉진하고 항염 작용을 합니다. 상처 치유 시 섬유아세포 증식을 돕습니다.",
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
    casNo: "79-14-1/69-72-7",
    category: "각질케어",
    rating: "caution",
    shortDescription: "묵은 각질 정리의 필수템",
    description: "AHA(글리콜산, 락틱산)는 수용성으로 피부 표면을, BHA(살리실산)는 지용성으로 모공 속까지 케어해요.",
    efficacy: "각질세포 간 결합을 느슨하게 하여 묵은 각질을 제거합니다. AHA는 수용성으로 피부 표면, BHA는 지용성으로 모공 깊숙이 침투하여 피지를 녹입니다.",
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
    casNo: "98-92-0",
    category: "미백/보습",
    rating: "good",
    shortDescription: "피부 톤을 밝게, 모공 케어까지",
    description: "비타민 B3의 일종으로, 피부 장벽을 강화하고 색소 침착을 개선하는 만능 성분이에요.",
    efficacy: "멜라노솜 전달을 억제하여 미백 효과, 세라마이드 합성을 촉진하여 장벽 강화, 피지 분비 조절로 모공 케어. NAD+ 전구체로서 세포 에너지 대사에도 관여합니다.",
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
    casNo: "9004-61-9",
    category: "보습",
    rating: "good",
    shortDescription: "자기 무게의 1000배 수분을 끌어당기는 보습왕",
    description: "피부에 원래 존재하는 성분으로, 강력한 보습력을 가지고 있어요. 촉촉하고 탱탱한 피부를 만들어줘요.",
    efficacy: "친수성 다당류로 자기 무게의 1000배 수분을 흡수/유지합니다. 고분자(1000kDa 이상)는 피부 표면 보습, 저분자(50kDa 이하)는 진피층까지 침투하여 깊은 보습을 제공합니다.",
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
    casNo: "68-26-8",
    category: "안티에이징",
    rating: "caution",
    shortDescription: "주름 개선의 끝판왕, 하지만 주의가 필요해요",
    description: "비타민A 유도체로, 피부 세포 재생을 촉진하고 콜라겐 생성을 도와요. 효과가 강력한 만큼 사용법이 중요해요.",
    efficacy: "피부 내에서 레티노산으로 전환되어 RAR/RXR 수용체에 결합, 세포 분화와 증식을 조절합니다. 콜라겐/엘라스틴 합성 촉진, 멜라닌 생성 억제, 각질세포 턴오버 촉진 효과가 있습니다.",
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
    casNo: "50-81-7",
    category: "미백/항산화",
    rating: "good",
    shortDescription: "밝고 투명한 피부를 위한 항산화 성분",
    description: "강력한 항산화 작용으로 피부를 자외선과 환경 오염으로부터 보호하고, 콜라겐 합성을 도와요.",
    efficacy: "강력한 항산화 작용으로 자유라디칼을 제거하고 산화 스트레스로부터 피부를 보호합니다. 티로시나제 억제로 멜라닌 생성을 줄이고, 콜라겐 합성에 필수적인 보조인자로 작용합니다.",
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
    casNo: "100403-19-8",
    category: "보습/장벽강화",
    rating: "good",
    shortDescription: "피부 장벽을 튼튼하게 지켜주는 벽돌",
    description: "피부 장벽의 50%를 구성하는 성분으로, 수분 증발을 막고 외부 자극으로부터 피부를 보호해요.",
    efficacy: "각질층의 세포간지질을 구성하여 '벽돌과 모르타르' 구조에서 모르타르 역할을 합니다. 경피수분손실(TEWL)을 감소시키고 외부 자극물질 침투를 차단합니다.",
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
    casNo: "81-13-0",
    category: "보습/진정",
    rating: "good",
    shortDescription: "자극받은 피부를 달래주는 비타민 B5",
    description: "프로비타민 B5로, 피부에 흡수되면 판토텐산으로 전환되어 보습과 진정 효과를 제공해요.",
    efficacy: "피부 내에서 판토텐산(비타민B5)으로 전환되어 세포 대사에 관여합니다. 지질 합성을 촉진하여 피부 장벽 회복을 돕고, 항염 작용으로 자극받은 피부를 진정시킵니다.",
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
    casNo: "497-76-7",
    category: "미백",
    rating: "good",
    shortDescription: "하이드로퀴논의 순한 대안",
    description: "베어베리에서 추출한 성분으로, 멜라닌 생성을 억제해 피부 톤을 밝게 해줘요. 하이드로퀴논보다 순해요.",
    efficacy: "티로시나제 효소 활성을 억제하여 멜라닌 합성을 차단합니다. 알파알부틴은 베타알부틴보다 10배 이상 효과적이며, 하이드로퀴논의 안정화 유도체로 자극이 적습니다.",
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
    casNo: "70-18-8",
    category: "미백/항산화",
    rating: "good",
    shortDescription: "백옥 피부를 위한 마스터 항산화제",
    description: "체내에서 생성되는 강력한 항산화제로, 멜라닌 생성을 억제하고 피부를 밝게 해줘요.",
    efficacy: "체내 '마스터 항산화제'로 불리며, 티로시나제를 억제하고 페오멜라닌(밝은색) 합성을 유도합니다. 자유라디칼 제거, 비타민C/E 재활용, 해독 작용에도 관여합니다.",
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
    casNo: "111-01-3",
    category: "보습/오일",
    rating: "good",
    shortDescription: "가볍고 흡수 빠른 식물성 오일",
    description: "사탕수수나 올리브에서 추출한 오일로, 피부 자체에도 존재하는 성분이라 친화력이 뛰어나요.",
    efficacy: "피부 피지의 10-12%를 구성하는 스쿠알렌의 안정화 버전입니다. 에몰리언트로 피부 표면에 보호막을 형성하여 수분 손실을 방지하고, 비코메도제닉하여 모공을 막지 않습니다.",
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
    casNo: "123-99-9",
    category: "여드름/미백",
    rating: "good",
    shortDescription: "여드름과 색소침착 둘 다 잡는 멀티플레이어",
    description: "곡물에서 유래한 산 성분으로, 여드름 균을 억제하고 색소 침착을 개선해요. 로사시아에도 효과적!",
    efficacy: "P. acnes 균의 단백질 합성을 억제하고, 티로시나제를 억제하여 멜라닌 생성을 줄입니다. 비정상적인 각질형성세포의 증식을 억제하고 항염 작용도 합니다.",
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
    casNo: "1197-18-8",
    category: "미백",
    rating: "good",
    shortDescription: "기미 케어의 신흥 강자",
    description: "원래 지혈제로 사용되던 성분인데, 멜라닌 생성을 억제하는 효과가 발견되어 미백 성분으로 인기예요.",
    efficacy: "플라스민 활성을 억제하여 멜라노사이트 활성화를 방지합니다. 자외선/염증으로 인한 색소 침착에 효과적이며, 기미의 주요 원인인 혈관 이상에도 작용합니다.",
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
    casNo: "10309-37-2",
    category: "안티에이징",
    rating: "good",
    shortDescription: "식물성 레티놀, 순하지만 강력해요",
    description: "바쿠치 식물에서 추출한 성분으로, 레티놀과 비슷한 효과를 내지만 자극이 적어요.",
    efficacy: "레티놀과 유사한 유전자 발현을 유도하지만 레티노이드 수용체에 결합하지 않아 자극이 적습니다. 콜라겐 I, III, IV 합성 촉진, 항염/항균 작용도 있습니다.",
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
    casNo: "69-72-7",
    category: "각질/여드름",
    rating: "caution",
    shortDescription: "모공 속 피지까지 녹이는 BHA",
    description: "지용성 산 성분으로 모공 속 피지와 각질을 녹여줘요. 블랙헤드/화이트헤드 케어의 필수템!",
    efficacy: "지용성으로 피지를 통해 모공 깊숙이 침투합니다. 데스모좀(각질세포 연결) 분해로 각질 제거, 항염/항균 작용으로 여드름 케어에 효과적입니다.",
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
    casNo: "62253-63-8",
    category: "재생/안티에이징",
    rating: "good",
    shortDescription: "노벨상 수상한 피부 재생 인자",
    description: "표피성장인자로, 피부 세포 재생을 촉진하고 상처 치유를 돕는 프리미엄 성분이에요.",
    efficacy: "EGFR(표피성장인자수용체)에 결합하여 세포 증식, 분화, 이동을 촉진합니다. 상처 치유 과정에서 상피화를 촉진하고, 콜라겐/피브로넥틴 합성을 유도합니다.",
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
    casNo: "56-81-5",
    category: "보습",
    rating: "good",
    shortDescription: "기본 중의 기본, 가성비 보습제",
    description: "거의 모든 스킨케어 제품에 들어가는 기본 보습 성분이에요. 수분을 끌어당겨 피부에 유지시켜줘요.",
    efficacy: "휴멕턴트(습윤제)로 대기와 진피층에서 수분을 끌어와 각질층에 유지시킵니다. 아쿠아포린-3 발현을 촉진하여 피부 수분 통로를 활성화합니다.",
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
    casNo: "68647-73-4",
    category: "진정/여드름",
    rating: "good",
    shortDescription: "자연에서 온 여드름 킬러",
    description: "호주 원산지 식물에서 추출한 에센셜 오일로, 항균/항염 효과가 뛰어나 여드름 케어에 좋아요.",
    efficacy: "터피넨-4-올이 주성분으로 P. acnes, S. aureus 등 피부 상재균에 항균 작용을 합니다. 염증성 사이토카인 생성을 억제하여 항염 효과도 있습니다.",
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
  },
  {
    id: "adenosine",
    name: "아데노신",
    nameEn: "Adenosine",
    casNo: "58-61-7",
    category: "안티에이징",
    rating: "good",
    shortDescription: "식약처 인정 주름개선 기능성 원료",
    description: "우리 몸에서 에너지 대사에 관여하는 성분으로, 식약처가 공식 인정한 주름 개선 기능성 원료예요.",
    efficacy: "섬유아세포를 자극하여 콜라겐과 엘라스틴 합성을 촉진합니다. 세포 에너지(ATP) 생성에 관여하여 피부 대사를 활성화하고 상처 치유도 돕습니다.",
    benefits: [
      "주름 개선 (식약처 인정)",
      "피부 탄력 증가",
      "세포 에너지 공급",
      "상처 치유 촉진"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능해요. 자극이 없어 매일 써도 OK!",
    skinTypes: ["모든 피부"],
    goodWith: ["레티놀", "펩타이드", "히알루론산"],
    avoidWith: [],
    tips: [
      "0.04% 이상 함유 시 기능성 화장품으로 인정",
      "레티놀이 부담스러운 분께 추천",
      "에센스나 크림에 많이 들어있어요"
    ]
  },
  {
    id: "allantoin",
    name: "알란토인",
    nameEn: "Allantoin",
    casNo: "97-59-6",
    category: "진정/재생",
    rating: "good",
    shortDescription: "컴프리에서 온 순한 진정 성분",
    description: "컴프리 식물에서 추출한 성분으로, 피부 자극을 완화하고 세포 재생을 촉진하는 순한 성분이에요.",
    efficacy: "각질층의 수분 보유력을 높이고 죽은 세포 탈락을 촉진합니다. 항자극 작용으로 피부를 진정시키고, 상처 치유 과정에서 조직 재생을 돕습니다.",
    benefits: [
      "피부 진정",
      "세포 재생 촉진",
      "보습 효과",
      "각질 연화"
    ],
    whenToUse: "아침, 저녁 언제든. 자극 없이 순해요.",
    skinTypes: ["민감성", "모든 피부"],
    goodWith: ["판테놀", "센텔라", "히알루론산"],
    avoidWith: [],
    tips: [
      "아기 화장품에도 많이 들어가는 순한 성분",
      "쉐이빙 후 진정에도 좋아요",
      "립밤에도 자주 사용돼요"
    ]
  },
  {
    id: "collagen",
    name: "콜라겐",
    nameEn: "Collagen",
    casNo: "9007-34-5",
    category: "보습/안티에이징",
    rating: "good",
    shortDescription: "피부 탄력의 근본, 하지만 바르는 건 보습용",
    description: "피부 진피층의 70%를 차지하는 단백질이에요. 바르는 콜라겐은 피부 깊숙이 침투하기 어렵지만 보습 효과는 뛰어나요.",
    efficacy: "고분자 콜라겐은 피부 표면에 보습막을 형성하여 수분 손실을 방지합니다. 가수분해 콜라겐(저분자)은 피부 침투력이 높아 깊은 보습을 제공합니다.",
    benefits: [
      "피부 보습",
      "피부결 개선",
      "탄력감 부여",
      "수분막 형성"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능해요.",
    skinTypes: ["건성", "노화피부", "모든 피부"],
    goodWith: ["히알루론산", "비타민C", "펩타이드"],
    avoidWith: [],
    tips: [
      "바르는 것보다 경구 섭취가 효과적이라는 연구도 있어요",
      "해양 콜라겐이 흡수율이 높아요",
      "비타민C와 함께 섭취하면 합성 촉진!"
    ]
  },
  {
    id: "vitamin-e",
    name: "비타민E",
    nameEn: "Tocopherol",
    casNo: "59-02-9",
    category: "항산화/보습",
    rating: "good",
    shortDescription: "피부를 지키는 지용성 항산화제",
    description: "대표적인 지용성 항산화 비타민으로, 자유라디칼로부터 피부를 보호하고 보습 효과도 있어요.",
    efficacy: "지용성 항산화제로 세포막의 지질 과산화를 방지합니다. 비타민C와 시너지 작용하며, 자외선으로 인한 피부 손상을 줄이고 피부 장벽을 강화합니다.",
    benefits: [
      "항산화 작용",
      "피부 보호",
      "보습 효과",
      "피부 장벽 강화"
    ],
    whenToUse: "아침, 저녁 모두 OK. 자외선 차단제 전에 바르면 시너지!",
    skinTypes: ["건성", "모든 피부"],
    goodWith: ["비타민C", "페룰산", "레티놀"],
    avoidWith: [],
    tips: [
      "비타민C + E + 페룰산 조합이 항산화 끝판왕",
      "토코페롤 > 토코페릴아세테이트 순으로 효과적",
      "오일 타입 제품에 많이 들어있어요"
    ]
  },
  {
    id: "propolis",
    name: "프로폴리스",
    nameEn: "Propolis",
    casNo: "85665-41-4",
    category: "진정/항염",
    rating: "good",
    shortDescription: "벌이 만든 천연 항균 물질",
    description: "벌이 나무 수액과 자신의 분비물로 만든 물질로, 강력한 항균/항염 효과를 가진 천연 성분이에요.",
    efficacy: "플라보노이드, 페놀산 등 300여 가지 성분이 복합적으로 작용합니다. 항균/항바이러스/항염 작용을 하며, 피부 재생과 상처 치유를 촉진합니다.",
    benefits: [
      "항균/항염 작용",
      "피부 진정",
      "상처 치유",
      "피부 보호"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능. 트러블 피부에 특히 좋아요.",
    skinTypes: ["지성", "여드름성", "민감성"],
    goodWith: ["꿀", "로열젤리", "센텔라"],
    avoidWith: [],
    tips: [
      "벌 제품 알레르기 있으면 주의!",
      "여드름 자국 케어에도 도움",
      "점도 높은 에센스 형태가 많아요"
    ]
  },
  {
    id: "green-tea",
    name: "녹차추출물",
    nameEn: "Green Tea Extract",
    casNo: "84650-60-2",
    category: "항산화/진정",
    rating: "good",
    shortDescription: "카테킨 가득, 강력한 항산화 파워",
    description: "녹차의 EGCG(에피갈로카테킨갈레이트)가 강력한 항산화 효과를 제공하고 피부를 진정시켜요.",
    efficacy: "EGCG가 비타민C/E보다 강력한 항산화 작용을 합니다. 콜라게나제/엘라스타제 억제로 주름 예방, MMP 억제로 콜라겐 분해를 방지합니다. 피지 분비도 조절합니다.",
    benefits: [
      "강력한 항산화",
      "피부 진정",
      "피지 조절",
      "노화 방지"
    ],
    whenToUse: "아침에 자외선 차단 전 사용하면 좋아요.",
    skinTypes: ["지성", "복합성", "모든 피부"],
    goodWith: ["비타민C", "나이아신아마이드", "히알루론산"],
    avoidWith: [],
    tips: [
      "카페인 함유로 붓기 완화에도 효과",
      "아이크림에도 많이 들어가요",
      "티백 우린 물로 팩 해도 좋아요"
    ]
  },
  {
    id: "zinc-oxide",
    name: "징크옥사이드",
    nameEn: "Zinc Oxide",
    casNo: "1314-13-2",
    category: "자외선차단/진정",
    rating: "good",
    shortDescription: "물리적 자외선 차단의 대표주자",
    description: "무기 자외선 차단제의 대표 성분으로, UVA/UVB 모두 차단하고 민감한 피부에도 순해요.",
    efficacy: "자외선을 물리적으로 반사/산란시켜 피부를 보호합니다. 항염/항균 작용도 있어 여드름 피부에도 좋고, 상처 치유를 돕는 아연 이온을 제공합니다.",
    benefits: [
      "UVA/UVB 차단",
      "피부 진정",
      "항균 효과",
      "피부 보호"
    ],
    whenToUse: "자외선 차단제로 아침에 사용하세요.",
    skinTypes: ["민감성", "여드름성", "모든 피부"],
    goodWith: ["티타늄디옥사이드", "나이아신아마이드"],
    avoidWith: [],
    tips: [
      "백탁 현상이 있을 수 있어요",
      "화학적 필터보다 순해서 아기/민감 피부에 좋음",
      "기저귀 발진 크림에도 사용되는 안전한 성분"
    ]
  },
  {
    id: "houttuynia",
    name: "어성초",
    nameEn: "Houttuynia Cordata",
    casNo: "91745-26-3",
    category: "진정/항염",
    rating: "good",
    shortDescription: "한방 진정 케어의 대표 약초",
    description: "동아시아 전통 약초로, 강력한 항염/항균 효과가 있어 트러블 피부 진정에 탁월해요.",
    efficacy: "퀘르세틴, 플라보노이드 등이 염증성 사이토카인 생성을 억제합니다. 항균/항바이러스 작용으로 여드름 균을 억제하고, 알레르기 반응도 완화합니다.",
    benefits: [
      "피부 진정",
      "항염/항균",
      "트러블 케어",
      "피부 정화"
    ],
    whenToUse: "트러블이 있을 때, 아침/저녁 모두 사용 가능.",
    skinTypes: ["지성", "여드름성", "민감성"],
    goodWith: ["센텔라", "티트리", "프로폴리스"],
    avoidWith: [],
    tips: [
      "독특한 향이 있어요 (비린내라고 느끼는 분도)",
      "피부 해독/정화 콘셉트 제품에 많아요",
      "민간요법으로 오래 사용되어 온 성분"
    ]
  },
  {
    id: "madecassoside",
    name: "마데카소사이드",
    nameEn: "Madecassoside",
    casNo: "34540-22-2",
    category: "진정/재생",
    rating: "good",
    shortDescription: "센텔라의 핵심 진정 성분",
    description: "센텔라아시아티카에서 추출한 핵심 활성 성분으로, 피부 진정과 재생에 탁월한 효과를 보여요.",
    efficacy: "콜라겐 I, III 합성을 촉진하고 MMP(기질금속단백분해효소)를 억제하여 콜라겐 분해를 방지합니다. 염증성 사이토카인을 억제하여 강력한 항염 효과를 제공합니다.",
    benefits: [
      "강력한 피부 진정",
      "콜라겐 합성 촉진",
      "상처 치유",
      "흉터 개선"
    ],
    whenToUse: "시술 후, 자극받은 피부에. 아침/저녁 모두 OK.",
    skinTypes: ["민감성", "트러블성", "모든 피부"],
    goodWith: ["판테놀", "히알루론산", "알란토인"],
    avoidWith: [],
    tips: [
      "시카크림의 핵심 성분이에요",
      "레이저 시술 후 진정 케어에 필수",
      "아시아티코사이드와 함께 사용하면 시너지"
    ]
  },
  {
    id: "ferulic-acid",
    name: "페룰산",
    nameEn: "Ferulic Acid",
    casNo: "1135-24-6",
    category: "항산화",
    rating: "good",
    shortDescription: "비타민C의 최고의 파트너",
    description: "쌀겨, 귀리 등에서 추출한 식물성 항산화 성분으로, 비타민C/E와 함께 쓰면 항산화 효과가 8배!",
    efficacy: "그 자체로 항산화 작용을 하며, 비타민C/E의 안정성과 효능을 크게 높여줍니다. 자외선으로 인한 피부 손상을 방지하고 광노화를 예방합니다.",
    benefits: [
      "강력한 항산화",
      "비타민C 안정화",
      "광노화 예방",
      "피부 보호"
    ],
    whenToUse: "아침에 자외선 차단 전, 비타민C와 함께.",
    skinTypes: ["모든 피부"],
    goodWith: ["비타민C", "비타민E", "레스베라트롤"],
    avoidWith: [],
    tips: [
      "비타민C+E+페룰산 = 스킨수티컬스 공식",
      "자외선 손상 예방에 탁월",
      "세럼 형태로 아침 사용 추천"
    ]
  },
  {
    id: "pha",
    name: "PHA",
    nameEn: "Polyhydroxy Acid",
    casNo: "다양함",
    category: "각질케어",
    rating: "good",
    shortDescription: "AHA보다 순한 차세대 각질 케어",
    description: "글루코노락톤, 락토바이오닉애씨드 등이 해당되며, AHA보다 분자가 커서 자극이 적어요.",
    efficacy: "AHA처럼 각질세포 간 결합을 느슨하게 하지만 분자가 커서 천천히 작용합니다. 휴멕턴트(보습) 기능도 있어 각질 제거와 동시에 보습도 제공합니다.",
    benefits: [
      "순한 각질 제거",
      "보습 효과",
      "피부결 개선",
      "항산화"
    ],
    whenToUse: "아침, 저녁 모두 사용 가능. 매일 써도 순해요.",
    skinTypes: ["민감성", "건성", "모든 피부"],
    goodWith: ["히알루론산", "세라마이드", "나이아신아마이드"],
    avoidWith: [],
    tips: [
      "민감성 피부의 첫 산 성분으로 추천",
      "AHA가 맞지 않는 분께 대안",
      "글루코노락톤이 가장 흔한 PHA"
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
