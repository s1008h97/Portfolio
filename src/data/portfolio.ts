import type { L } from "@/lib/i18n";

/**
 * 포트폴리오 콘텐츠는 이 파일에서만 관리합니다.
 * `draft: true` 항목은 화면에 "Draft" 표시가 붙습니다. 실제 내용 확인 후 지워주세요.
 * 새 프로젝트는 `featuredProjects` 배열에 객체 하나만 추가하면 됩니다.
 */

export const profile = {
  name: "Seohyeon Kim",
  nameKo: "김서현",
  role: { ko: "모바일 · 웹 개발자", en: "Mobile & Web Developer" } as L,
  origin: { ko: "Android 개발로 시작 · 서비스 기획", en: "Started in Android · Service planning" } as L,
  years: "9+",
  headline: {
    ko: "서비스의 문제를 발견하고,\n**끝까지** 해결하는 개발자.",
    en: "I find what's broken in a service\nand **see it through** to production.",
  } as L,
  intro: {
    ko: "기능 구현부터 실제 서비스 운영까지 함께 고민합니다.", en: "I consider both feature development and day-to-day service operations.",
  } as L,
  keywords: ["Kotlin", "Swift", "Android", "iOS", "NFC", "Next.js", "Supabase"],
  email: "s971008h@gmail.com",
  github: "https://github.com/s1008h97",
  linkedin: "https://www.linkedin.com/in/kim-seohyeon/",
};

export const facts: { k: L; v: L }[] = [
  { k: { ko: "지금", en: "Now" }, v: { ko: "TouchNgo — NFC 결제 SDK, 모바일 오더, 웹", en: "TouchNgo — NFC payment SDK, Mobile Order, web" } },
  { k: { ko: "경력", en: "Since" }, v: { ko: "2017 — 현재", en: "2017 — ongoing" } },
  { k: { ko: "주력", en: "Focus" }, v: { ko: "Android · iOS · NFC", en: "Android · iOS · NFC" } },
  { k: { ko: "스택", en: "Stack" }, v: { ko: "Kotlin, Swift, Next.js, Supabase", en: "Kotlin, Swift, Next.js, Supabase" } },
  { k: { ko: "기획", en: "Product" }, v: { ko: "서비스 기획 · 사업계획서 · Figma", en: "Planning · Business plans · Figma" } },
];

export const nav = [
  { id: "about", label: { ko: "소개", en: "About" } as L },
  { id: "experience", label: { ko: "경력", en: "Experience" } as L },
  { id: "projects", label: { ko: "프로젝트", en: "Projects" } as L },
  { id: "apps", label: { ko: "작업 화면", en: "Screens" } as L },
  { id: "skills", label: { ko: "기술", en: "Skills" } as L },
  { id: "approach", label: { ko: "접근 방식", en: "Approach" } as L },
  { id: "contact", label: { ko: "연락", en: "Contact" } as L },
];

export const aboutText: L = {
  ko: "Android 앱 개발로 시작해 iOS, 웹, Supabase 기반 백엔드 개발까지 경험을 넓혀 왔습니다. 결제·교통 서비스를 기획하고 개발하며, 현장에서 안정적으로 사용할 수 있는 제품을 만드는 데 집중합니다.", en: "I started with Android apps and expanded into iOS, web and Supabase-based backend development. I plan and build payment and transportation services, focusing on reliable products for everyday use.",
};

export const stats = [
  { value: 9, suffix: "+", label: { ko: "년 개발 경력", en: "Years of experience" } as L },
  { value: 0, suffix: "", live: "projects", label: { ko: "프로젝트", en: "Projects" } as L },
  { text: "Android", label: { ko: "주력 플랫폼", en: "Main platform" } as L },
  { text: "Mobility · Payment", label: { ko: "도메인 경험", en: "Domain experience" } as L },
];

