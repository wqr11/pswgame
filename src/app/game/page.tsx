import Coin from "@/assets/svg/game/coin.svg";
import CurrentKingdom from "@/components/game/CurrentKingdom";

const Game = () => {
  return (
    <div className="">
      <CurrentKingdom kingdomType="aqua" kingdomTier="second" />
      <div className="flex flex-col gap-2">
        <div className="mx-auto mt-[5%] flex size-fit items-center gap-[8px] border-[1px] px-[10px]">
          <h6 className="font-normal text-[#B1FF82]">10 000 000</h6>
          <Coin />
        </div>
        <div>
          <p className="mx-auto flex size-fit gap-[10px] border-[1px] border-white px-[10px]">
            <span className="">12 034</span>
            <span>24H</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
