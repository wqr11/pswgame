import { searchParamsType } from "@/app/game/page";

import ResourcesTab from "@/components/game/tabs/ResourcesTab";
import AugmentationsTab from "@/components/game/tabs/AugmentationsTab";
import LeaderboardTab from "@/components/game/tabs/LeaderboardTab";
import MarketTab from "@/components/game/tabs/MarketTab";
import AboutTab from "./tabs/AboutTab";
import RefsTab from "./tabs/RefsTab";

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
    case "about":
      return <AboutTab />;
    case "refs":
      return <RefsTab />;
  }
};

export default TabSwitcher;