// 경력은 이력서 기준입니다.
export const experience: { company: string; period: string; role: L; bullets: L[]; tech: string[]; draft?: boolean }[] = [
  {
    company: "TouchNgo",
    period: "2026 — Present",
    role: { ko: "매니저 · Android / NFC / Web", en: "Manager · Android / NFC / Web" } as L,
    bullets: [
      { ko: "NFC 결제 SDK 개발 (Android, ReaderMode / IsoDep)", en: "NFC payment SDK for Android (ReaderMode / IsoDep)" },
      { ko: "모바일 오더 Android 앱과 관리자 페이지 개발", en: "Mobile Order Android app and admin console development" },
      { ko: "회사 웹사이트와 관리자 콘솔 기획·개발 (Next.js, Supabase)", en: "Planned and built the company website and admin console (Next.js, Supabase)" },
    ] as L[],
    tech: ["Kotlin", "Android", "NFC", "Next.js", "Supabase"],
  },
  {
    company: "Interpass",
    period: "2024.12 — 2025.12",
    role: { ko: "앱개발연구소 · 선임연구원", en: "Senior Researcher · App Development Lab" } as L,
    bullets: [
      { ko: "경기마을버스관제 앱 기획·개발 (네이버 지도 기반 실시간 버스 위치, 운행기록·평가·원장)", en: "Planned and built the Gyeonggi village-bus control app (live bus positions on Naver Map, trip records, evaluations, ledger)" },
      { ko: "버스 충전소 장애 관리 앱 기획·개발 (QR 스캔으로 충전기 정보 조회, 장애 신고·처리)", en: "Planned and built a charging-station fault management app (QR scanning for charger info, fault reporting and handling)" },
      { ko: "경기시내버스관제 노선 수정 앱 기획·개발", en: "Planned and built a route-editing app for Gyeonggi city buses" },
      { ko: "Flutter 사내 ERP 유지보수 (단말기 설치·철수·장애 접수, GetX + GraphQL)", en: "Maintained the Flutter in-house ERP for terminal install, removal and fault tickets (GetX + GraphQL)" },
    ] as L[],
    tech: ["Kotlin", "MVVM", "Retrofit2", "Flutter", "GetX", "GraphQL"],
  },
  {
    company: "Enliple",
    period: "2021.05 — 2022.05",
    role: { ko: "B2C사업부 · 대리", en: "Assistant Manager · B2C Division" } as L,
    bullets: [
      { ko: "힐링캐시 개발·유지보수 (카카오·네이버·페이스북·구글 로그인, SensorManager 만보기, Mobon 배너 광고, WebView 브리지)", en: "Healing Cash: social logins, a SensorManager step counter, Mobon banner ads and a WebView bridge" },
      { ko: "키보드 SDK 개발·유지보수 (OK캐시백 등 협업사 요구사항 반영)", en: "Keyboard SDK development and partner integrations (e.g. OK Cashbag)" },
    ] as L[],
    tech: ["Android", "Retrofit", "WebView", "SDK", "Git"],
  },
  {
    company: "i-Aurora",
    period: "2021.01 — 2021.04",
    role: { ko: "기술본부 · 선임연구원", en: "Senior Researcher · Technology Division" } as L,
    bullets: [
      { ko: "React Native 선불카드 앱 NAMANE 개발·유지보수", en: "Built and maintained the NAMANE prepaid-card app in React Native" },
      { ko: "Facebook Analytics를 활용한 사용자 참여도 분석 및 교통카드 모듈 업데이트", en: "User engagement analysis with Facebook Analytics and transit-card module updates" },
    ] as L[],
    tech: ["React Native", "Facebook Analytics"],
  },
  {
    company: "Neoapp",
    period: "2017.08 — 2020.07",
    role: { ko: "개발팀 · 사원", en: "Developer · Development Team" } as L,
    bullets: [
      { ko: "리워드·소개팅·동호회 커뮤니티 앱 9종 개발·출시 (Java, SVN)", en: "Built and shipped 9 reward, dating and community apps (Java, SVN)" },
      { ko: "광고 플랫폼 API 연동, 지면 광고 노출, 실행 중인 앱 감지(UsageStatsManager)", en: "Ad platform APIs, ad placements, foreground app detection (UsageStatsManager)" },
      { ko: "FCM 푸시 알림 구현", en: "FCM push notifications" },
      { ko: "SurfaceView 기반 카메라 구현", en: "Custom camera built on SurfaceView" },
      { ko: "Cloud Firestore 기반 실시간 채팅 (이모저모, 사랑꾼, 레몬데이트)", en: "Realtime chat on Cloud Firestore" },
    ] as L[],
    tech: ["Java", "Android", "Cloud Firestore"],
  },
];

