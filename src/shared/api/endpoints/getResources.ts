'use server';

import axios, { isAxiosError } from 'axios';

export async function getResources(resources_id: number = -1) {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/v1/kingdom/pool_resources/${resources_id}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/ json',
        },
      },
    );

    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
}
