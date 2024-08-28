import { CurrentKingdomDisplay, KingdomSwitcher } from "@/widgets";

import {
  KingdomStateUnitType,
  KingdomTypeProp,
  SearchParamsType,
} from "@/shared/types";

import dynamic from "next/dynamic";

// needs to be dynamic as it's stops working when statically renderred
const TabSwitcher = dynamic(() => import("@/widgets/tab-switcher/ui"));

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

const Game = async ({
  params,
  searchParams,
}: {
  params: { kingdom: KingdomTypeProp };
  searchParams: SearchParamsType;
}) => {
  return (
    <div className="relative w-full flex-grow overflow-clip">
      {/* <CurrentKingdomDisplay
        kingdomType={params.kingdom}
        kingdomTier="fourth"
        coins={apiData.coins}
        coinsLast24Hours={apiData.coinsLast24Hours}
      />

      <KingdomSwitcher kingdomsState={apiData.kingdomsState} /> */}

      <TabSwitcher currentTab={searchParams.tab} />
    </div>
  );
};

export default Game;
