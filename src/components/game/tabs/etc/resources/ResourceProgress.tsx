import Image from "next/image";

import PlantMedium from "@/assets/svg/game/resource-icons/plant/plant-medium.svg";
import SunMedium from "@/assets/svg/game/resource-icons/sun/sun-medium.svg";
import ElectroMedium from "@/assets/svg/game/resource-icons/electro/electro-medium.svg";
import AquaMedium from "@/assets/svg/game/resource-icons/aqua/aqua-medium.svg";

const ResourceProgress = ({
  progress,
  resource,
}: {
  progress: number;
  resource: "aqua" | "electro" | "sun" | "plant";
}) => {
  const icons = {
    aqua: AquaMedium,
    electro: ElectroMedium,
    sun: SunMedium,
    plant: PlantMedium,
  };

  const fills = {
    aqua: "/game/tabs/resources/fills/aqua-progress-fill.svg",
    sun: "/game/tabs/resources/fills/sun-progress-fill.svg",
    electro: "/game/tabs/resources/fills/electro-progress-fill.svg",
    plant: "/game/tabs/resources/fills/plant-progress-fill.svg",
  };

  const ResourceIcon = icons[resource];

  const resourceFill = fills[resource];

  return (
    <div className="relative flex items-center">
      <div className="z-30 min-h-[48px] min-w-[48px] border-[3px] border-white bg-[#0e0e0e] p-2">
        <ResourceIcon />
      </div>
      <div className="absolute w-full">
        <div className="relative w-full">
          <Image
            className="relative z-20"
            src="/game/tabs/resources/progress-border.svg"
            width={282}
            height={22}
            alt="progress-border"
            style={{ objectFit: "fill", width: "100%", height: "22px" }}
          />
          <Image
            className="absolute left-0 top-0 z-10"
            src={resourceFill}
            width={200}
            height={22}
            alt="progress-fill"
            style={{ objectFit: "fill", width: `${progress}%`, height: "22px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceProgress;
