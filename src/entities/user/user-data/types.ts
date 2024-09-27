import { KingdomType, LastOpenedPageType, LastActiveResourceType } from '@/entities';

export type UserType = {
  data: {
    id: number;
    user_id: number;
    user_name: string;
    tokens_amount: number;
    referrals_tokens_amount: number;
    resources_amount: {
      [kingdomType in KingdomType]: {
        value: number;
      };
    };
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
    state: {
      last_active_resource: LastActiveResourceType;
      last_opened_page: LastOpenedPageType;
    };
  };
};

export type GetUserParams = { userId: number };

export type UpdateUserParams = {
  userId: number;
  username: string;
};
