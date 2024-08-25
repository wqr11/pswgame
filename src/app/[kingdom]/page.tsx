import { CurrentKingdomDisplay, KingdomSwitcher } from "@/widgets";

import {
  KingdomStateUnitType,
  KingdomTypeProp,
  SearchParamsType,
} from "@/shared/types";

import { getSession } from "@/shared/api/auth";

import dynamic from "next/dynamic";

import { HOST } from "@/shared/utils/host";

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

  const res = await fetch(`${HOST}/api/login`, {
    method: "POST",
    body: JSON.stringify({
      userId: 12312,
      address: "12312312312312",
    }),
    next: {
      revalidate: 60,
    },
  });

  console.log(await res.json());

  const session = await getSession();

  console.log(session);

  return (
    <div className="relative w-full flex-grow overflow-clip">
      {/* Temporary solution for giving <div> the remaining height from the viewport */}
      {/* 100px stand for header height*/}

      <CurrentKingdomDisplay
        kingdomType={params.kingdom}
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