export type FeaturedProject = {
  slug: string;
  name: L;
  kind: L;
  role: L;
  period: string;
  summary: L;
  problem: L;
  solution: L;
  contribution: L[];
  tech: string[];
  link?: { label: string; href: string };
  draft?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "nta-apps",
    name: { ko: "NTA 심야 광역버스 앱", en: "NTA Night Bus Apps" },
    kind: { ko: "프리랜서", en: "Freelance" },
    role: { ko: "Android · iOS 앱 개발", en: "Android · iOS development" },
    period: "2026",
    summary: {
      ko: "홍대↔일산 심야버스의 기사용·승객용 앱 개발 및 실시간 버스 위치 연동", en: "Driver and passenger apps for the Hongdae–Ilsan night bus, with live bus tracking",
    },
    problem: {
      ko: "심야 광역버스 승객이 예약·결제 후 버스 위치를 확인하고, 기사가 정류장별 탑승 인원을 관리하며 실시간 위치를 공유할 수 있어야 했습니다.", en: "Passengers needed to track their night bus after booking and payment, while drivers needed to manage boardings at each stop and share their location in real time.",
    },
    solution: {
      ko: "Supabase Edge Functions와 Realtime Broadcast로 서버를 구성했습니다. 기사 앱에서 수집한 위치를 묶어 전송하고, 승객 앱에서 예약한 버스의 위치를 실시간으로 확인할 수 있도록 했습니다.", en: "Built the backend with Supabase Edge Functions and Realtime Broadcast. The driver app sends location updates in batches, allowing passengers to track their booked bus in real time.",
    },
    contribution: [
      { ko: "기사용 Android: 차량번호로 운행 시작, 티맵 내비게이션, 정류장별 탑승 확인, 위치 전송(2초마다 수집·10초마다 일괄 전송), 앱 재시작 시 운행 복구", en: "Driver Android: trip start by vehicle plate, T map navigation, boarding checks by stop, location sampling every 2 seconds and batch transmission every 10 seconds, trip recovery after restart" },
      { ko: "승객용 Android: 휴대폰 인증 기반 비회원 예약, 결제 웹뷰, 예약 조회·취소, 실시간 버스 위치 지도", en: "Passenger Android: guest booking with SMS verification, payment web view, booking lookup and cancellation, live bus map" },
      { ko: "승객용 iOS: Android 앱과 동일한 서버·화면 구성을 SwiftUI + MVVM으로 구현하고 기존 단위 테스트 적용", en: "Passenger iOS: SwiftUI + MVVM implementation using the same backend and screen structure as Android, with existing unit tests adapted" },
      { ko: "토큰 만료 전 자동 갱신 및 연결 끊김 시 재구독 처리", en: "Automatic token refresh before expiry and resubscription after disconnection" },
    ],
    tech: ["Kotlin", "Swift", "SwiftUI", "MVI / MVVM", "Supabase Realtime", "Naver Maps", "T map"],
  },
  {
    slug: "ai-membership",
    name: { ko: "서울 AI 허브 멤버십 선정", en: "Seoul AI Hub Membership" },
    kind: { ko: "기획 · 사업계획서", en: "Planning · Business plan" },
    role: { ko: "서비스 기획 · 사업계획서 작성", en: "Service planning · Proposal writing" },
    period: "2026",
    summary: {
      ko: "소상공인의 메뉴 조회부터 주문·결제까지 지원하는 Agentic Order 인프라를 제안해 서울 AI 허브 2026년 2기 멤버십 기업으로 선정", en: "Proposed Agentic Order infrastructure for small-business menu queries, ordering and payment; the company was selected for Seoul AI Hub’s second membership cohort in 2026",
    },
    problem: {
      ko: "외식업 소상공인의 메뉴·가격·옵션·프로모션 정보는 이미지나 SNS 게시물에 흩어져 있어, AI 에이전트가 정보를 읽고 주문을 처리하기 어렵습니다. 대형 배달 플랫폼의 데이터만 AI에 활용되면 높은 수수료 구조가 굳어질 수 있다는 우려도 있었습니다.",
      en: "Menus, prices, options and promotions of small F&B businesses are scattered across images and social posts, so AI agents struggle to read them and complete orders. If only large delivery platforms become AI-ready, high platform fees risk becoming entrenched.",
    },
    solution: {
      ko: "비정형 데이터를 AI가 읽을 수 있는 JSON-LD·Markdown 형식으로 변환하는 엔진과 MCP 기반 주문 API 게이트웨이를 제안했습니다. 에이전트의 조회·주문·결제 요청이 가맹점의 모바일 오더·POS·PG 결제망으로 이어지는 구조입니다.",
      en: "Proposed a conversion engine that turns unstructured data into AI-readable JSON-LD and Markdown, plus an MCP-based order API gateway that routes agent queries, orders and payment requests into each merchant's mobile-order, POS and PG systems.",
    },
    contribution: [
      { ko: "문제 정의, 시장 분석, 단계별 사업화 전략 작성", en: "Problem definition, market analysis and phased go-to-market plan" },
      { ko: "데이터 변환 엔진과 API 게이트웨이의 기술 구조 정리", en: "Technical structure for the conversion engine and API gateway" },
      { ko: "NFC 결제 SDK·모바일 오더 개발 경험을 바탕으로 개발 로드맵 작성", en: "Development roadmap based on NFC payment SDK and mobile ordering experience" },
    ],
    tech: ["MCP", "LLM", "JSON-LD", "API Gateway", "NFC"],
  },
  {
    slug: "touchngo-website",
    name: { ko: "터치앤고 웹사이트", en: "TouchNgo Website" },
    kind: { ko: "Web · 관리자 콘솔", en: "Web · Admin console" },
    role: { ko: "기획 · 개발", en: "Planning · Development" },
    period: "2026",
    summary: { ko: "한국어·영어를 지원하는 회사 웹사이트와 관리자 콘솔 개발", en: "Company website and admin console development with Korean and English support" },
    problem: {
      ko: "운영팀이 코드 수정 없이 회사·사업 소개, 뉴스, 채용 정보를 직접 수정하고, 한국어와 영어로 제공할 수 있어야 했습니다.", en: "The operations team needed to update company information, business descriptions, news and careers content in Korean and English without editing code.",
    },
    solution: {
      ko: "Next.js App Router 기반의 공개 사이트와 Supabase 연동 관리자 콘솔을 하나의 모노레포로 구성했습니다. 한국어는 기본 경로, 영어는 /en 경로로 제공하며 같은 페이지 구조를 사용하도록 했습니다.", en: "Built a Next.js App Router website and Supabase-backed admin console in a single monorepo. Korean uses the default route and English uses /en, with a shared page structure.",
    },
    contribution: [
      { ko: "회사·사업(NFC, 모바일 오더, 스마트 캠퍼스, 디지털 자산)·뉴스·채용 페이지의 구조 기획", en: "Site structure for company, business (NFC, mobile order, smart campus, digital asset), news and careers" },
      { ko: "관리자 콘솔: 리치 에디터 게시판, 이미지 업로드, 드래그 정렬, 특허 보드", en: "Admin console: rich-text boards, image upload, drag-and-drop ordering, patent board" },
      { ko: "방문 통계 대시보드(SVG 차트)와 IP 차단", en: "Visit analytics dashboard (SVG charts) and IP blocking" },
      { ko: "한/영 라우팅과 sitemap·robots 등 SEO 기본 설정", en: "Korean/English routing and SEO basics (sitemap, robots)" },
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Tiptap", "dnd-kit"],
  },
  {
    slug: "nfc-payment-sdk",
    name: { ko: "NFC 결제 SDK", en: "NFC Payment SDK" },
    kind: { ko: "Android SDK", en: "Android SDK" },
    role: { ko: "Android SDK 설계 · 개발", en: "Android SDK design & development" },
    period: "2026",
    summary: {
      ko: "기존 앱에 NFC 터치 결제를 추가할 수 있는 Android SDK 개발", en: "Android SDK development for adding NFC tap-to-pay to existing apps",
    },
    problem: {
      ko: "NFC 터치 결제를 도입하려면 앱을 새로 만들거나 복잡한 결제 시스템을 구축해야 해서 고객사의 부담이 컸습니다.",
      en: "Adding NFC tap-to-pay meant rebuilding the app or building a complex payment system, which was a heavy burden for clients.",
    },
    solution: {
      ko: "고객사 앱에 SDK를 연동하고 매장 단말기의 펌웨어를 업데이트하는 방식으로 구성했습니다. 결제 승인은 기존 결제 시스템에서 처리하도록 했습니다.", en: "Designed the solution around SDK integration in client apps and firmware updates for store terminals. Payment authorization remains on the existing payment system.",
    },
    contribution: [
      { ko: "Android NFC ReaderMode / IsoDep 기반 통신과 APDU 흐름 구현", en: "Android NFC communication over ReaderMode / IsoDep, and the APDU flow" },
      { ko: "SDK 아키텍처 설계", en: "SDK architecture design" },
      { ko: "단계별 처리 시간 측정과 성능 개선", en: "Per-step latency measurement and optimization" },
    ],
    tech: ["Kotlin", "Android", "NFC", "IsoDep", "APDU"],
  },
  {
    slug: "mobile-order",
    name: { ko: "모바일 오더 플랫폼 모듈화", en: "Mobile Order Platform Modularization" },
    kind: { ko: "Android · Admin", en: "Android · Admin" },
    role: { ko: "Android 앱 · 관리자 페이지 개발", en: "Android app & admin development" },
    period: "2026",
    summary: {
      ko: "고객 주문부터 본사·가맹점 관리까지 지원하는 O4O 솔루션의 Android 앱과 관리자 페이지 개발", en: "Android app and admin console development for an O4O solution covering customer orders and headquarters and franchise management",
    },
    problem: {
      ko: "외부 주문·배달 플랫폼에 의존할수록 중개 수수료와 광고비 부담이 커지고, 고객과 직접 소통하거나 브랜드에 맞는 서비스를 제공하기 어렵습니다.",
      en: "Relying on external ordering and delivery platforms raises fees and ad costs and limits direct customer contact and brand experience.",
    },
    solution: {
      ko: "고객이 주문하는 앱과 본사·가맹점이 운영하는 관리자 화면을 하나의 솔루션으로 제공합니다. 검증된 기능을 모듈화해 필요한 기능만 골라 조합하기 때문에 처음부터 만들 필요가 없습니다.",
      en: "Provides the customer ordering app and the HQ/franchise admin console as one solution, assembled from proven modules instead of built from scratch.",
    },
    contribution: [
      { ko: "고객용 Android 주문 앱 개발", en: "Customer-facing Android ordering app" },
      { ko: "본사·가맹점별 접근 권한을 구분한 관리자 페이지 (대시보드, 메뉴·카테고리·옵션, 매장, 쿠폰, 이벤트, 공지·FAQ, 문의, 매출 관리)", en: "Admin console with separate HQ and store roles (dashboard, menus/categories/options, stores, coupons, events, notices/FAQ, inquiries, revenue)" },
      { ko: "Supabase Edge Functions 기반 관리자 API (계정·메뉴·주문·쿠폰·대시보드)", en: "Admin API on Supabase Edge Functions (accounts, menus, orders, coupons, dashboard)" },
      { ko: "매출 데이터 Excel·PDF 내보내기", en: "Revenue export to Excel and PDF" },
    ],
    tech: ["Android", "Next.js", "React", "TypeScript", "Supabase", "TanStack Query"],
  },
  {
    slug: "charger-fault",
    name: { ko: "버스 충전소 장애 관리 앱", en: "Charging Station Fault App" },
    kind: { ko: "Android · 운수사용", en: "Android · for operators" },
    role: { ko: "기획 · 개발", en: "Planning · Development" },
    period: "2025",
    summary: { ko: "충전소 장애를 표준 양식으로 신고·처리하고 QR로 충전기 조회", en: "Report and resolve charger faults in a standard format with QR lookup" },
    problem: {
      ko: "전기 충전소 장애가 관리자마다 다른 방식으로 공유되어 대응이 늦어지고 이력 관리가 어려웠습니다.",
      en: "Charging-station faults were reported in inconsistent ways, slowing response and making history hard to track.",
    },
    solution: {
      ko: "장애를 표준화된 양식으로 실시간 신고·조회·처리하는 앱을 만들고, QR 스캔으로 충전기 정보를 바로 불러오게 했습니다.",
      en: "Built an app to report, view and resolve faults in a standard format, with QR scanning to load charger info instantly.",
    },
    contribution: [
      { ko: "장애 처리 흐름과 입력 양식 기획", en: "Fault-handling flow and form design" },
      { ko: "QR 스캔 기반 충전기 정보 표시", en: "QR-based charger lookup" },
      { ko: "장애 이력 조회 화면 개발", en: "Fault history screens" },
    ],
    tech: ["Kotlin", "MVVM", "QR Scan", "Retrofit2"],
  },
  {
    slug: "bus-control",
    name: { ko: "경기마을버스관제 앱", en: "Village Bus Control App" },
    kind: { ko: "Android · 운수사용", en: "Android · for operators" },
    role: { ko: "기획 · 개발", en: "Planning · Development" },
    period: "2024 — 2025",
    summary: { ko: "실시간 버스 위치와 운행 기록·평가·원장 조회 기능 개발", en: "Live bus tracking and lookup features for trip records, evaluations and ledger data" },
    problem: {
      ko: "운수 현장에서 버스의 실시간 위치와 운행 기록, 평가, 원장 정보를 한곳에서 확인할 방법이 필요했습니다.",
      en: "Operators needed one place to see live bus positions, trip records, evaluations and ledger data.",
    },
    solution: {
      ko: "네이버 지도 API로 실시간 버스 위치를 지도에 보여 주고, 운행 기록·평가·원장 정보를 앱에서 조회할 수 있도록 했습니다.", en: "Displayed live bus locations using the Naver Maps API and added in-app access to trip records, evaluations and ledger data.",
    },
    contribution: [
      { ko: "서비스 기획과 화면 설계", en: "Service planning and screen design" },
      { ko: "MVVM(ViewModel + LiveData/StateFlow) 구조로 앱 개발", en: "App built with MVVM (ViewModel + LiveData/StateFlow)" },
      { ko: "Retrofit2 + OkHttp3 API 연동, FCM 푸시", en: "Retrofit2 + OkHttp3 integration, FCM push" },
    ],
    tech: ["Kotlin", "MVVM", "Naver Map API", "Retrofit2", "FCM"],
  },
  {
    slug: "flutter-erp",
    name: { ko: "단말기 관리 사내 ERP", en: "In-house Terminal ERP" },
    kind: { ko: "Flutter · 유지보수", en: "Flutter · Maintenance" },
    role: { ko: "유지보수 · 기능 개발", en: "Maintenance · Feature work" },
    period: "2024 — 2025",
    summary: { ko: "단말기 설치·철수·장애 접수를 처리하는 Flutter 사내 ERP 유지보수", en: "Maintained the Flutter ERP for terminal install, removal and fault intake" },
    problem: {
      ko: "현장팀이 버스 단말기의 설치·철수, 장애 접수와 등록, 업데이트를 하나의 도구로 처리해야 했습니다.",
      en: "Field teams needed a single tool for terminal install/removal, fault intake and updates.",
    },
    solution: {
      ko: "GetX 기반의 MVVM과 유사한 구조(View + Controller + Service/Repository)를 유지하면서 GraphQL API 연동 기능을 유지보수했습니다.",
      en: "Kept the GetX-based, MVVM-like structure (View + Controller + Service/Repository) and maintained the GraphQL-backed features.",
    },
    contribution: [
      { ko: "Queries / Mutations 레이어 기반 GraphQL 연동", en: "GraphQL via Queries / Mutations layers" },
      { ko: "ScreenUtil 반응형 레이아웃", en: "Responsive layouts with ScreenUtil" },
      { ko: "장애 접수·등록·업데이트 기능 유지보수", en: "Fault intake, registration and update features" },
    ],
    tech: ["Flutter", "Dart", "GetX", "GraphQL"],
  },
  {
    slug: "donkkaebi",
    name: { ko: "돈깨비", en: "Donkkaebi" },
    kind: { ko: "Android · 프리랜서", en: "Android · Freelance" },
    role: { ko: "앱 개발", en: "App development" },
    period: "2022",
    summary: { ko: "사용자의 클릭 시점을 기록해 보상 시간을 계산하는 앱", en: "App that records click timestamps to calculate reward time" },
    problem: {
      ko: "사용자의 클릭 시간을 기록하고, 그 기록을 기준으로 보상 시간을 계산하는 기능이 필요했습니다.",
      en: "The app needed to record click times and calculate reward time from them.",
    },
    solution: {
      ko: "클릭 시점을 Room 데이터베이스에 저장하고, 저장된 기록을 기준으로 보상 시간을 계산하도록 구현했습니다.", en: "Stored click timestamps in a Room database and used the saved records to calculate reward time.",
    },
    contribution: [
      { ko: "클릭 기록 기반 보상 시간 계산 로직", en: "Reward-time calculation from click records" },
      { ko: "Room 데이터베이스 설계 및 데이터 저장", en: "Room database design and data persistence" },
      { ko: "SVN 버전 관리", en: "SVN version control" },
    ],
    tech: ["Android", "Room", "SVN"],
  },
  {
    slug: "healing-cash",
    name: { ko: "힐링캐시", en: "Healing Cash" },
    kind: { ko: "Android · B2C", en: "Android · B2C" },
    role: { ko: "개발 · 유지보수", en: "Development · Maintenance" },
    period: "2021 — 2022",
    summary: { ko: "소셜 로그인·만보기·광고·WebView 브리지를 갖춘 리워드 앱", en: "Reward app with social login, step counter, ads and a WebView bridge" },
    problem: {
      ko: "명언을 보여 주고 보상을 주는 앱에서 간편 로그인, 걸음 수 측정, 광고 노출을 안정적으로 제공해야 했습니다.",
      en: "A reward app needed reliable social login, step counting and ad placement.",
    },
    solution: {
      ko: "카카오·네이버·페이스북·구글 로그인, SensorManager 만보기, Mobon 배너 광고, WebView 브리지를 구현했습니다.",
      en: "Implemented social logins, a SensorManager step counter, Mobon banner ads and a WebView bridge.",
    },
    contribution: [
      { ko: "소셜 로그인 4종 구현", en: "Four social login providers" },
      { ko: "AndroidBridge를 이용한 WebView 간 통신", en: "WebView communication via AndroidBridge" },
      { ko: "Retrofit JSON 파싱, Git 버전 관리", en: "Retrofit JSON parsing, Git workflow" },
    ],
    tech: ["Android", "SensorManager", "Retrofit", "WebView"],
  },
  {
    slug: "namane",
    name: { ko: "NAMANE 선불카드 앱", en: "NAMANE Prepaid Card App" },
    kind: { ko: "React Native · 핀테크", en: "React Native · Fintech" },
    role: { ko: "앱 개발 · 유지보수", en: "App development · Maintenance" },
    period: "2021",
    summary: { ko: "React Native 선불카드 앱 개발, 교통카드 모듈 업데이트, 사용자 분석 도입", en: "React Native prepaid-card app with transit-card module update and analytics" },
    problem: {
      ko: "선불카드 앱의 기능과 성능을 개선하고, 사용자 참여도를 데이터로 확인할 수단이 필요했습니다.",
      en: "The prepaid-card app needed better functionality and performance, plus a way to measure engagement.",
    },
    solution: {
      ko: "교통카드 모듈을 업데이트해 기능과 성능을 높이고, Facebook Analytics를 도입해 사용자 행동을 분석했습니다.",
      en: "Updated the transit-card module for functionality and performance, and introduced Facebook Analytics.",
    },
    contribution: [
      { ko: "React Native로 앱 개발·유지보수", en: "App development and maintenance in React Native" },
      { ko: "텔큐온 교통카드 모듈 업데이트", en: "Transit-card module update" },
      { ko: "Facebook Analytics 도입", en: "Facebook Analytics integration" },
    ],
    tech: ["React Native", "Facebook Analytics"],
  },
  {
    slug: "neoapp-reward",
    name: { ko: "리워드 앱 4종 (틱톡·웹툰·튜브 캐시)", en: "Reward Apps ×4 (TikTok · Webtoon · Tube Cash)" },
    kind: { ko: "Android · Neoapp", en: "Android · Neoapp" },
    role: { ko: "개발 · 유지보수", en: "Development · Maintenance" },
    period: "2017 — 2020",
    summary: { ko: "특정 앱 실행을 감지해 보상하는 TictokCash·WebtoonCash·TubeCash pro·CashTube", en: "TictokCash, WebtoonCash, TubeCash pro and CashTube: rewards triggered by app usage" },
    problem: {
      ko: "사용자가 특정 앱(틱톡·웹툰·유튜브)을 실제로 실행했는지 확인해 보상으로 연결해야 했습니다.",
      en: "Each app had to confirm that the user actually ran a target app (TikTok, webtoon, YouTube) before granting a reward.",
    },
    solution: {
      ko: "UsageStatsManager와 ActivityManager로 현재 사용 중인 앱을 확인하고, 광고 플랫폼 API와 지면 광고를 연동했습니다.", en: "Detected the currently active app with UsageStatsManager and ActivityManager, and integrated ad platform APIs and ad placements.",
    },
    contribution: [
      { ko: "실행 앱 감지 로직 구현", en: "Foreground app detection" },
      { ko: "핀크럭스·앱올·Flex 광고 플랫폼 API 연동", en: "Pincrux, AppAll and Flex ad platform APIs" },
      { ko: "버즈빌·애드핏·애드몹 지면 광고 노출", en: "Buzzvil, AdFit and AdMob ad placements" },
      { ko: "HttpURLConnection 통신, JSON 파싱, Google Play 출시", en: "HttpURLConnection networking, JSON parsing, Google Play release" },
    ],
    tech: ["Java", "Android", "UsageStatsManager", "HttpURLConnection"],
  },
  {
    slug: "neoapp-photo",
    name: { ko: "사진 리워드 앱 (치즈캐시·포토캐시)", en: "Photo Reward Apps (CheeseCash · PhotoCash)" },
    kind: { ko: "Android · Neoapp", en: "Android · Neoapp" },
    role: { ko: "개발 · 유지보수", en: "Development · Maintenance" },
    period: "2017 — 2020",
    summary: { ko: "사진 촬영 시 보상을 제공하는 앱 개발 및 SurfaceView 기반 카메라 구현", en: "Photo reward app development and SurfaceView-based camera implementation" },
    problem: {
      ko: "사진 촬영이 핵심 기능인 만큼, 사용자가 안정적으로 촬영할 수 있는 화면이 필요했습니다.", en: "Photo capture was a core feature, so users needed a reliable camera screen.",
    },
    solution: {
      ko: "SurfaceView를 활용해 카메라 미리보기와 촬영 화면을 직접 구현했습니다.",
      en: "Built the camera preview and capture screen directly on SurfaceView.",
    },
    contribution: [
      { ko: "SurfaceView 기반 카메라 구현", en: "SurfaceView-based camera" },
      { ko: "광고 연동과 앱 유지보수", en: "Ad integration and maintenance" },
    ],
    tech: ["Java", "Android", "SurfaceView"],
  },
  {
    slug: "neoapp-community",
    name: { ko: "커뮤니티 앱 3종 (이모저모·사랑꾼·레몬데이트)", en: "Community Apps ×3 (IMJM · LoveKkun · LemonDate)" },
    kind: { ko: "Android · Neoapp", en: "Android · Neoapp" },
    role: { ko: "개발 · 유지보수", en: "Development · Maintenance" },
    period: "2017 — 2020",
    summary: { ko: "동호회·소개팅 커뮤니티 앱, Cloud Firestore 실시간 채팅과 FCM 푸시", en: "Club and blind-date community apps with Cloud Firestore chat and FCM push" },
    problem: {
      ko: "회원 간 실시간 채팅과 알림 기능이 필요했습니다.", en: "Members needed real-time chat and notifications.",
    },
    solution: {
      ko: "Cloud Firestore로 실시간 채팅을 구현하고, FCM으로 푸시 알림을 전달했습니다.",
      en: "Implemented realtime chat on Cloud Firestore and delivered push notifications with FCM.",
    },
    contribution: [
      { ko: "Cloud Firestore 기반 실시간 채팅", en: "Realtime chat on Cloud Firestore" },
      { ko: "FCM 푸시 알림", en: "FCM push notifications" },
      { ko: "3개 앱 개발·출시·유지보수", en: "Development, release and maintenance of three apps" },
    ],
    tech: ["Java", "Android", "Cloud Firestore", "FCM"],
  },
];

