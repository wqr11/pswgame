import formatNumber from "@/shared/utils/formatNumber";

import styles from "@/styles/game/tabs/etc/leaderboard/TopLeaderboardUnit.module.css";

const TopLeaderboardUnit = ({
  username = "unknown",
  coinsLast24Hours = 999999999,
  place = "first",
}: {
  username: string;
  coinsLast24Hours: number;
  place: "first" | "second" | "third";
}) => {
  return (
    <div className="flex max-h-[30px] min-h-[30px] w-full items-center justify-between bg-[#1B1B1B] px-4">
      <h6
        className={`${styles.top_leader} ${styles[place]} relative text-[12px] uppercase text-white`}
      >
        {username}
      </h6>
      <h6 className="text-[12px] uppercase text-green-400">
        {formatNumber(coinsLast24Hours)}{" "}
        <span className="text-yellow-300">24h</span>
      </h6>
    </div>
  );
};

export default TopLeaderboardUnit;
