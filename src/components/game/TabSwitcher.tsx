import { searchParamsType } from "@/app/game/page";

import ResourcesTab from "@/components/game/tabs/ResourcesTab";
import AugmentationsTab from "@/components/game/tabs/AugmentationsTab";
import LeaderboardTab from "@/components/game/tabs/LeaderboardTab";
import MarketTab from "@/components/game/tabs/MarketTab";

const TabSwitcher = ({
  currentTab,
}: {
  currentTab: searchParamsType["tab"];
}) => {
  switch (currentTab) {
    case "resources":
      return <ResourcesTab />;
    case "augmentations":
      return <AugmentationsTab />;
    case "leaderboard":
      return <LeaderboardTab />;
    case "market":
      return <MarketTab />;
  }
};

export default TabSwitcher;
