import { ResultType } from '@/shared/types';

export type ResourceType = 'crypto' | 'heat' | 'food' | 'energy';

export type PoolResourceType = {
  name: ResourceType;
  current: number;
  total: number;
};

export type PoolResourcesType = {
  result: ResultType;
  data: {
    entities: PoolResourceType[];
    shared_resources: number;
    shared_total_resources: number;
  };
};
