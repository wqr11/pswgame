import { ReferenceButton, LeaderboardUnit } from "@/widgets";

import PaperclipBig from "./assets/paperclip-big.svg";

import styles from "@/shared/ui/styles/current-tab/currentTab.module.css";

export const ReferralsTab = () => {
  const refsApiData = {
    // placeholder api data
    id: "912309128312",
    username: "user912309128312",
    // ... other data
    refs: [
      {
        id: "123189238127",
        username: "Ref_#1",
        coinsLast24Hours: 156236,
        // ... other data
      },
      {
        id: "102938012938",
        username: "user_1231231",
        coinsLast24Hours: 82375,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
      {
        id: "657657688899",
        username: "gfdryg445",
        coinsLast24Hours: 53276,
        // ... other data
      },
    ],
  };

  return (
    <div className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex justify-end">
        <ReferenceButton reference="Your referals" direction="fromRight" />
      </div>
      <div className={`${styles.section_with_border} flex flex-col gap-8`}>
        <div className="mx-auto mt-2 h-[72px] w-[72px]">
          <PaperclipBig />
        </div>
        <div className="flex max-h-[calc(100%-175px)] flex-grow flex-col gap-3 overflow-y-scroll">
          {refsApiData.refs.map((ref, idx) => (
            <LeaderboardUnit
              key={`ref-${idx}`}
              username={ref.username}
              tokens={ref.coinsLast24Hours}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
