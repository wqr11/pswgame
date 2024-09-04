export type ResultType = 'success' | 'failed';

export type AuthDataType = {
  result: ResultType;
  data: {
    access_token: string;
    refresh_token: string;
  };
};

// move all of this to @/shared/api
