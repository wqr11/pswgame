import { ResultType } from '@/shared/types';

export type ResourceProp = 'crypto' | 'heat' | 'food' | 'energy';

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
