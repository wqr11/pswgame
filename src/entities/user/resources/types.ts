import { ResourceType } from '@/entities/resources-pool';

export type GetResourcesParams = { userId: number };

export type UserResourceType = {
  name: ResourceType;
  current: number;
};

export type UserResourcesType = {
  data: {
    entities: UserResourceType[];
  };
};
