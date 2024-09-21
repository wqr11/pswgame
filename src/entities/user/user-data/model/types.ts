import { KingdomType } from '@/entities/kingdom';
import { TokensType } from '../../../auth';
import { LastOpenedPageType, LastActiveResourceType } from '../../last-opened-state';

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

export type GetUserParams = { access: TokensType['access']; userId: number };

export type UpdateUserParams = {
  access: TokensType['access'] | null;
  userId: number | null;
  username: string;
};

export type UsernameRedirectParams = {
  user: UserType['data'];
  lastOpenedPage: LastOpenedPageType | null;
};
