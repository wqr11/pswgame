'use client';

import axios, { isAxiosError } from 'axios';

import { createEvent, createStore, createEffect } from 'effector';

import { UserType } from './types';

import Cookies from 'js-cookie';

export const setUserId = createEvent<number>();

export const $userId = createStore<number | null>(null).on(
  setUserId,
  (_, userId) => userId,
);

// export const setUser = createEffect(async (user_id: number) => {
//   console.log(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
//   const access = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
//   try {
//     const res: { data: UserType } = await axios.get(
//       `${process.env.API_URL}/api/v1/users/${user_id}`,
//       {
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           'jwt-token': `${access}`,
//         },
//       },
//     );

//     console.log(res.data);

//     return res;
//   } catch (error) {
//     if (isAxiosError(error)) {
//       throw new Error(error.message);
//     }
//   }
// });

// // CHANGE TYPE
// export const $user = createStore<UserType | null>(null).on(
//   setUser.doneData,
//   (_, data) => data,
// );
