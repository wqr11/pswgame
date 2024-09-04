'use server';

import { redirect } from 'next/navigation';

import { cookies } from 'next/headers';

export const logout = () => {
  cookies().delete(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  cookies().delete(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

  redirect('/');
};
