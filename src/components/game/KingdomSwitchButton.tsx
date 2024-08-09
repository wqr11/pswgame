"use client";

import { Link } from "../Link/Link";

import AquaMedium from "@/assets/svg/game/resource-icons/aqua/aqua-medium.svg";
import SunMedium from "@/assets/svg/game/resource-icons/sun/sun-medium.svg";
import PlantMedium from "@/assets/svg/game/resource-icons/plant/plant-medium.svg";
import ElectroMedium from "@/assets/svg/game/resource-icons/electro/electro-medium.svg";

import Lock from "@/assets/svg/game/resource-icons/lock.svg";
import LockGreen from "@/assets/svg/game/resource-icons/lock-green.svg";

export type KingdomStateUnitType = "locked" | "opened" | "available";

type ApiDataType = {
  kingdomsState: {
    aqua: KingdomStateUnitType;
    electro: KingdomStateUnitType;
    sun: KingdomStateUnitType;
    plant: KingdomStateUnitType;
  };
};

const KingdomSwitchButton = ({
  resource,
}: {
  resource: "aqua" | "sun" | "plant" | "electro";
}) => {
  // ###########
  // MOVE LOGIC TO KingdomSwitcher.tsx ! ! !
  // ###########

  const apiData: ApiDataType = {
    // placeholder for api data
    kingdomsState: {
      aqua: "locked",
      electro: "opened",
      sun: "locked",
      plant: "opened",
    },
  };

  const resourceIcons = {
    aqua: AquaMedium,
    sun: SunMedium,
    plant: PlantMedium,
    electro: ElectroMedium,
  };

  const ResourceOpenedIcon = resourceIcons[resource];

  switch (apiData.kingdomsState[resource]) {
    case "opened":
      return (
        <Link
          href=""
          className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] border-[3px] border-white p-1"
        >
          <ResourceOpenedIcon />
        </Link>
      );
    case "locked":
      return (
        <div className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] border-[3px] border-white p-1">
          <Lock />
        </div>
      );
    case "available":
      return (
        <div className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] border-[3px] border-white p-1">
          {/* Add a link to this */}

          <LockGreen />
        </div>
      );
  }
};

export default KingdomSwitchButton;
