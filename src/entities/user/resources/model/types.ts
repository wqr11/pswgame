import { TokensType } from '@/entities';
import { ResultType } from '@/shared/types';

export type GetResourcesParams = { access: TokensType['access']; userId: number };

export type UserResourceType = {
  name: string;
  current: number;
};

export type UserResourcesType = {
  result: ResultType;
  data: {
    entities: UserResourceType[];
  };
};