export const skillGroups: { title: string; items: { name: string; note: L }[] }[] = [
  {
    title: "Mobile",
    items: [
      { name: "Kotlin", note: { ko: "Android 주력 개발 언어 · NTA 앱, NFC 결제 SDK, 경기마을버스관제 앱 개발", en: "Primary Android language · NTA apps, NFC payment SDK and Gyeonggi village-bus control app development" } },
      { name: "Java", note: { ko: "Neoapp 리워드·커뮤니티 앱 개발 및 서버 통신·실시간 채팅 구현", en: "Neoapp reward and community app development, server communication and real-time chat implementation" } },
      { name: "Swift · SwiftUI", note: { ko: "SwiftUI·MVVM 기반 NTA 승객용 iOS 앱 개발 및 네이버 지도 SDK 연동", en: "SwiftUI/MVVM-based NTA passenger iOS app development and Naver Maps SDK integration" } },
      { name: "NFC (ReaderMode · IsoDep)", note: { ko: "ReaderMode·IsoDep 기반 NFC 결제 SDK의 APDU 통신 구현", en: "APDU communication implementation for the NFC payment SDK using ReaderMode and IsoDep" } },
      { name: "Android SDK", note: { ko: "걸음 수 측정, 앱 실행 감지, 카메라 촬영, 웹·앱 간 통신, 푸시 알림 구현", en: "Step counting, app usage detection, camera capture, web–app communication and push notification implementation" } },
      { name: "MVVM · MVI · Coroutine", note: { ko: "MVVM·MVI 기반 화면·상태 관리 및 Coroutines·Flow를 활용한 비동기 처리", en: "MVVM/MVI-based UI and state management, asynchronous processing with Coroutines and Flow" } },
    ],
  },
  {
    title: "Cross-platform & Web",
    items: [
      { name: "Flutter · Dart", note: { ko: "GetX·GraphQL 기반 사내 ERP 유지보수 및 ScreenUtil을 활용한 화면 크기 대응", en: "GetX/GraphQL-based in-house ERP maintenance and screen-size adaptation with ScreenUtil" } },
      { name: "React Native", note: { ko: "선불카드 앱 NAMANE 개발·유지보수", en: "NAMANE prepaid-card app development and maintenance" } },
      { name: "Next.js · React", note: { ko: "Next.js App Router 기반 터치앤고 웹사이트·관리자 콘솔 개발", en: "TouchNgo website and admin console development with Next.js App Router" } },
    ],
  },
  {
    title: "Server / BaaS",
    items: [
      { name: "Supabase", note: { ko: "NTA 실시간 위치 공유, 모바일 오더 관리자 API, 웹사이트 관리자 콘솔 구현", en: "NTA live location sharing, Mobile Order admin API and website admin console implementation" } },
      { name: "Firebase", note: { ko: "FCM 푸시 알림 및 Cloud Firestore 기반 실시간 채팅 구현", en: "FCM push notifications and Cloud Firestore-based real-time chat implementation" } },
      { name: "GraphQL · REST", note: { ko: "GraphQL 기반 데이터 조회·수정 및 Retrofit2 REST API 연동", en: "GraphQL data queries and updates, REST API integration with Retrofit2" } },
    ],
  },
  {
    title: "Tools & Planning",
    items: [
      { name: "Git · SVN", note: { ko: "코드 변경 이력 관리 및 협업", en: "Code version control and collaboration" } },
      { name: "Figma", note: { ko: "서비스 흐름 정리 및 화면 설계", en: "Service flow planning and UI design" } },
      { name: "Jira · Postman · Swagger", note: { ko: "Jira 업무 관리 및 Postman·Swagger를 활용한 API 검증", en: "Task management with Jira and API validation with Postman and Swagger" } },
    ],
  },
];

