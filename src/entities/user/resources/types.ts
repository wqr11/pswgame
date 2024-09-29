export type GetResourcesParams = { userId: number };

export type UserResourceType = {
  name: string;
  current: number;
};

export type UserResourcesType = {
  data: {
    entities: UserResourceType[];
  };
};
