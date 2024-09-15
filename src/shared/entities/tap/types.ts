import { ResultType } from '@/shared/types';
import { TokensType } from '../auth';

export type TapDataType = {
  result: ResultType;
  data: {
    tokens_amount: number;
  };
};

export type PostTapParams = { access: TokensType['access']; userId: number | null; taps: number };
