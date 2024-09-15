import { KingdomSwitchButton } from './kingdom-switch-button';

export const KingdomSwitcher = () => {
  return (
    <div className="mx-auto mt-8 grid size-fit grid-cols-3 gap-4">
      <KingdomSwitchButton
        kingdomType="miner"
        kingdomState="opened"
      />
      <KingdomSwitchButton
        kingdomType="power"
        kingdomState="opened"
      />
      <KingdomSwitchButton
        kingdomType="trader"
        kingdomState="locked"
      />
      <div className="col-span-3 flex justify-center">
        <KingdomSwitchButton
          kingdomType="grower"
          kingdomState="available"
        />
      </div>
    </div>
  );
};
