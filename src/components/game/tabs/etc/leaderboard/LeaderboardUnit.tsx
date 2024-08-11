import formatNumber from "@/ui/formatNumber";

const LeaderboardUnit = ({
  username = "unknown",
  coinsLast24Hours = 999999999,
}: {
  username: string;
  coinsLast24Hours: number;
}) => {
  return (
    <div className="flex max-h-[20px] min-h-[20px] w-full items-center justify-between bg-[#1B1B1B] px-4">
      <h6 className="text-[10px] uppercase text-white">{username}</h6>
      <h6 className="text-[10px] uppercase text-green-400">
        {formatNumber(coinsLast24Hours)}{" "}
        <span className="text-yellow-300">24h</span>
      </h6>
    </div>
  );
};

export default LeaderboardUnit;
