import { NextResponse } from "next/server";
import { LoginRequestBody } from '@mono-nx-next2/login-api-types';

export async function POST(request: Request) {
  const data: LoginRequestBody = await request.json();

  if (data.username === 'admin' && data.password === 'password') {
    return NextResponse.json(
      { },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { },
    { status: 401 }
  );
}
