import KingdomSwitchButton from "@/components/game/KingdomSwitchButton";

import { ApiDataType } from "@/app/game/page";

const KingdomSwitcher = ({
  kingdomsState,
}: {
  kingdomsState: ApiDataType["kingdomsState"];
}) => {
  return (
    <div className="mx-auto mt-5 grid size-fit grid-cols-3 gap-4">
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

export default KingdomSwitcher;
