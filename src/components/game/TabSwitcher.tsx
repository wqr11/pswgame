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
  return (
    <>
      {currentTab !== null && (
        <>
          {currentTab === "resources" && <ResourcesTab />}
          {currentTab === "augmentations" && <AugmentationsTab />}
          {currentTab === "leaderboard" && <LeaderboardTab />}
          {currentTab === "market" && <MarketTab />}
        </>
      )}
    </>
  );
};

export default TabSwitcher;
