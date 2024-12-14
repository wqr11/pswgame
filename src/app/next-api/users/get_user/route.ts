import { UserType } from '@/entities';
import { serverApiHost } from '@/shared/api/axios-hosts';
import { NextResponse } from 'next/server';
import { isAxiosError } from 'axios';

export async function GET() {
  try {
    const res = await serverApiHost.get<UserType>('/users/get_user');

    console.log(res)

    return NextResponse.json(
      {
        data: res.data.data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: error.status ?? 500,
        }
      );
    }
    return NextResponse.json(
      {
        error: '[NextJS] Internal Server Error',
      },
      {
        status: 500,
      }
    );
  }
}