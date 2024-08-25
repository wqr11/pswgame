import { KingdomTypeProp, SearchParamsType } from "@/shared/types";

import {
  ResourcesTab,
  AboutTab,
  AugmentationsTab,
  LeaderboardTab,
  MarketTab,
  ReferralsTab,
  InDevelopmentTab,
} from "@/widgets";

const TabSwitcher = ({
  currentTab,
}: {
  currentTab: SearchParamsType["tab"];
}) => {
  switch (currentTab) {
    case "resources":
      return <ResourcesTab />;
    case "augmentations":
      return <AugmentationsTab />;
    case "leaderboard":
      return <LeaderboardTab />;
    // case "market":
    //   return <MarketTab />;
    case "about":
      return <AboutTab />;
    // case "refs":
    //   return <ReferralsTab />;
    case "none":
      return;
    case undefined:
      return;
    default:
      return <InDevelopmentTab />;
  }
};

export default TabSwitcher;
