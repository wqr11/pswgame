import GrowerKingdomTier1 from "./assets/kingdoms/grower/tier-1.svg";
import GrowerKingdomTier2 from "./assets/kingdoms/grower/tier-2.svg";
import GrowerKingdomTier3 from "./assets/kingdoms/grower/tier-3.svg";
import GrowerKingdomTier4 from "./assets/kingdoms/grower/tier-4.svg";

import MinerKingdomTier1 from "./assets/kingdoms/miner/tier-1.svg";
import MinerKingdomTier2 from "./assets/kingdoms/miner/tier-2.svg";
import MinerKingdomTier3 from "./assets/kingdoms/miner/tier-3.svg";
import MinerKingdomTier4 from "./assets/kingdoms/miner/tier-4.svg";

import PowerKingdomTier1 from "./assets/kingdoms/power/tier-1.svg";
import PowerKingdomTier2 from "./assets/kingdoms/power/tier-2.svg";
import PowerKingdomTier3 from "./assets/kingdoms/power/tier-3.svg";
import PowerKingdomTier4 from "./assets/kingdoms/power/tier-4.svg";

import TraderKingdomTier1 from "./assets/kingdoms/trader/tier-1.svg";
import TraderKingdomTier2 from "./assets/kingdoms/trader/tier-2.svg";
import TraderKingdomTier3 from "./assets/kingdoms/trader/tier-3.svg";
import TraderKingdomTier4 from "./assets/kingdoms/trader/tier-4.svg";

import { KingdomTierProp, KingdomTypeProp } from "@/shared/types";

export const CurrentKingdom = ({
  kingdomType,
  kingdomTier,
}: {
  kingdomType: KingdomTypeProp;
  kingdomTier: KingdomTierProp;
}) => {
  const kingdoms = {
    grower: [
      GrowerKingdomTier1,
      GrowerKingdomTier2,
      GrowerKingdomTier3,
      GrowerKingdomTier4,
    ],
    miner: [
      MinerKingdomTier1,
      MinerKingdomTier2,
      MinerKingdomTier3,
      MinerKingdomTier4,
    ],
    power: [
      PowerKingdomTier1,
      PowerKingdomTier2,
      PowerKingdomTier3,
      PowerKingdomTier4,
    ],
    trader: [
      TraderKingdomTier1,
      TraderKingdomTier2,
      TraderKingdomTier3,
      TraderKingdomTier4,
    ],
  };

  const Kingdom = kingdoms[kingdomType][kingdomTier - 1];

  return (
    <div className="mx-8 mt-16 flex h-[200px] w-auto justify-center transition-transform duration-[25] ease-in-out active:scale-95">
      <Kingdom />
    </div>
  );
};
