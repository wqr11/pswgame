import { KingdomSwitchButton } from "./kingdom-switch-button";

import { ApiDataType } from "@/app/[kingdom]/page";

export const KingdomSwitcher = ({
  kingdomsState,
}: {
  kingdomsState: ApiDataType["kingdomsState"];
}) => {
  return (
    <div className="mx-auto mt-8 grid size-fit grid-cols-3 gap-4">
      <KingdomSwitchButton
        resource="electro"
        resourceState={kingdomsState.electro.state}
      />
      <KingdomSwitchButton
        resource="sun"
        resourceState={kingdomsState.sun.state}
      />
      <KingdomSwitchButton
        resource="aqua"
        resourceState={kingdomsState.aqua.state}
      />
      <div className="col-span-3 flex justify-center">
        <KingdomSwitchButton
          resource="plant"
          resourceState={kingdomsState.plant.state}
        />
      </div>
    </div>
  );
};
