import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const al = request.headers.get("accept-language") || "";
  const prefersAr =
    /(?:^|,)\s*ar\b/i.test(al) ||
    /\bar[-_]?(sa|ae|eg|qa|kw|bh|om|jo|lb|sy|iq|ye|ma|tn|dz|001)\b/i.test(al);

  const locale = prefersAr ? "ar" : "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};
