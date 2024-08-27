import axios from "axios";

import { HOST } from "../model/host";

export const authHost = axios.create({
  baseURL: `${HOST}/api/`,
  timeout: 1000,
});
