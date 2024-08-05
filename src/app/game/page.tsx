import Coin from "@/assets/svg/game/coin.svg";
import CurrentKingdom from "@/components/game/CurrentKingdom";

import dynamic from "next/dynamic";

// needs to be dynamic as it's stops working when statically renderred
const TabSwitcher = dynamic(() => import("@/components/game/TabSwitcher"));

export type searchParamsType = {
  tab: "resources" | "augmentations" | "leaderboard" | "market" | null;
};

const Game = ({ searchParams }: { searchParams: searchParamsType }) => {
  return (
    <div className="relative h-[calc(100vh-100px)] w-full overflow-clip">
      {/* Temporary solution for giving <div> the remaining height from the viewport */}
      {/* 100px stand for header height*/}
      <CurrentKingdom kingdomType="sun" kingdomTier="second" />
      <div className="flex flex-col gap-2">
        <div className="mx-auto mt-[5%] flex size-fit items-center gap-[8px] border-[1px] px-[10px]">
          <h6 className="font-normal text-[#B1FF82]">10 000 000</h6>
          <Coin />
        </div>
        <div>
          <p className="mx-auto flex size-fit gap-[10px] border-[1px] border-white px-[10px]">
            <span className="">12 034</span>
          </p>
        </div>
      </div>
      <TabSwitcher currentTab={searchParams.tab} />
    </div>
  );
};

export default Game;
