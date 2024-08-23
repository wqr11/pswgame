import PlantExtraSmall from "@/assets/svg/game/resource-icons/plant/plant-extrasmall.svg";

import ShoppingCard from "@/assets/svg/game/tabs/market/shopping-card.svg";

import formatNumber from "@/shared/utils/formatNumber";

export const Placement = ({
  placementHolder,
  assetsAvailable,
  assetsInitially,
}: {
  placementHolder: string;
  assetsAvailable: number;
  assetsInitially: number;
}) => {
  return (
    <div className="flex h-6 w-full items-center justify-between bg-[#1B1B1B] py-3 pl-3">
      <h6 className="text-xs uppercase">{placementHolder}</h6>
      <div className="h-6 w-6 border-[1px] border-white p-[2px]">
        <PlantExtraSmall />
      </div>
      <h6 className="text-xs tracking-wide">
        {formatNumber(assetsAvailable)}/{formatNumber(assetsInitially)}
      </h6>
      <button className="flex h-6 w-6 items-center justify-center border-[1px] border-white bg-[#6EBD67] active:opacity-60">
        <ShoppingCard />
      </button>
    </div>
  );
};
