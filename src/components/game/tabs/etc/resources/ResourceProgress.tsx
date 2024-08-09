import { FC, SVGProps } from "react";

import PlantMedium from "@/assets/svg/game/resource-icons/plant/plant-medium.svg";
import SunMedium from "@/assets/svg/game/resource-icons/sun/sun-medium.svg";
import ElectroMedium from "@/assets/svg/game/resource-icons/electro/electro-medium.svg";
import AquaMedium from "@/assets/svg/game/resource-icons/aqua/aqua-medium.svg";

import PlantProgressFill from "@/assets/svg/game/tabs/resources/fills/plant-progress-fill.svg";
import SunProgressFill from "@/assets/svg/game/tabs/resources/fills/sun-progress-fill.svg";
import ElectroProgressFill from "@/assets/svg/game/tabs/resources/fills/electro-progress-fill.svg";
import AquaProgressFill from "@/assets/svg/game/tabs/resources/fills/aqua-progress-fill.svg";

import ProgressBorder from "@/assets/svg/game/tabs/resources/progress-border.svg";

import styles from "@/styles/game/tabs/etc/resources/ResourceProgress.module.css";

type IconsType = {
  aqua: {
    icon: FC<SVGProps<SVGElement>>;
    fill: FC<SVGProps<SVGElement>>;
  };
  sun: {
    icon: FC<SVGProps<SVGElement>>;
    fill: FC<SVGProps<SVGElement>>;
  };
  electro: {
    icon: FC<SVGProps<SVGElement>>;
    fill: FC<SVGProps<SVGElement>>;
  };
  plant: {
    icon: FC<SVGProps<SVGElement>>;
    fill: FC<SVGProps<SVGElement>>;
  };
};

const ResourceProgress = ({
  progress,
  resource,
}: {
  progress: number;
  resource: "aqua" | "electro" | "sun" | "plant";
}) => {
  const icons = {
    aqua: {
      icon: AquaMedium,
      fill: AquaProgressFill,
    },
    electro: {
      icon: ElectroMedium,
      fill: ElectroProgressFill,
    },
    sun: {
      icon: SunMedium,
      fill: SunProgressFill,
    },
    plant: {
      icon: PlantMedium,
      fill: PlantProgressFill,
    },
  };

  const ResourceIcon = icons[resource].icon;

  const ProgressFill = icons[resource].fill;

  return (
    <div className="relative flex w-full items-center">
      <div className="z-20 min-h-[48px] min-w-[48px] border-[3px] border-white bg-[#0e0e0e] p-2">
        <ResourceIcon />
      </div>
      <div className="absolute w-full">
        <div className="relative">
          <div className="relative z-10">
            <ProgressBorder />
          </div>
          <div className="absolute left-0 top-0">
            {/* FIX NOT SIZING */}

            <ProgressFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceProgress;

// className={`${styles.progress} w-full before:w-[${progress}%]`}
