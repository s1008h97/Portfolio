// public 폴더 파일은 "상대 경로"로 가리킵니다.
// 사이트가 /<저장소 이름>/ 아래(GitHub Pages)에 있어도, 루트(localhost)에 있어도
// 현재 주소 기준으로 알아서 맞춰지므로 빌드 환경 변수가 필요 없습니다.
export const asset = (path: string) => path.replace(/^\/+/, "");
