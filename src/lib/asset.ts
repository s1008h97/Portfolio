// GitHub Pages 에서는 basePath(/<repo>)를 붙여야 public 폴더의 파일이 보입니다.
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