export const principles = [
  { n: "01", title: { ko: "Understand the Problem", en: "Understand the Problem" } as L, body: { ko: "기능 구현 전에 실제 문제가 무엇인지 먼저 정의합니다.", en: "Before building anything, I define what the real problem is." } as L },
  { n: "02", title: { ko: "Design for Maintainability", en: "Design for Maintainability" } as L, body: { ko: "기능을 추가하고 수정하기 쉬운 구조를 설계합니다.", en: "I design structures that make features easy to add and change." } as L },
  { n: "03", title: { ko: "Measure Before Optimize", en: "Measure Before Optimize" } as L, body: { ko: "성능 문제는 로그와 지표를 기반으로 분석합니다.", en: "Performance work starts from logs and metrics." } as L },
  { n: "04", title: { ko: "Think Beyond Code", en: "Think Beyond Code" } as L, body: { ko: "개발뿐 아니라 사용자 경험과 운영 환경까지 함께 고려합니다.", en: "I consider user experience and operations, not just code." } as L },
];

export const deepDive: { id: string; label: string; title: L; lead: L; items: string[]; flow?: string[] }[] = [
  {
    id: "architecture",
    label: "Architecture",
    title: { ko: "읽기 쉽고 바꾸기 쉬운 구조", en: "Structure that is easy to read and change" },
    lead: { ko: "UI, 상태 관리, 데이터 처리를 분리해 기능을 수정할 때 다른 부분에 미치는 영향을 줄입니다.", en: "I separate UI, state management and data handling to limit the impact of feature changes." },
    items: ["MVVM", "Repository", "StateFlow", "Lifecycle-aware components"],
    flow: ["UI", "ViewModel", "Repository", "Data source"],
  },
  {
    id: "performance",
    label: "Performance",
    title: { ko: "측정 결과를 바탕으로 성능 개선", en: "Performance improvements based on measurements" },
    lead: { ko: "단계별 처리 시간을 측정하고, 시간이 오래 걸리는 구간부터 개선합니다.", en: "I measure processing time at each step and improve the slowest parts first." },
    items: ["NFC 단계별 처리 시간 측정", "SELECT / WRITE latency logging", "Before / after 비교"],
    flow: ["Measure", "Find bottleneck", "Fix", "Re-measure"],
  },
  {
    id: "realtime",
    label: "Realtime",
    title: { ko: "실시간 버스 위치 전달", en: "Real-time bus location updates" },
    lead: { ko: "기사 앱의 위치 정보를 Realtime Broadcast로 전달하고, 승객 앱의 지도에 버스 위치를 표시합니다.", en: "Location updates from the driver app are sent through Realtime Broadcast and displayed on the passenger app’s map." },
    items: ["2초마다 수집 · 10초마다 일괄 전송", "전송 실패 시 재전송 버퍼", "연결 끊김 시 재구독 · heartbeat", "수신 지연 표시"],
    flow: ["Driver app", "Realtime Broadcast", "Passenger app", "Map marker"],
  },
  {
    id: "nfc",
    label: "NFC",
    title: { ko: "카드와 앱 사이의 통신", en: "Communication between card and app" },
    lead: { ko: "ReaderMode로 태그를 감지하고 IsoDep으로 APDU 명령을 주고받습니다.", en: "Detect tags with ReaderMode and exchange APDU commands over IsoDep." },
    items: ["ReaderMode", "IsoDep", "APDU Communication"],
    flow: ["Tag detected", "SELECT", "Command / response", "Result"],
  },
];

