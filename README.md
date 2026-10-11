# Seohyeon Kim — Portfolio

모바일 · 웹 개발자 김서현의 포트폴리오 사이트입니다.
한국어/영어, 라이트/다크 모드를 지원하는 단일 페이지이고, GitHub Pages로 배포합니다.

- 사이트: https://s1008h97.github.io/Portfolio/
- 기술: Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion
- 배포: 정적 export (`output: "export"`) → GitHub Actions → GitHub Pages

## 실행

Node.js 20 이상이 필요합니다.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ 에 정적 파일 생성
npm run lint     # 타입 검사 (tsc --noEmit)
```

> 개발 서버(`npm run dev`)가 켜져 있는 동안 같은 폴더에서 `npm run build`를 돌리면 `.next`가 꼬여 스타일이 깨질 수 있습니다.
> 그럴 땐 서버를 끄고 `rm -rf .next` 후 다시 실행하세요.

## 구성

```
src/
  app/                 레이아웃, 전역 스타일(색 토큰), 페이지
  components/          섹션별 컴포넌트 (Hero, About, Experience, Projects, Apps, Skills, Approach, DeepDive, Contact …)
  data/portfolio.ts    모든 콘텐츠 (한국어/영어)
  lib/                 i18n, 이미지 경로 헬퍼
public/apps/           작업 화면 이미지
```

섹션 순서: Hero → 소개 → 경력(타임라인 · 프리랜서 · 학력 · 수상) → 프로젝트 → 작업 화면 → 기술 → 일하는 방식 → 기술 메모 → 연락

## 콘텐츠 수정

텍스트와 프로젝트는 모두 [`src/data/portfolio.ts`](src/data/portfolio.ts) 한 파일에서 관리합니다.
문구는 `{ ko: "…", en: "…" }` 형태로 두 언어를 함께 적습니다.

| 바꾸고 싶은 것 | 위치 |
| --- | --- |
| 이름, 직무, 한 줄 소개, 연락처 | `profile` |
| 히어로 데이터시트(지금/경력/주력/스택/기획) | `facts` |
| 소개 문구, 지표 | `aboutText`, `stats` |
| 회사 경력 | `experience` |
| 프리랜서 | `sideWork` |
| 프로젝트 | `featuredProjects` |
| 작업 화면 이미지 | `apps` |
| 기술 | `skillGroups` |
| 학력, 수상 | `education`, `awards` |

### 프로젝트 추가

`featuredProjects` 배열 **맨 앞**(최신순)에 객체를 하나 추가합니다.

```ts
{
  slug: "my-project",
  name: { ko: "프로젝트 이름", en: "Project name" },
  kind: { ko: "Android", en: "Android" },
  role: { ko: "개발", en: "Development" },
  period: "2026",            // 연도만 표기
  summary: { ko: "한 줄 요약", en: "One-line summary" },
  problem: { ko: "…", en: "…" },
  solution: { ko: "…", en: "…" },
  contribution: [{ ko: "…", en: "…" }],
  tech: ["Kotlin", "Android"],
}
```

소개 섹션의 "프로젝트" 지표는 이 배열의 길이로 자동 계산됩니다.

### 작업 화면 추가

1. 이미지를 `public/apps/`에 넣습니다. (가로 760~1100px 정도로 줄이면 가볍습니다.)
2. `apps` 배열에 항목을 추가합니다. **순서는 프로젝트 목록(최신순)을 따릅니다.**

```ts
{ name: "앱 이름", image: "file.jpg", desc: { ko: "…", en: "…" }, where: "소속", device: "phone" }
```

| `device` | 표시 방식 |
| --- | --- |
| 생략 | 이미지가 그대로 들어갑니다. (이미 기기 목업이 들어간 홍보 이미지) |
| `phone` | 세로 스크린샷을 폰 프레임에 넣습니다. |
| `tablet` | 가로 스크린샷을 태블릿 프레임에 넣습니다. |
| `browser` | 웹 화면을 브라우저 창 프레임에 넣습니다. |
| `contained` | 투명 PNG(이미 목업인 이미지)를 여백을 두고 맞춥니다. |

> 화면에 사람 이름, 전화번호 등 개인정보가 보이지 않는지 확인한 뒤 올려 주세요.

## 디자인 토큰

색은 [`src/app/globals.css`](src/app/globals.css)의 CSS 변수(`--bg`, `--ink`, `--muted`, `--line`, `--accent`)로 관리합니다.
라이트/다크 값은 같은 파일에서 함께 바꿀 수 있습니다.

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/nextjs.yml`이 빌드해서 GitHub Pages에 배포합니다.

- 저장소 **Settings → Pages → Source**가 **GitHub Actions**여야 합니다.
- GitHub Pages는 `/<저장소 이름>/` 아래에서 서비스됩니다. [`next.config.ts`](next.config.ts)가 Actions 환경에서
  저장소 이름으로 `basePath`를 자동 계산하고, `public/` 이미지 경로(`src/lib/asset.ts`)도 같은 값을 씁니다.
- 로컬에서는 `basePath`가 비어 있어 `http://localhost:3000/`에서 바로 열립니다.
- 사용자 도메인을 쓸 때는 `NEXT_PUBLIC_BASE_PATH=""`로 빌드하세요.

## 인터랙션과 접근성

- 스크롤 등장 애니메이션, 숫자 count-up, 현재 섹션 표시, 모바일 메뉴, 작업 화면 자동 스크롤, 커서 효과
- `prefers-reduced-motion`을 켠 환경에서는 count-up, 자동 스크롤, 커서 효과를 끕니다.
