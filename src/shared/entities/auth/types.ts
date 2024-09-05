import { ResultType } from "@/shared/types";

export type TokensType = {
  access: string;
  refresh: string;
}

export type AuthDataType = {
  result: ResultType,
  data: {
    accessToken: string;
    refreshToken: string;
  }
} 