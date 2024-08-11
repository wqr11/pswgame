import CurrentKingdomDisplay from "@/components/game/CurrentKingdomDisplay";
import KingdomSwitcher from "@/components/game/KingdomSwitcher";

import { KingdomTypeProp } from "@/components/game/CurrentKingdom";

import { KingdomStateUnitType } from "@/components/game/KingdomSwitchButton";

import dynamic from "next/dynamic";

// needs to be dynamic as it's stops working when statically renderred
const TabSwitcher = dynamic(() => import("@/components/game/TabSwitcher"));

export type searchParamsType = {
  tab:
    | "resources"
    | "augmentations"
    | "leaderboard"
    | "market"
    | "about"
    | "refs"
    | "none";
};

export type ApiDataType = {
  id: string;
  username: string;
  kingdomsState: {
    [kingdomType in KingdomTypeProp]: {
      state: KingdomStateUnitType;
      kingdomTier: "first" | "second" | "third" | "fourth";
      kingdomResourceLast24Hours: number;
    };
  };
  kingdomsOpened: KingdomTypeProp[];
  coins: number;
  coinsLast24Hours: number;
};

const Game = ({ searchParams }: { searchParams: searchParamsType }) => {
  const apiData: ApiDataType = {
    id: "2130124912841",
    username: "user2130124912841",
    kingdomsState: {
      aqua: {
        state: "opened",
        kingdomTier: "second",
        kingdomResourceLast24Hours: 12489,
      },
      sun: {
        state: "opened",
        kingdomTier: "first",
        kingdomResourceLast24Hours: 192002,
      },
      electro: {
        state: "opened",
        kingdomTier: "third",
        kingdomResourceLast24Hours: 25922,
      },
      plant: {
        state: "opened",
        kingdomTier: "fourth",
        kingdomResourceLast24Hours: 1809,
      },
    },
    kingdomsOpened: ["aqua", "sun", "electro", "plant"],
    coins: 10000000,
    coinsLast24Hours: 12534,
  };

  return (
    <div className="relative h-[calc(100vh-100px)] w-full overflow-clip">
      {/* Temporary solution for giving <div> the remaining height from the viewport */}
      {/* 100px stand for header height*/}

      <CurrentKingdomDisplay
        kingdomType="electro"
        kingdomTier="fourth"
        coins={apiData.coins}
        coinsLast24Hours={apiData.coinsLast24Hours}
      />

      <KingdomSwitcher kingdomsState={apiData.kingdomsState} />

      <TabSwitcher currentTab={searchParams.tab} />
    </div>
  );
};

export default Game;
