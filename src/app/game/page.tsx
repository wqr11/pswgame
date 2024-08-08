import CurrentKingdomDisplay from "@/components/game/CurrentKingdomDisplay";
import KingdomSwitcher from "@/components/game/KingdomSwitcher";

import { KingdomStateUnitType } from "@/components/game/KingdomSwitchButton";

import dynamic from "next/dynamic";

// needs to be dynamic as it's stops working when statically renderred
const TabSwitcher = dynamic(() => import("@/components/game/TabSwitcher"));

export type searchParamsType = {
  tab: "resources" | "augmentations" | "leaderboard" | "market" | "none";
};

export type ApiDataType = {
  id: string;
  username: string;
  kingdomsState: {
    aqua: {
      state: KingdomStateUnitType;
      kingdomTier?: "first" | "second" | "third" | "fourth";
      kingdomResourceLast24Hours?: number;
    };
  };
  coins: number;
};

const Game = ({ searchParams }: { searchParams: searchParamsType }) => {
  // MAKE THIS PLACEHOLDER DATA
  // const apiData: ApiDataType = {
  //   id: "2130124912841",
  //   username: "user2130124912841",
  //   kingdomsState: {
  //     aqua: "locked",
  //     sun: "opened",
  //     electro: "available",
  //     plant: "opened",
  //   },
  //   coins: 10000000,
  //   coinsLast24Hours: 12534,
  // };

  return (
    <div className="relative h-[calc(100vh-100px)] w-full overflow-clip">
      {/* Temporary solution for giving <div> the remaining height from the viewport */}
      {/* 100px stand for header height*/}

      <CurrentKingdomDisplay
        kingdomType="sun"
        kingdomTier="second"
        coins="10 000 000"
        coinsLast24Hours="12 534"
      />

      <KingdomSwitcher />

      <TabSwitcher currentTab={searchParams.tab} />
    </div>
  );
};

export default Game;
