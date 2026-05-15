import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";


export async function proxy(request) {
    // console.log(request, "request");

    //   return NextResponse.redirect(new URL('/login', request.url)) //if you click matcher paths, that will redirect login page.

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(session){
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL ('/login', request.url));


}

export const config = {
    matcher: ['/career', '/news/:path*'],
}