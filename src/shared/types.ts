export type KingdomTypeProp = "miner" | "grower" | "power" | "trader";

export type ResourceProp = "crypto" | "heat" | "food" | "energy";

export type KingdomTierProp = 1 | 2 | 3 | 4;

export type KingdomStateUnitType = "locked" | "opened" | "available";

export type SearchParamsType = {
  tab:
    | "resources"
    | "augmentations"
    | "leaderboard"
    | "market"
    | "about"
    | "refs"
    | "none"
    | undefined;
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

export type PoolResourcesType = {
  result: "success" | "error";
  data: {
    current_resources: [number, number, number, number];
    total_resources: [number, number, number, number];
    shared_resources: number;
    shared_total_resources: number;
  };
};

export type UsersGetAllType = {
  result: "success" | "error";
  data: LeaderboardUnitType[];
};
