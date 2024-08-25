import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.SECRET_AUTH_KEY;

const key = new TextEncoder().encode(secretKey);

export const encrypt = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${process.env.AUTH_TIMEOUT} sec from now`)
    .sign(key);
};

export const decrypt = async (input: string) => {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
};

export const login = async (user: { userId: number; address: string }) => {
  const expires = new Date(
    Date.now() + parseInt(`${process.env.AUTH_TIMEOUT}`) * 1000,
  );

  const session = await encrypt({ user, expires });

  cookies().set(`${process.env.COOKIES_SESSION_NAME}`, session, {
    expires,
    httpOnly: true,
  });
};

export const logout = async () => {
  cookies().set(`${process.env.COOKIES_SESSION_NAME}`, "", {
    expires: new Date(0),
  });
};

export const getSession = async () => {
  const session = cookies().get(`${process.env.COOKIES_SESSION_NAME}`)?.value;

  if (!session) return null;

  return await decrypt(session);
};

export const updateSession = async (req: NextRequest) => {
  const session = req.cookies.get(`${process.env.COOKIES_SESSION_NAME}`)?.value;

  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(
    Date.now() + parseInt(`${process.env.AUTH_TIMEOUT}`) * 1000,
  );

  const res = NextResponse.next();

  // @ts-ignore
  res.cookies.set({
    name: `${process.env.COOKIES_SESSION_NAME}`,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });

  return res;
};
