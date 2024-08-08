import KingdomSwitchButton from "@/components/game/KingdomSwitchButton";

const KingdomSwitcher = () => {
  return (
    <div className="mx-auto mt-5 grid size-fit grid-cols-3 gap-4">
      <KingdomSwitchButton resource="electro" />
      <KingdomSwitchButton resource="sun" />
      <KingdomSwitchButton resource="aqua" />
      <div className="col-span-3 flex justify-center">
        <KingdomSwitchButton resource="plant" />
      </div>
    </div>
  ); // MOVE LOGIC FROM KingdomSwitchButton.tsx HERE ! ! !
};

export default KingdomSwitcher;