export const contact = {
  headline: { ko: "좋은 제품을 만드는 팀과\n함께하고 싶습니다.", en: "Let's build something\nuseful together." } as L,
};

export const awards = [
  { period: "2017.11", title: { ko: "캡스톤 디자인 경진대회 대상", en: "Capstone Design Competition — Grand prize" } as L },
  { period: "2016.11", title: { ko: "캡스톤 디자인 경진대회 대상", en: "Capstone Design Competition — Grand prize" } as L },
  { period: "2017.06", title: { ko: "GTQ 포토샵 자격", en: "GTQ Photoshop certificate" } as L },
];

// 작업 화면 갤러리(앱·웹). 순서는 프로젝트 목록(최신순)을 따릅니다. image 는 public/apps 아래 파일명입니다.
export const apps: { name: string; image: string; desc: L; where: string; device?: "phone" | "tablet" | "browser" | "contained" }[] = [
  { name: "NTA 승객용", image: "nta-passenger.jpg", desc: { ko: "심야 광역버스 예약 홈 (Android · iOS)", en: "Night bus booking home (Android · iOS)" }, where: "Freelance", device: "phone" },
  { name: "NTA 기사용", image: "nta-driver.jpg", desc: { ko: "태블릿 운행 화면 (티맵 내비게이션, 정류장·탑승 인원)", en: "Tablet driving screen: T map navigation with stops and boardings" }, where: "Freelance", device: "tablet" },
  { name: "TouchNgo", image: "tn-home.jpg", desc: { ko: "회사 웹사이트 메인", en: "Company website home" }, where: "TouchNgo", device: "browser" },
  { name: "모바일 오더 앱", image: "mo-app.png", desc: { ko: "고객용 Android 주문 앱 홈", en: "Customer Android ordering app home" }, where: "TouchNgo", device: "contained" },
  { name: "모바일 오더 어드민", image: "mo-admin.png", desc: { ko: "본사·가맹점 운영 대시보드", en: "HQ and franchise operations dashboard" }, where: "TouchNgo", device: "contained" },
  { name: "돈깨비", image: "donkkaebi.jpg", desc: { ko: "클릭 시점을 기록해 보상 시간을 계산하는 앱", en: "App that records click timestamps to calculate reward time" }, where: "Freelance" },
  { name: "HealingCash", image: "healingcash.jpg", desc: { ko: "명언을 보여주는 리워드 앱", en: "Reward app that shows wise sayings" }, where: "Enliple" },
  { name: "NAMANE", image: "namane.jpg", desc: { ko: "선불카드 앱 (React Native)", en: "Prepaid card app (React Native)" }, where: "i-Aurora" },
  { name: "TictokCash", image: "tictok.jpg", desc: { ko: "틱톡 앱 실행을 감지하는 리워드 앱", en: "Reward app that detects TikTok usage" }, where: "Neoapp" },
  { name: "WebtoonCash", image: "webtoon.jpg", desc: { ko: "웹툰 앱 실행을 감지하는 리워드 앱", en: "Reward app that detects webtoon app usage" }, where: "Neoapp" },
  { name: "TubeCash pro", image: "tubecashpro.jpg", desc: { ko: "유튜브 실행을 감지하는 리워드 앱", en: "Reward app that detects YouTube usage" }, where: "Neoapp" },
  { name: "CashTube", image: "cashtube.jpg", desc: { ko: "유튜브 실행을 감지하는 리워드 앱", en: "Reward app that detects YouTube usage" }, where: "Neoapp" },
  { name: "VideoCash", image: "videocash.jpg", desc: { ko: "동영상 앱 실행을 감지하는 리워드 앱", en: "Reward app that detects video app usage" }, where: "Neoapp" },
  { name: "CheeseCash", image: "cheasecash.jpg", desc: { ko: "사진 촬영으로 보상을 주는 리워드 앱", en: "Reward app built around taking photos" }, where: "Neoapp" },
  { name: "PhotoCash", image: "photocash.jpg", desc: { ko: "사진 촬영으로 보상을 주는 리워드 앱", en: "Reward app built around taking photos" }, where: "Neoapp" },
  { name: "IMJM", image: "imjm.jpg", desc: { ko: "동호회 커뮤니티 플랫폼", en: "Club community platform" }, where: "Neoapp" },
  { name: "LemonDate", image: "lemon.jpg", desc: { ko: "소개팅 커뮤니티 플랫폼", en: "Blind-date community platform" }, where: "Neoapp" },
  { name: "LoveKkun", image: "lovekkun.jpg", desc: { ko: "소개팅 커뮤니티 플랫폼", en: "Blind-date community platform" }, where: "Neoapp" },
];

