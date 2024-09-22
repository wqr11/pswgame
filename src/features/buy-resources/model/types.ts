import { TokensType } from '@/entities/auth';
import { PoolResourcesDataType, ResourceType } from '@/entities/resources-pool';
import { UserType } from '@/entities';

export type BuyResourceFromPoolArgs = {
  resourceKey: ResourceType;
  amount: number;
};

export type BuyResourcesFromPoolParams = {
  access?: TokensType['access'];
  userId?: number;
  resourceKey?: ResourceType;
  amount?: number;
};

export type BuyResourcesFromPoolDataType = {
  data: UserType['data'] & PoolResourcesDataType['data'];
};
