import { ResultType } from '@/shared/types';
import { TokensType } from '../../../auth';

export type UserType = {
  result: ResultType;
  data: {
    id: number;
    user_id: number;
    user_name: string;
    tokens_amount: number;
    referrals_tokens_amount: number;
    resources_amount: [number, number, number, number];
    game_information: {
      current_level: number;
      tap_multiplier: number;
    };
    upgrades_information: {
      'miner': {
        level: number;
        multiplier: number;
      };
      'grower': {
        level: number;
        multiplier: number;
      };
      'power plant': {
        level: number;
        multiplier: number;
      };
    };
  };
};

export type GetUserParams = { access: TokensType['access']; userId: number };
