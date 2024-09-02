export type KingdomType = 'miner' | 'grower' | 'power' | 'trader';
export const KingdomTypeArray: KingdomType[] = [
  'miner',
  'grower',
  'power',
  'trader',
];

export type ResourceProp = 'crypto' | 'heat' | 'food' | 'energy';

export type KingdomTier = 1 | 2 | 3 | 4;

export type KingdomStateUnitType = 'locked' | 'opened' | 'available';

export type TabType =
  | 'resources'
  | 'augmentations'
  | 'leaderboard'
  | 'market'
  | 'about'
  | 'refs'
  | 'none';

export type ResultType = 'success' | 'failed';

export type AuthDataType = {
  result: ResultType;
  data: {
    access_token: string;
    refresh_token: string;
  };
};

export type LeaderboardUnitType = {
  id: number;
  user_id: number;
  user_name: string;
  tokens_amount: number;
  referral_tokens_amout: number;
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

export type ResourceDataType = {
  name: ResourceProp;
  current: number;
  total: number;
};

export type PoolResourcesType = {
  result: ResultType;
  data: {
    entities: ResourceDataType[];
    shared_resources: number;
    shared_total_resources: number;
  };
};

export type UsersGetAllType = {
  result: ResultType;
  data: LeaderboardUnitType[];
};
