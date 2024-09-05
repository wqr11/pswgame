import { KingdomSwitchButton } from './kingdom-switch-button';

export const KingdomSwitcher = () => {
  return (
    <div className="mx-auto mt-8 grid size-fit grid-cols-3 gap-4">
      <KingdomSwitchButton
        kingdom="miner"
        kingdomState="opened"
      />
      <KingdomSwitchButton
        kingdom="power"
        kingdomState="opened"
      />
      <KingdomSwitchButton
        kingdom="trader"
        kingdomState="opened"
      />
      <div className="col-span-3 flex justify-center">
        <KingdomSwitchButton
          kingdom="grower"
          kingdomState="opened"
        />
      </div>
    </div>
  );
};
