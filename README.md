# Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion. 정적 export → GitHub Pages.

## 실행
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ 에 정적 파일 생성
```

## 콘텐츠 수정
모든 텍스트·프로젝트는 `src/data/portfolio.ts` 한 곳에서 관리합니다.
`placeholder: true` 항목은 "내용 준비 중" 배지가 붙습니다. 내용을 채운 뒤 `false`로 바꾸세요.

## 배포
`main`에 push 하면 `.github/workflows/deploy.yml` 이 GitHub Pages로 배포합니다.
(저장소 Settings → Pages → Source: GitHub Actions)
