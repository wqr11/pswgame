export type KingdomTypeProp = "sun" | "plant" | "electro" | "aqua";
export type KingdomTierProp = "first" | "second" | "third" | "fourth";
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
export type LeaderType = {
  id: number;
  user_id: number;
  user_name: string;
  tokens_amount: number;
  resources_amount: Array<number>;
};
