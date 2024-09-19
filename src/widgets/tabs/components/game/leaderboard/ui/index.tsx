'use client';

import { useEffect } from 'react';

import {
  ReferenceButton,
  UserRating,
  TopLeaderboardUnit,
  LeaderboardUnit,
  LoadingFallback,
  TabAnimatedGame,
} from '@/widgets';

import { useUnit } from 'effector-react';
import { $leaderboard, getLeaders, $tokens, $user } from '@/entities';

import styles from '@/shared/ui/styles/current-tab/currentTab.module.css';

import tabStyles from '../styles/LeaderboardTab.module.css';

export const LeaderboardTab = () => {
  const places: Array<'first' | 'second' | 'third'> = ['first', 'second', 'third'];

  const leaders = useUnit($leaderboard);
  const user = useUnit($user);
  const tokens = useUnit($tokens);

  useEffect(() => {
    getLeaders();
  }, []);

  return (
    <TabAnimatedGame className={`${styles.tab_wrapper} relative flex flex-col gap-1`}>
      <div className="flex justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the leaderboard. Here's the best of our investors and miners."
        />
      </div>
      <div
        className={`${styles.section_with_border} ${tabStyles.scroll} flex max-h-[100%] flex-col overflow-auto`}
      >
        <div className={tabStyles.user_rating}>
          <UserRating
            username={user?.user_name ?? 'UNKNOWN'}
            tokens={tokens}
          />
        </div>

        {leaders ? (
          <>
            <div className="mx-auto mt-4 flex w-full flex-col gap-3">
              {leaders?.slice(0, 3).map((leader, idx) => (
                <TopLeaderboardUnit
                  key={`top-leader-${idx}`}
                  username={leader.user_name.length > 0 ? leader.user_name : 'UNKNOWN'}
                  tokens={leader.tokens_amount}
                  place={places[idx]}
                />
              ))}
            </div>
            <div className={tabStyles.leaders}>
              <div className="mt-4 flex w-full flex-col gap-3">
                {leaders?.slice(3, 100).map((leader, idx) => (
                  <LeaderboardUnit
                    key={`leader-${idx}`}
                    username={leader.user_name.length > 0 ? leader.user_name : 'UNKNOWN'}
                    tokens={leader.tokens_amount}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <LoadingFallback />
        )}
      </div>
    </TabAnimatedGame>
  );
};
