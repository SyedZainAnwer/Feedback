import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = ["/", "/create-post"]

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl

    if(pathname.startsWith("login")) {
        return NextResponse.redirect(new URL("/", request.url))
    } else {
        const findPath: string = protectedRoutes.find((i) => i === pathname) || "login"
        if(pathname.startsWith(findPath)) {
            return NextResponse.redirect(new URL("login", request.url))
        }
    }
}