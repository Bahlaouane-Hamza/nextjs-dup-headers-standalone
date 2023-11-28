import { NextResponse } from 'next/server'

export default async function middleware(req) {
  return NextResponse.redirect(new URL('/home', req.url))
}

export const config = {
  matcher: '/',
}