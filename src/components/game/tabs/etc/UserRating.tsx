import Trophy from "@/assets/svg/game/tabs/leaderboard/trophy.svg";
import UserRatingBorder from "@/assets/svg/game/tabs/leaderboard/user-rating-border.svg";

const UserRating = ({
  username,
  coinsLast24Hours,
}: {
  username: string;
  coinsLast24Hours: number;
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="size-[26px]">
        <Trophy />
      </div>
      <div className="relative">
        <div className="h-[45px] w-[200px]">
          <UserRatingBorder />
        </div>
        <div className="absolute left-0 top-1 flex size-full flex-col items-center uppercase">
          <h6 className="max-w-[80%] overflow-clip text-center text-[13px]">
            {username}
          </h6>
          <p className="text-[13px] text-green-400">
            {coinsLast24Hours} <span className="text-yellow-200">24h</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRating;
