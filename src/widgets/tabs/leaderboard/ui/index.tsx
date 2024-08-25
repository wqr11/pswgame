import {
  ReferenceButton,
  UserRating,
  TopLeaderboardUnit,
  LeaderboardUnit,
} from "@/widgets";

import { HOST } from "@/shared/utils/host";

import { LeaderType } from "@/shared/types";

import styles from "@/shared/ui/styles/current-tab/currentTab.module.css";

import tabStyles from "./styles/LeaderboardTab.module.css";

export const LeaderboardTab = async () => {
  const res = await fetch(`${HOST}/api/v1/users/get_all`, {
    method: "POST",
    body: JSON.stringify({
      sort_by_tokens: true,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) throw new Error("Error in leaderboard tab");

  const data = await res.json();

  const leaders: LeaderType[] = data.data;

  const places: Array<"first" | "second" | "third"> = [
    "first",
    "second",
    "third",
  ];

  return (
    <div className={`${styles.tab_wrapper} relative flex flex-col gap-1`}>
      <div className="flex justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the leaderboard. Here's the best of our investors and miners."
        />
      </div>
      <div className={`${styles.section_with_border} flex flex-col`}>
        <div className="mt-1 flex justify-center">
          <UserRating username="user2130124912841" coinsLast24Hours={156234} />
        </div>
        <div className="mx-auto mt-4 flex w-full flex-col gap-3">
          {leaders.slice(0, 3).map((leader, idx) => (
            <TopLeaderboardUnit
              key={`top-leader-${idx}`}
              username={leader.user_name}
              tokens={leader.tokens_amount}
              place={places[idx]}
            />
          ))}
        </div>
        <div
          className={`${tabStyles.leaders_scroll} mx-auto w-[90%] overflow-y-scroll`}
        >
          <div className="mt-4 flex w-full flex-col gap-3">
            {leaders.slice(3).map((leader, idx) => (
              <LeaderboardUnit
                key={`leader-${idx}`}
                username={leader.user_name}
                tokens={leader.tokens_amount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export * from "./components";
