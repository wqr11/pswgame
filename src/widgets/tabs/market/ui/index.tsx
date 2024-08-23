import PlantSmall from "@/assets/svg/game/resource-icons/plant/plant-small.svg";
import SunSmall from "@/assets/svg/game/resource-icons/sun/sun-small.svg";
import ElectroSmall from "@/assets/svg/game/resource-icons/electro/electro-small.svg";
import AquaSmall from "@/assets/svg/game/resource-icons/aqua/aqua-small.svg";

import styles from "@/styles/game/currentTab.module.css";
import ReferenceButton from "./etc/ReferenceButton";
import Placement from "./etc/market/Placement";

export const MarketTab = () => {
  return (
    <div className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 border-[3px] border-white px-1 py-[2px]">
          <span className="h-[26px] w-[26px]">
            <PlantSmall />
          </span>
          <span className="h-[26px] w-[26px]">
            <AquaSmall />
          </span>
          <span className="h-[26px] w-[26px]">
            <ElectroSmall />
          </span>
          <span className="h-[26px] w-[26px]">
            <SunSmall />
          </span>
        </div>
        <ReferenceButton
          direction="fromRight"
          reference="This is market. Here you can trade resources with other people."
        />
      </div>
      <div className={styles.section_with_border}>
        <Placement
          placementHolder="user123123123821"
          assetsAvailable={140000}
          assetsInitially={290000}
        />
      </div>
    </div>
  );
};
