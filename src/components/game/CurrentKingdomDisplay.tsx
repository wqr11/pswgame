import Coin from "@/assets/svg/game/coin.svg";
import CurrentKingdom from "@/components/game/CurrentKingdom";

import {
  KingdomTypeProp,
  KingdomTierProp,
} from "@/components/game/CurrentKingdom";

const CurrentKingdomDisplay = ({
  kingdomType,
  kingdomTier,
  coins,
  coinsLast24Hours,
}: {
  kingdomType: KingdomTypeProp;
  kingdomTier: KingdomTierProp;
  coins: string; // formatted number, like 10 000 000 // CHANGE TO NUMBER LATER ! ! !
  coinsLast24Hours: string;
}) => {
  const textColors = {
    sun: "text-[#FFAD31]",
    plant: "text-[#B1FF82]",
    electro: "text-[#EE71E2]",
    aqua: "text-[#7CB1FF]",
  };

  return (
    <>
      <CurrentKingdom kingdomType={kingdomType} kingdomTier={kingdomTier} />
      <div className={`${textColors[kingdomType]} flex flex-col gap-2`}>
        <div className="mx-auto mt-[5%] flex size-fit items-center gap-[8px] border-[1px] px-[10px]">
          <h6 className="font-normal">{coins}</h6>
          <Coin />
        </div>
        <div>
          <p className="mx-auto flex size-fit gap-[10px] border-[1px] border-white px-[10px]">
            {coinsLast24Hours}
          </p>
        </div>
      </div>
    </>
  );
};

export default CurrentKingdomDisplay;
