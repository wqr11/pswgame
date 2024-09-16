import axios from 'axios';

import { HOST } from '../config/host';

export const authHost = axios.create({
  baseURL: `${HOST}/api/`,
  timeout: 10000,
});
