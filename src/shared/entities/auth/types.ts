import { ResultType } from "@/shared/types";

export type TokensType = {
  access: string;
  refresh: string;
}

export type AuthDataType = {
  result: ResultType,
  data: {
    access_token: string;
    refresh_token: string;
  }
} 