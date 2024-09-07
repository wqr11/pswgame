'use client';

import { useEffect } from 'react';

import {
  ReferenceButton,
  UserRating,
  TopLeaderboardUnit,
  LeaderboardUnit,
  LoadingFallback,
} from '@/widgets';

import { useUnit } from 'effector-react';
import { $leaderboard, getLeaders } from '@/shared/entities/leaderboard/store';

import styles from '@/shared/ui/styles/current-tab/currentTab.module.css';

import tabStyles from './styles/LeaderboardTab.module.css';

import { TabAnimated } from '@/widgets/tab-switcher/ui/TabAnimated';

export const LeaderboardTab = () => {
  const places: Array<'first' | 'second' | 'third'> = [
    'first',
    'second',
    'third',
  ];

  const leaders = useUnit($leaderboard);

  useEffect(() => {
    if (!leaders) {
      getLeaders();
    }
  }, []);

  return (
    <TabAnimated
      className={`${styles.tab_wrapper} relative flex flex-col gap-1`}
    >
      <div className="flex justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the leaderboard. Here's the best of our investors and miners."
        />
      </div>
      <div
        className={`${styles.section_with_border} flex max-h-[100%] flex-col overflow-auto`}
      >
        <div className={tabStyles.user_rating}>
          <UserRating
            username="user2130124912841"
            coinsLast24Hours={156234}
          />
        </div>

        {leaders ? (
          <>
            <div className="mx-auto mt-4 flex w-full flex-col gap-3">
              {leaders?.slice(0, 3).map((leader, idx) => (
                <TopLeaderboardUnit
                  key={`top-leader-${idx}`}
                  username={
                    leader.user_name.length > 0 ? leader.user_name : 'UNKNOWN'
                  }
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
                    username={
                      leader.user_name.length > 0 ? leader.user_name : 'UNKNOWN'
                    }
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
    </TabAnimated>
  );
};

export * from './components';
