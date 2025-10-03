import { NextResponse } from "next/server";

export default function middleware(request){
    const dummyUserData = {
        role: 'admin',
        email: 'admin@gmail.com'
    }

    let isServicesPage = request.nextUrl.pathname.startsWith('/services')
    const isAdmin = dummyUserData.role == 'customer'

    if(isServicesPage && !isAdmin){
        return NextResponse.redirect(new URL('/', request.url))
    }
    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}