export const education = [
  { period: "2020 — 2023", school: { ko: "숙명여자대학교 경영전문대학원", en: "Sookmyung Women's University" } as L, degree: "MBA" },
  { period: "2018 — 2020", school: { ko: "고려사이버대학교", en: "Korea Cyber University" } as L, degree: "Bachelor's" },
  { period: "2016 — 2018", school: { ko: "유한대학교", en: "Yuhan University" } as L, degree: "Associate's" },
];

// 회사 경력과 별도로 보여주는 프리랜서 작업
export const sideWork: { name: string; period: string; role: L; desc: L; tech: string[] }[] = [
  {
    name: "NTA 심야 광역버스 앱",
    period: "2026",
    role: { ko: "Android · iOS 앱 개발", en: "Android · iOS development" },
    desc: {
      ko: "심야 광역버스 기사용·승객용 앱을 개발하고, 예약·결제·실시간 위치 조회·운행 관리 기능을 구현했습니다.", en: "Developed driver and passenger apps for a night bus service, with booking, payment, live tracking and trip management.",
    },
    tech: ["Kotlin", "Swift", "SwiftUI", "MVI / MVVM", "Supabase Realtime", "Naver Maps", "T map"],
  },
  {
    name: "돈깨비",
    period: "2022",
    role: { ko: "앱 개발 (Neoapp)", en: "App development (Neoapp)" },
    desc: {
      ko: "클릭 시점을 기록해 보상 시간을 계산하는 기능을 개발하고, Room으로 데이터를 저장했습니다.", en: "Developed reward-time calculation based on click timestamps, with data stored in Room.",
    },
    tech: ["Android", "Room", "SVN"],
  },
  {
    name: "Royal Sovereign International",
    period: "2023",
    role: { ko: "앱 유지보수 (캐나다)", en: "App maintenance (Canada)" },
    desc: {
      ko: "App Store와 Google Play에 등록된 앱의 유지보수와 배포를 담당했습니다.", en: "Maintained and released apps on the App Store and Google Play.",
    },
    tech: ["App Store", "Google Play"],
  },
  {
    name: "Fiverr · Dumb Count",
    period: "2023",
    role: { ko: "앱 개발 (캐나다)", en: "App development (Canada)" },
    desc: {
      ko: "CSV 파일 업로드 및 데이터 검색 기능을 구현했습니다.", en: "Implemented CSV file upload and data search.",
    },
    tech: ["Android", "CSV"],
  },
];
