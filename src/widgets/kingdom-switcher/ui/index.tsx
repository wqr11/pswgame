import { KingdomSwitchButton } from './kingdom-switch-button';

export const KingdomSwitcher = () => {
  return (
    <div className="mx-auto mt-8 grid size-fit grid-cols-3 gap-4">
      <KingdomSwitchButton
        resource="miner"
        resourceState="opened"
      />
      <KingdomSwitchButton
        resource="power"
        resourceState="opened"
      />
      <KingdomSwitchButton
        resource="trader"
        resourceState="opened"
      />
      <div className="col-span-3 flex justify-center">
        <KingdomSwitchButton
          resource="grower"
          resourceState="opened"
        />
      </div>
    </div>
  );
};
