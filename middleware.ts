// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // request.cookies.get 은 NextRequest API (Edge runtime)에서 사용 가능
  const session = request.cookies.get("session")?.value;

  // 보호할 경로에 대해 세션이 없으면 /login으로 리다이렉트
  if (!session && request.nextUrl.pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 그 외는 정상 진행
  return NextResponse.next();
}

// middleware가 적용될 경로 패턴
export const config = {
  matcher: ["/home/:path*"],
};
