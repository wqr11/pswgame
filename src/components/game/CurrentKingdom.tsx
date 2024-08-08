import PlantKingdomTier1 from "@/assets/svg/game/kingdoms/plant/tier-1.svg";
import PlantKingdomTier2 from "@/assets/svg/game/kingdoms/plant/tier-2.svg";
import PlantKingdomTier3 from "@/assets/svg/game/kingdoms/plant/tier-3.svg";
import PlantKingdomTier4 from "@/assets/svg/game/kingdoms/plant/tier-4.svg";

import SunKingdomTier1 from "@/assets/svg/game/kingdoms/sun/tier-1.svg";
import SunKingdomTier2 from "@/assets/svg/game/kingdoms/sun/tier-2.svg";
import SunKingdomTier3 from "@/assets/svg/game/kingdoms/sun/tier-3.svg";
import SunKingdomTier4 from "@/assets/svg/game/kingdoms/sun/tier-4.svg";

import ElectroKingdomTier1 from "@/assets/svg/game/kingdoms/electro/tier-1.svg";
import ElectroKingdomTier2 from "@/assets/svg/game/kingdoms/electro/tier-2.svg";
import ElectroKingdomTier3 from "@/assets/svg/game/kingdoms/electro/tier-3.svg";
import ElectroKingdomTier4 from "@/assets/svg/game/kingdoms/electro/tier-4.svg";

import AquaKingdomTier1 from "@/assets/svg/game/kingdoms/aqua/tier-1.svg";
import AquaKingdomTier2 from "@/assets/svg/game/kingdoms/aqua/tier-2.svg";
import AquaKingdomTier3 from "@/assets/svg/game/kingdoms/aqua/tier-3.svg";
import AquaKingdomTier4 from "@/assets/svg/game/kingdoms/aqua/tier-4.svg";

export type KingdomTypeProp = "sun" | "plant" | "electro" | "aqua";
export type KingdomTierProp = "first" | "second" | "third" | "fourth";

const CurrentKingdom = ({
  kingdomType,
  kingdomTier,
}: {
  kingdomType: KingdomTypeProp;
  kingdomTier: KingdomTierProp;
}) => {
  const kingdoms = {
    plant: {
      first: PlantKingdomTier1,
      second: PlantKingdomTier2,
      third: PlantKingdomTier3,
      fourth: PlantKingdomTier4,
    },
    sun: {
      first: SunKingdomTier1,
      second: SunKingdomTier2,
      third: SunKingdomTier3,
      fourth: SunKingdomTier4,
    },
    electro: {
      first: ElectroKingdomTier1,
      second: ElectroKingdomTier2,
      third: ElectroKingdomTier3,
      fourth: ElectroKingdomTier4,
    },
    aqua: {
      first: AquaKingdomTier1,
      second: AquaKingdomTier2,
      third: AquaKingdomTier3,
      fourth: AquaKingdomTier4,
    },
  };

  const Kingdom = kingdoms[kingdomType][kingdomTier];

  return (
    <div className="mt-[2%] flex h-[160px] w-full justify-center">
      <Kingdom />
    </div>
  );
};

export default CurrentKingdom;
