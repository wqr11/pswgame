import { ResultType } from '@/shared/types';

export type LeaderboardUnitType = {
  id: number;
  user_id: number;
  user_name: string;
  tokens_amount: number;
  referral_tokens_amount: number;
  resources_amount: [number, number, number, number];
  game_information: {
    current_level: number;
    tap_multiplier: number;
  };
  upgrades_information: {
    default: {
      level: number;
    };
  };
};

export type LeaderboardDataType = {
  result: ResultType;
  data: LeaderboardUnitType[];
};
